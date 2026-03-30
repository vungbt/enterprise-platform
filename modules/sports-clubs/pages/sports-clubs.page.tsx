import { getClubs } from '../services/sports-clubs.service';
import { ClubsView } from '../views/clubs.view';

type Props = { token?: string };

export async function SportsClubsPage({ token }: Props) {
  const clubs = await getClubs(token);
  return <ClubsView clubs={clubs} />;
}
