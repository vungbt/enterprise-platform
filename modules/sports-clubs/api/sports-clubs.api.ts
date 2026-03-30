import { gqlFetch } from '@enterprise/api-client/gql';

export type ClubDto = {
  id: string;
  name: string;
  sport: string;
  captain: string;
  members: number;
  status: 'active' | 'inactive';
  fundBalance: number;
  createdAt: string; // ISO date string
};

const GET_CLUBS_QUERY = `
  query GetClubs {
    clubs {
      items {
        id
        name
        sport
        status
        createdAt
        membersCount
        captainName
        fundBalance
      }
    }
  }
`;

type GetClubsResponse = {
  clubs: {
    items: {
      id: string;
      name: string;
      sport: string;
      status: 'active' | 'inactive';
      createdAt: string;
      membersCount: number;
      captainName: string | null;
      fundBalance: number;
    }[];
  };
};

const CREATE_CLUB_MUTATION = `
  mutation CreateClub($input: CreateClubInput!) {
    createClub(input: $input) {
      id
      name
      sport
      status
      createdAt
      membersCount
      captainName
      fundBalance
    }
  }
`;

export type CreateClubInput = {
  name: string;
  sport: string;
  description?: string;
  status?: 'active' | 'inactive';
};

export async function createClubApi(input: CreateClubInput, token?: string): Promise<ClubDto> {
  const data = await gqlFetch<{
    createClub: ClubDto & { membersCount: number; captainName: string | null; fundBalance: number };
  }>(CREATE_CLUB_MUTATION, { input }, token);
  const item = data.createClub;
  return {
    id: item.id,
    name: item.name,
    sport: item.sport,
    status: item.status,
    captain: item.captainName ?? '—',
    members: item.membersCount,
    fundBalance: item.fundBalance,
    createdAt: item.createdAt,
  };
}

const MOCK_CLUBS: ClubDto[] = [
  {
    id: 'SC-001',
    name: 'Saigon FC',
    sport: 'Football',
    captain: 'Nguyen Van Toan',
    members: 22,
    status: 'active',
    fundBalance: 5200,
    createdAt: '2024-02-10',
  },
  {
    id: 'SC-002',
    name: 'HCM Badminton Club',
    sport: 'Badminton',
    captain: 'Tran Minh Duc',
    members: 15,
    status: 'active',
    fundBalance: 0,
    createdAt: '2024-05-15',
  },
  {
    id: 'SC-003',
    name: 'Pickleball Masters',
    sport: 'Pickleball',
    captain: 'Le Thu Hang',
    members: 18,
    status: 'active',
    fundBalance: 3400,
    createdAt: '2024-08-20',
  },
];

export async function getClubsApi(token?: string): Promise<ClubDto[]> {
  try {
    const data = await gqlFetch<GetClubsResponse>(GET_CLUBS_QUERY, {}, token);
    return data.clubs.items.map((item) => ({
      id: item.id,
      name: item.name,
      sport: item.sport,
      status: item.status,
      captain: item.captainName ?? '—',
      members: item.membersCount,
      fundBalance: item.fundBalance,
      createdAt: item.createdAt,
    }));
  } catch {
    return MOCK_CLUBS;
  }
}
