import type { DashboardModule } from '@enterprise/shared-types/modules';
import { InventoryPage } from './pages/inventory-page';
import { InventoryRoute } from './routes';

export const inventoryModule: DashboardModule = {
  id: 'inventory',
  name: 'Inventory',
  route: InventoryRoute.Index,
  icon: 'package',
  themeKey: 'inventory',
  component: InventoryPage,
};
