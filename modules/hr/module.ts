import type { DashboardModule } from '@enterprise/shared-types/modules';
import { HrRoute, hrRoutes } from './routes';

export const hrModule: DashboardModule = {
  id: 'hr',
  name: 'Human Resources',
  route: HrRoute.Index,
  icon: 'users',
  themeKey: 'hr',
  component: hrRoutes.index,
};
