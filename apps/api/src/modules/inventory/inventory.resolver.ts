import { Query, Resolver } from '@nestjs/graphql';
import { InventoryItemEntity } from './entities/inventory-item.entity';
import { InventoryService } from './services/inventory.service';

@Resolver(() => InventoryItemEntity)
export class InventoryResolver {
  constructor(private readonly inventoryService: InventoryService) {}

  @Query(() => [InventoryItemEntity], { name: 'inventoryItems' })
  inventoryItems() {
    return this.inventoryService.getItems();
  }
}
