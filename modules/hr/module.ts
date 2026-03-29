import type { DashboardModule } from '@enterprise/shared-types/modules';
import { hrRoutes } from './routes';

export const hrModule: DashboardModule = {
  id: 'hr',
  name: 'Human Resources',
  route: '/hr',
  icon: 'users',
  themeKey: 'hr',
  component: hrRoutes.index,
};
