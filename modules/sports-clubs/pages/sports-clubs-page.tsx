import { ClubsTable } from '../components/clubs-table';
import { getClubs } from '../services/sports-clubs.service';

export async function SportsClubsPage() {
  const clubs = await getClubs();

  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">Sports & Clubs</h2>
        <p className="text-sm text-slate-500">Manage sports teams and activity clubs</p>
      </div>
      <ClubsTable clubs={clubs} />
    </section>
  );
}
