import { getClubsApi } from '../api/sports-clubs.api';

export async function getClubs() {
  return getClubsApi();
}
