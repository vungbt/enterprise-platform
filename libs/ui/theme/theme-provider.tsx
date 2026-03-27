'use client';

import { ReactNode } from 'react';

type ThemeProviderProps = {
  moduleKey: string;
  children: ReactNode;
};

export function ThemeProvider({ moduleKey, children }: ThemeProviderProps) {
  return <div data-module={moduleKey}>{children}</div>;
}
