'use client';

import { useSession } from 'next-auth/react';
import {
  type CreateClubInput,
  createClubApi,
  deleteClubApi,
  getClubsApi,
  type UpdateClubInput,
  updateClubApi,
} from './sports-clubs.api';

/**
 * Returns all clubs API functions pre-bound with the current user's token.
 * Components using this hook don't need to know about auth tokens.
 */
export function useClubsApi() {
  const { data: session } = useSession();
  const token = session?.backendToken;

  return {
    getClubs: () => getClubsApi(token),
    createClub: (input: CreateClubInput) => createClubApi(input, token),
    updateClub: (id: string, input: UpdateClubInput) => updateClubApi(id, input, token),
    deleteClub: (id: string) => deleteClubApi(id, token),
  };
}
