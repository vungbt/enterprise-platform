import { gqlFetch } from '@enterprise/api-client/gql';
import {
  AddClubMemberDocument,
  type AddClubMemberMutationVariables,
  CreateClubDocument,
  type CreateClubMutationVariables,
  DeleteClubDocument,
  GetClubMembersDocument,
  type GetClubMembersQuery,
  GetClubsDocument,
  type GetClubsQuery,
  GetMemberCandidateUsersDocument,
  type GetMemberCandidateUsersQuery,
  RegisterMemberUserDocument,
  type RegisterMemberUserMutationVariables,
  RemoveClubMemberDocument,
  UpdateClubDocument,
  type UpdateClubMutationVariables,
} from '@gql/graphql';

/** Derived directly from the GraphQL query — no manual type definition. */
export type Club = GetClubsQuery['clubs']['items'][number];
export type ClubMember = GetClubMembersQuery['club']['members'][number];
export type MemberCandidateUser = GetMemberCandidateUsersQuery['candidateUsers'][number];

export type CreateClubInput = CreateClubMutationVariables['input'];
export type UpdateClubInput = UpdateClubMutationVariables['input'];
export type AddClubMemberInput = AddClubMemberMutationVariables['input'];
export type RegisterMemberUserInput = RegisterMemberUserMutationVariables['input'];

export async function getClubsApi(token?: string): Promise<Club[]> {
  const data = await gqlFetch(GetClubsDocument, {}, token);
  return data.clubs.items;
}

export async function getClubMembersApi(
  clubId: string,
  token?: string,
): Promise<{
  club: Pick<Club, 'id' | 'name'>;
  members: ClubMember[];
}> {
  const data = await gqlFetch(GetClubMembersDocument, { id: clubId }, token);
  return {
    club: { id: data.club.id, name: data.club.name },
    members: data.club.members,
  };
}

export async function createClubApi(input: CreateClubInput, token?: string): Promise<Club> {
  const data = await gqlFetch(CreateClubDocument, { input }, token);
  return data.createClub;
}

export async function updateClubApi(
  id: string,
  input: UpdateClubInput,
  token?: string,
): Promise<Club> {
  const data = await gqlFetch(UpdateClubDocument, { id, input }, token);
  return data.updateClub;
}

export async function deleteClubApi(id: string, token?: string): Promise<boolean> {
  const data = await gqlFetch(DeleteClubDocument, { id }, token);
  return data.deleteClub;
}

export async function addClubMemberApi(
  input: AddClubMemberInput,
  token?: string,
): Promise<boolean> {
  await gqlFetch(AddClubMemberDocument, { input }, token);
  return true;
}

export async function removeClubMemberApi(
  clubId: string,
  userId: string,
  token?: string,
): Promise<boolean> {
  const data = await gqlFetch(RemoveClubMemberDocument, { clubId, userId }, token);
  return data.removeClubMember;
}

export async function getMemberCandidateUsersApi(token?: string): Promise<MemberCandidateUser[]> {
  const data = await gqlFetch(GetMemberCandidateUsersDocument, {}, token);
  return data.candidateUsers;
}

export async function registerMemberUserApi(
  input: RegisterMemberUserInput,
  token?: string,
): Promise<{ id: string; name: string; email: string }> {
  const data = await gqlFetch(RegisterMemberUserDocument, { input }, token);
  return data.register.user;
}
