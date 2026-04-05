'use client';

import { AuthError } from '@enterprise/api-client/gql';
import { signOut } from 'next-auth/react';
import { useEffect } from 'react';

export default function PlatformError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    if (
      error instanceof AuthError ||
      error.message?.toLowerCase().includes('invalid or expired token')
    ) {
      signOut({ callbackUrl: '/auth/login' });
    }
  }, [error]);

  return (
    <div className="flex h-full items-center justify-center">
      <div className="text-center">
        <h2 className="text-lg font-semibold">Something went wrong</h2>
        <button
          type="button"
          className="mt-4 rounded bg-primary px-4 py-2 text-white"
          onClick={reset}
        >
          Try again
        </button>
      </div>
    </div>
  );
}
