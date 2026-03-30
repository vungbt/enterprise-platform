import { getClubsApi } from '../api/server.api';
import { ClubsView } from '../views/clubs.view';

type Props = { token?: string };

export async function SportsClubsPage({ token }: Props) {
  const clubs = await getClubsApi(token);
  return <ClubsView clubs={clubs} />;
}
