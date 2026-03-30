import { getClubsApi } from '../api/sports-clubs.api';

export async function getClubs(token?: string) {
  return getClubsApi(token);
}
