import { Module } from '@nestjs/common';
import { InventoryRepository } from './repositories/inventory.repository';
import { InventoryService } from './services/inventory.service';
import { InventoryResolver } from './inventory.resolver';

@Module({
  providers: [InventoryRepository, InventoryService, InventoryResolver]
})
export class InventoryModule {}
