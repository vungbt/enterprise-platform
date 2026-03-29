'use client';

import { AppRoute } from '@dashboard/app/routes';
import { RegexHelper } from '@dashboard/utils/helper/regex';
import { useAppForm, z } from '@enterprise/ui/components';
import { signIn } from 'next-auth/react';
import { useState, useTransition } from 'react';

export const loginSchema = {
  email: z.string().refine(RegexHelper.isEmail, { message: 'Invalid email address' }),
  password: z.string().refine(RegexHelper.isStrongPassword, {
    message:
      'Password must be at least 8 characters and contain uppercase, lowercase, and a number',
  }),
  rememberMe: z.boolean(),
};

export function useLogin() {
  const [error, setError] = useState('');
  const [oauthPending, startOAuthTransition] = useTransition();

  const form = useAppForm({
    defaultValues: { email: '', password: '', rememberMe: false },
    onSubmit: async ({ value }) => {
      setError('');
      const res = await signIn('credentials', {
        email: value.email,
        password: value.password,
        redirect: false,
      });
      if (res?.error) {
        setError('Invalid email or password. Please try again.');
      } else {
        window.location.href = AppRoute.Home;
      }
    },
  });

  function loginWithGoogle() {
    startOAuthTransition(() => {
      void signIn('google', { callbackUrl: AppRoute.Home });
    });
  }

  function loginWithMicrosoft() {
    startOAuthTransition(() => {
      void signIn('microsoft-entra-id', { callbackUrl: AppRoute.Home });
    });
  }

  return { form, error, oauthPending, loginWithGoogle, loginWithMicrosoft };
}
