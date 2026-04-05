import { gqlFetch } from '@enterprise/api-client/gql';
import { serverGqlFetch } from '@enterprise/api-client/server-gql';
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
  RemoveClubMemberDocument,
  UpdateClubDocument,
  type UpdateClubMutationVariables,
} from '@gql/graphql';

/** Derived directly from the GraphQL query — no manual type definition. */
export type Club = GetClubsQuery['clubs']['items'][number];
export type ClubMember = NonNullable<GetClubMembersQuery['club']['members']>[number];
export type MemberCandidateUser = GetMemberCandidateUsersQuery['candidateUsers'][number];

export type CreateClubInput = CreateClubMutationVariables['input'];
export type UpdateClubInput = UpdateClubMutationVariables['input'];
export type AddClubMemberInput = AddClubMemberMutationVariables['input'];

export async function getClubsApi(token?: string): Promise<Club[]> {
  const data = await serverGqlFetch(GetClubsDocument, {}, token);
  return data.clubs.items;
}

export async function getClubMembersApi(
  clubId: string,
  token?: string,
): Promise<{
  club: Pick<Club, 'id' | 'name'>;
  members: ClubMember[];
}> {
  const data = await serverGqlFetch(GetClubMembersDocument, { id: clubId }, token);
  return {
    club: { id: data.club.id, name: data.club.name },
    members: data.club.members ?? [],
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

export async function removeClubMemberApi(memberId: string, token?: string): Promise<boolean> {
  const data = await gqlFetch(RemoveClubMemberDocument, { memberId }, token);
  return data.removeClubMember;
}

export async function getMemberCandidateUsersApi(token?: string): Promise<MemberCandidateUser[]> {
  const data = await serverGqlFetch(GetMemberCandidateUsersDocument, {}, token);
  return data.candidateUsers;
}
