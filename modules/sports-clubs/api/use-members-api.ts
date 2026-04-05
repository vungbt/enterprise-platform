'use client';

import {
  type AddClubMemberInput,
  addClubMemberApi,
  type RegisterMemberUserInput,
  registerMemberUserApi,
  removeClubMemberApi,
} from '@enterprise/modules/sports-clubs/api/server.api';
import { useSession } from 'next-auth/react';

export function useMembersApi() {
  const { data: session } = useSession();
  const token = session?.backendToken;

  return {
    createMember: (input: AddClubMemberInput) => addClubMemberApi(input, token),
    createUser: (input: RegisterMemberUserInput) => registerMemberUserApi(input, token),
    deleteMember: (memberId: string) => removeClubMemberApi(memberId, token),
  };
}
