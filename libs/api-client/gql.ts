import type { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { print } from 'graphql';

const GRAPHQL_URL = process.env.BACKEND_URL
  ? `${process.env.BACKEND_URL}/graphql`
  : 'http://localhost:4000/graphql';

const AUTH_ERROR_MESSAGES = [
  'invalid or expired token',
  'unauthorized',
  'jwt expired',
  'not authenticated',
];

export class AuthError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'AuthError';
  }
}

export async function gqlFetch<TResult, TVariables>(
  document: TypedDocumentNode<TResult, TVariables>,
  variables?: TVariables,
  token?: string,
): Promise<TResult> {
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  if (token) headers.Authorization = `Bearer ${token}`;

  const res = await fetch(GRAPHQL_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({ query: print(document), variables }),
    cache: 'no-store',
  });

  const json = (await res.json()) as { data?: TResult; errors?: { message: string }[] };

  if (json.errors?.length) {
    const msg = json.errors[0].message;
    if (AUTH_ERROR_MESSAGES.some((m) => msg.toLowerCase().includes(m))) {
      throw new AuthError(msg);
    }
    throw new Error(msg);
  }

  if (!json.data) throw new Error('No data returned from GraphQL');
  return json.data;
}
