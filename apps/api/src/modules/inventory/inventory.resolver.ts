import { Args, Mutation, ObjectType, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { InventoryItemEntity } from './entities/inventory-item.entity';
import { InventoryService } from './services/inventory.service';
import { CreateInventoryItemInput } from './dto/create-inventory-item.input';
import { UpdateInventoryItemInput } from './dto/update-inventory-item.input';
import {
  Paginated,
  PaginationInput,
} from '../../shared/graphql/pagination.types';
import { JwtAuthGuard } from '../../shared/auth/jwt-auth.guard';
import { CaslAbilityGuard } from '../../shared/permissions/casl-ability.guard';
import { CheckAbility } from '../../shared/permissions/check-ability.decorator';

@ObjectType()
export class PaginatedInventoryItem extends Paginated(InventoryItemEntity) {}

@Resolver(() => InventoryItemEntity)
@UseGuards(JwtAuthGuard, CaslAbilityGuard)
export class InventoryResolver {
  constructor(private readonly inventoryService: InventoryService) {}

  @Query(() => PaginatedInventoryItem, { name: 'inventoryItems' })
  @CheckAbility({ action: 'read', subject: 'InventoryItem' })
  inventoryItems(
    @Args('pagination', { nullable: true }) pagination?: PaginationInput,
  ) {
    return this.inventoryService.getItems(pagination);
  }

  @Query(() => InventoryItemEntity, { name: 'inventoryItem' })
  @CheckAbility({ action: 'read', subject: 'InventoryItem' })
  inventoryItem(@Args('id') id: string) {
    return this.inventoryService.getItemById(id);
  }

  @Mutation(() => InventoryItemEntity)
  @CheckAbility({ action: 'create', subject: 'InventoryItem' })
  createInventoryItem(@Args('input') input: CreateInventoryItemInput) {
    return this.inventoryService.createItem(input);
  }

  @Mutation(() => InventoryItemEntity)
  @CheckAbility({ action: 'update', subject: 'InventoryItem' })
  updateInventoryItem(
    @Args('id') id: string,
    @Args('input') input: UpdateInventoryItemInput,
  ) {
    return this.inventoryService.updateItem(id, input);
  }

  @Mutation(() => Boolean)
  @CheckAbility({ action: 'delete', subject: 'InventoryItem' })
  deleteInventoryItem(@Args('id') id: string) {
    return this.inventoryService.deleteItem(id);
  }
}
