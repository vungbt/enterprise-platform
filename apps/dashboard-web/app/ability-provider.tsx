'use client';

import { createContext, ReactNode, useContext } from 'react';
import { createContextualCan } from '@casl/react';
import { defineAbilityFor } from '@enterprise/permissions/index';
import type { AppAbility } from '@enterprise/permissions/index';

// Create a default admin ability for now (no real auth yet).
// Later this can fetch `myAbilities` from the API and hydrate.
const defaultAbility = defineAbilityFor({ roles: ['admin'] });

export const AbilityContext = createContext<AppAbility>(defaultAbility);

export const Can = createContextualCan(AbilityContext.Consumer);

export function useAbility() {
  return useContext(AbilityContext);
}

type AbilityProviderProps = {
  children: ReactNode;
};

export function AbilityProvider({ children }: AbilityProviderProps) {
  // TODO: Replace with real auth — fetch myAbilities from API,
  // reconstruct ability via createMongoAbility(rules).
  const ability = defaultAbility;

  return (
    <AbilityContext.Provider value={ability}>
      {children}
    </AbilityContext.Provider>
  );
}
