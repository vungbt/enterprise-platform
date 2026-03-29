'use client';

import { createContext, ReactNode, useContext, useMemo } from 'react';
import { useSession } from 'next-auth/react';
import { createContextualCan } from '@casl/react';
import { defineAbilityFor } from '@enterprise/permissions/index';
import type { AppAbility } from '@enterprise/permissions/index';

export const AbilityContext = createContext<AppAbility>(defineAbilityFor({ roles: [] }));

export const Can = createContextualCan(AbilityContext.Consumer);

export function useAbility() {
  return useContext(AbilityContext);
}

type AbilityProviderProps = {
  children: ReactNode;
};

export function AbilityProvider({ children }: AbilityProviderProps) {
  const { data: session } = useSession();

  const ability = useMemo(() => {
    const roles = (session?.user as any)?.roles ?? [];
    return defineAbilityFor({ roles });
  }, [session]);

  return (
    <AbilityContext.Provider value={ability}>
      {children}
    </AbilityContext.Provider>
  );
}
