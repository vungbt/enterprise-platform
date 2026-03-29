'use client';

import { createContextualCan } from '@casl/react';
import type { AppAbility } from '@enterprise/permissions/index';
import { defineAbilityFor } from '@enterprise/permissions/index';
import { useSession } from 'next-auth/react';
import { createContext, type ReactNode, useContext, useMemo } from 'react';

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
    const roles = session?.user?.roles ?? [];
    return defineAbilityFor({ roles });
  }, [session]);

  return <AbilityContext.Provider value={ability}>{children}</AbilityContext.Provider>;
}
