import { auth } from '@dashboard/auth';
import { sportsClubsModule } from '@enterprise/modules/sports-clubs/module';
import { MembersDirectoryPage } from '@enterprise/modules/sports-clubs/pages/members-directory.page';
import { ThemeProvider } from '@enterprise/ui/theme/theme-provider';

type RouteProps = {
  params: Promise<{
    clubId: string;
  }>;
};

export default async function MembersRoutePage({ params }: RouteProps) {
  const { clubId } = await params;
  const session = await auth();

  return (
    <ThemeProvider moduleKey={sportsClubsModule.themeKey}>
      <MembersDirectoryPage token={session?.backendToken} clubId={clubId} />
    </ThemeProvider>
  );
}
