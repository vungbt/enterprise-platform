import { DashboardModule } from '@enterprise/shared-types/modules';
import { sportsClubsRoutes } from './routes';

export const sportsClubsModule: DashboardModule = {
  id: 'sports-clubs',
  name: 'Sports & Clubs',
  route: '/sports-clubs',
  icon: 'trophy',
  themeKey: 'sports-clubs',
  component: sportsClubsRoutes.index
};
