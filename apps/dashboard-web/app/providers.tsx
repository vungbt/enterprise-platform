'use client';

import { ReactNode } from 'react';
import { AbilityProvider } from './ability-provider';

type ProvidersProps = {
  children: ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  return <AbilityProvider>{children}</AbilityProvider>;
}
