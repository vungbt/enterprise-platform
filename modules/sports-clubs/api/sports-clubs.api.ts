import { gqlFetch } from '@enterprise/api-client/gql';
import {
  ClubStatus,
  CreateClubDocument,
  type CreateClubMutationVariables,
  DeleteClubDocument,
  GetClubsDocument,
  type GetClubsQuery,
  UpdateClubDocument,
  type UpdateClubMutationVariables,
} from '@gql/graphql';

/** Derived directly from the GraphQL query — no manual type definition. */
export type Club = GetClubsQuery['clubs']['items'][number];

export type CreateClubInput = CreateClubMutationVariables['input'];
export type UpdateClubInput = UpdateClubMutationVariables['input'];

const MOCK_CLUBS: Club[] = [
  {
    id: 'SC-001',
    name: 'Saigon FC',
    sport: 'Football',
    captainName: 'Nguyen Van Toan',
    membersCount: 22,
    status: ClubStatus.Active,
    fundBalance: 5200,
    createdAt: '2024-02-10',
  },
  {
    id: 'SC-002',
    name: 'HCM Badminton Club',
    sport: 'Badminton',
    captainName: 'Tran Minh Duc',
    membersCount: 15,
    status: ClubStatus.Active,
    fundBalance: 0,
    createdAt: '2024-05-15',
  },
  {
    id: 'SC-003',
    name: 'Pickleball Masters',
    sport: 'Pickleball',
    captainName: 'Le Thu Hang',
    membersCount: 18,
    status: ClubStatus.Active,
    fundBalance: 3400,
    createdAt: '2024-08-20',
  },
];

export async function getClubsApi(token?: string): Promise<Club[]> {
  try {
    const data = await gqlFetch(GetClubsDocument, {}, token);
    return data.clubs.items;
  } catch {
    return MOCK_CLUBS;
  }
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
