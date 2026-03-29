import { apiClient } from '@enterprise/api-client/client';

export type ClubDto = {
  id: string;
  name: string;
  sport: string;
  captain: string;
  members: number;
  status: 'active' | 'inactive';
};

export async function getClubsApi() {
  try {
    const response = await apiClient.get<ClubDto[]>('/sports-clubs');
    return response.data;
  } catch {
    return [
      {
        id: 'SC-001',
        name: 'Thunder FC',
        sport: 'Football',
        captain: 'James Carter',
        members: 22,
        status: 'active' as const,
      },
      {
        id: 'SC-002',
        name: 'Swift Runners',
        sport: 'Athletics',
        captain: 'Maria Santos',
        members: 15,
        status: 'active' as const,
      },
      {
        id: 'SC-003',
        name: 'Net Masters',
        sport: 'Volleyball',
        captain: 'Kevin Nguyen',
        members: 12,
        status: 'active' as const,
      },
      {
        id: 'SC-004',
        name: 'Iron Lifters',
        sport: 'Weightlifting',
        captain: 'Sara Kim',
        members: 8,
        status: 'inactive' as const,
      },
      {
        id: 'SC-005',
        name: 'Aqua Sharks',
        sport: 'Swimming',
        captain: 'Tom Rivera',
        members: 18,
        status: 'active' as const,
      },
    ];
  }
}
