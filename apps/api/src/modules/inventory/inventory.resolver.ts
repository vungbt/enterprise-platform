import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { JwtAuthGuard } from '@api/shared/auth/jwt-auth.guard';
import { PaginatedInventoryItem } from '@api/shared/graphql/graphql-pagination';
import { PaginationInput } from '@api/shared/graphql/pagination.types';
import { CaslAbilityGuard } from '@api/shared/permissions/casl-ability.guard';
import { CheckAbility } from '@api/shared/permissions/check-ability.decorator';
import {
  InventoryItem,
  InventoryItemUncheckedCreateInput,
  InventoryItemUncheckedUpdateInput,
} from './inventory.types';
import { InventoryService } from './inventory.service';

@Resolver(() => InventoryItem)
@UseGuards(JwtAuthGuard, CaslAbilityGuard)
export class InventoryResolver {
  constructor(private readonly inventoryService: InventoryService) {}

  @Query(() => PaginatedInventoryItem, { name: 'inventoryItems' })
  @CheckAbility({ action: 'read', subject: 'InventoryItem' })
  inventoryItems(@Args('pagination', { nullable: true }) pagination?: PaginationInput) {
    return this.inventoryService.getItems(pagination);
  }

  @Query(() => InventoryItem, { name: 'inventoryItem' })
  @CheckAbility({ action: 'read', subject: 'InventoryItem' })
  inventoryItem(@Args('id') id: string) {
    return this.inventoryService.getItemById(id);
  }

  @Mutation(() => InventoryItem)
  @CheckAbility({ action: 'create', subject: 'InventoryItem' })
  createInventoryItem(@Args('input') input: InventoryItemUncheckedCreateInput) {
    return this.inventoryService.createItem(input);
  }

  @Mutation(() => InventoryItem)
  @CheckAbility({ action: 'update', subject: 'InventoryItem' })
  updateInventoryItem(
    @Args('id') id: string,
    @Args('input') input: InventoryItemUncheckedUpdateInput,
  ) {
    return this.inventoryService.updateItem(id, input);
  }

  @Mutation(() => Boolean)
  @CheckAbility({ action: 'delete', subject: 'InventoryItem' })
  deleteInventoryItem(@Args('id') id: string) {
    return this.inventoryService.deleteItem(id);
  }
}
