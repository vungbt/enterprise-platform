'use client';

import { useSession } from 'next-auth/react';
import {
  type CreateClubInput,
  createClubApi,
  deleteClubApi,
  type UpdateClubInput,
  updateClubApi,
} from './server.api';

export function useClubsApi() {
  const { data: session } = useSession();
  const token = session?.backendToken;

  return {
    createClub: (input: CreateClubInput) => createClubApi(input, token),
    updateClub: (id: string, input: UpdateClubInput) => updateClubApi(id, input, token),
    deleteClub: (id: string) => deleteClubApi(id, token),
  };
}
