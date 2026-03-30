import { ClubsView } from '../components/clubs-view';
import { getClubs } from '../services/sports-clubs.service';

type Props = { token?: string };

export async function SportsClubsPage({ token }: Props) {
  const clubs = await getClubs(token);
  return <ClubsView clubs={clubs} />;
}
