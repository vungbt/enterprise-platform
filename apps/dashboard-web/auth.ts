import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import Google from 'next-auth/providers/google';
import MicrosoftEntraId from 'next-auth/providers/microsoft-entra-id';
import { PUBLIC_ROUTES } from './constants/routes';

const BACKEND_URL = process.env.BACKEND_URL ?? 'http://localhost:4000';

function decodeJwtRoles(token: string): string[] {
  try {
    const payload = JSON.parse(Buffer.from(token.split('.')[1], 'base64url').toString());
    return payload.roles ?? [];
  } catch {
    return [];
  }
}

async function gqlMutation<T>(query: string, variables: Record<string, unknown>): Promise<T> {
  const res = await fetch(`${BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables }),
    cache: 'no-store',
  });
  const json = await res.json();
  if (json.errors) throw new Error(json.errors[0].message);
  return json.data;
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        try {
          const data = await gqlMutation<{
            login: { accessToken: string; user: { id: string; name: string; email: string } };
          }>(
            `mutation Login($input: LoginInput!) {
              login(input: $input) { accessToken user { id name email } }
            }`,
            { input: { email: credentials.email, password: credentials.password } },
          );
          const { accessToken, user } = data.login;
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            backendToken: accessToken,
          };
        } catch {
          return null;
        }
      },
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
    MicrosoftEntraId({
      clientId: process.env.MICROSOFT_CLIENT_ID ?? '',
      clientSecret: process.env.MICROSOFT_CLIENT_SECRET ?? '',
      issuer: `https://login.microsoftonline.com/${process.env.MICROSOFT_TENANT_ID ?? 'common'}/v2.0`,
    }),
  ],

  callbacks: {
    authorized({ auth, request }) {
      const { pathname } = request.nextUrl;
      if (pathname.startsWith('/api/')) return true;
      if (PUBLIC_ROUTES.some((route) => pathname.startsWith(route))) return true;
      return !!auth?.user;
    },

    async jwt({ token, user, account }) {
      // Credentials login — backendToken already on user object
      if (user?.backendToken) {
        token.backendToken = user.backendToken;
        token.id = user.id;
        token.roles = decodeJwtRoles(user.backendToken);
      }

      // OAuth login — sync user with backend
      if (account && account.provider !== 'credentials' && user?.email) {
        try {
          const data = await gqlMutation<{
            loginWithOAuth: { accessToken: string; user: { id: string } };
          }>(
            `mutation LoginWithOAuth($email: String!, $name: String!) {
              loginWithOAuth(email: $email, name: $name) { accessToken user { id } }
            }`,
            { email: user.email, name: user.name ?? user.email },
          );
          token.backendToken = data.loginWithOAuth.accessToken;
          token.id = data.loginWithOAuth.user.id;
          token.roles = decodeJwtRoles(data.loginWithOAuth.accessToken);
        } catch {
          // OAuth sign-in still works even if backend sync fails
        }
      }

      return token;
    },

    async session({ session, token }) {
      session.backendToken = token.backendToken ?? '';
      session.user.id = token.id ?? '';
      session.user.roles = token.roles ?? [];
      return session;
    },
  },

  pages: {
    signIn: '/auth/login',
    error: '/auth/login',
  },
});
