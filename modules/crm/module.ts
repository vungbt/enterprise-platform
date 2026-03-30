import type { DashboardModule } from '@enterprise/shared-types/modules';
import { CrmRoute, crmRoutes } from './routes';

export const crmModule: DashboardModule = {
  id: 'crm',
  name: 'Customer Relationship',
  route: CrmRoute.Index,
  icon: 'handshake',
  themeKey: 'crm',
  component: crmRoutes.index,
};
