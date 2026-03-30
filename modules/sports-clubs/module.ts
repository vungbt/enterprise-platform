import type { DashboardModule } from '@enterprise/shared-types/modules';
import { SportsClubsRoute, sportsClubsRoutes } from './routes';

export const sportsClubsModule: DashboardModule = {
  id: 'sports-clubs',
  name: 'Sports & Clubs',
  route: SportsClubsRoute.Index,
  icon: 'trophy',
  themeKey: 'sports-clubs',
  component: sportsClubsRoutes.index,
};
