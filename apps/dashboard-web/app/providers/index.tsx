'use client';

import { SessionProvider } from 'next-auth/react';
import type { ReactNode } from 'react';
import { AbilityProvider } from './ability.provider';

type ProvidersProps = {
  children: ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  return (
    <SessionProvider>
      <AbilityProvider>{children}</AbilityProvider>
    </SessionProvider>
  );
}
