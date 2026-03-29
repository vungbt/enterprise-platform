import type { DashboardModule } from '@enterprise/shared-types/modules';
import { FinancePage } from './pages/finance-page';

export const financeModule: DashboardModule = {
  id: 'finance',
  name: 'Finance',
  route: '/finance',
  icon: 'landmark',
  themeKey: 'finance',
  component: FinancePage,
};
