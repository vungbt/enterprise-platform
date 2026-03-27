import { useMemo } from 'react';

export type UserRole = 'admin' | 'manager' | 'staff';

export function useAuth() {
  return useMemo(
    () => ({
      isAuthenticated: true,
      user: {
        id: 'demo-user',
        name: 'Demo User',
        roles: ['admin'] as UserRole[]
      }
    }),
    []
  );
}
