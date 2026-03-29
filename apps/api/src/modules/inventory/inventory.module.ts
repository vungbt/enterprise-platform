import { Module } from '@nestjs/common';
import { InventoryResolver } from './inventory.resolver';
import { InventoryRepository } from './repositories/inventory.repository';
import { InventoryService } from './services/inventory.service';

@Module({
  providers: [InventoryRepository, InventoryService, InventoryResolver],
})
export class InventoryModule {}
