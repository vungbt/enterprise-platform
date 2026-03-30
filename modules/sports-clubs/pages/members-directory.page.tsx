import {
  getClubMembersApi,
  getMemberCandidateUsersApi,
} from '@enterprise/modules/sports-clubs/api/server.api';
import { MembersDirectoryView } from '@enterprise/modules/sports-clubs/views/members-directory.view';
import { notFound } from 'next/navigation';

type Props = {
  token?: string;
  clubId: string;
};

export async function MembersDirectoryPage({ token, clubId }: Props) {
  try {
    const [{ club, members }, candidateUsers] = await Promise.all([
      getClubMembersApi(clubId, token),
      getMemberCandidateUsersApi(token),
    ]);
    return <MembersDirectoryView club={club} members={members} candidateUsers={candidateUsers} />;
  } catch {
    notFound();
  }
}
