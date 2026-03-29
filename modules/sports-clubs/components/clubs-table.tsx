import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@enterprise/ui/components/ui/table';
import type { ClubDto } from '../api/sports-clubs.api';

type ClubsTableProps = {
  clubs: ClubDto[];
};

export function ClubsTable({ clubs }: ClubsTableProps) {
  return (
    <div className="rounded-lg border border-slate-200 bg-surface p-3 shadow-sm">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Sport</TableHead>
            <TableHead>Captain</TableHead>
            <TableHead>Members</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {clubs.map((club) => (
            <TableRow key={club.id}>
              <TableCell>{club.id}</TableCell>
              <TableCell>{club.name}</TableCell>
              <TableCell>{club.sport}</TableCell>
              <TableCell>{club.captain}</TableCell>
              <TableCell>{club.members}</TableCell>
              <TableCell>
                <span className={club.status === 'active' ? 'text-green-600' : 'text-slate-400'}>
                  {club.status === 'active' ? 'Active' : 'Inactive'}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
