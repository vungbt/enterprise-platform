import { DashboardModule } from '@enterprise/shared-types/modules';
import { crmRoutes } from './routes';

export const crmModule: DashboardModule = {
  id: 'crm',
  name: 'Customer Relationship',
  route: '/crm',
  icon: 'handshake',
  themeKey: 'crm',
  component: crmRoutes.index
};
