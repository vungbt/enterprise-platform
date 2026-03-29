import type { DashboardModule } from '@enterprise/shared-types/modules';
import { InventoryPage } from './pages/inventory-page';

export const inventoryModule: DashboardModule = {
  id: 'inventory',
  name: 'Inventory',
  route: '/inventory',
  icon: 'package',
  themeKey: 'inventory',
  component: InventoryPage,
};
