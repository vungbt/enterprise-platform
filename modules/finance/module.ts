import type { DashboardModule } from '@enterprise/shared-types/modules';
import { FinancePage } from './pages/finance-page';
import { FinanceRoute } from './routes';

export const financeModule: DashboardModule = {
  id: 'finance',
  name: 'Finance',
  route: FinanceRoute.Index,
  icon: 'landmark',
  themeKey: 'finance',
  component: FinancePage,
};
