import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InventoryItemStatus } from './inventory-item-status.enum';
import { NestedEnumInventoryItemStatusWithAggregatesFilter } from './nested-enum-inventory-item-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumInventoryItemStatusFilter } from './nested-enum-inventory-item-status-filter.input';

@InputType()
export class EnumInventoryItemStatusWithAggregatesFilter {

    @Field(() => InventoryItemStatus, {nullable:true})
    equals?: `${InventoryItemStatus}`;

    @Field(() => [InventoryItemStatus], {nullable:true})
    in?: Array<`${InventoryItemStatus}`>;

    @Field(() => [InventoryItemStatus], {nullable:true})
    notIn?: Array<`${InventoryItemStatus}`>;

    @Field(() => NestedEnumInventoryItemStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumInventoryItemStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumInventoryItemStatusFilter, {nullable:true})
    _min?: NestedEnumInventoryItemStatusFilter;

    @Field(() => NestedEnumInventoryItemStatusFilter, {nullable:true})
    _max?: NestedEnumInventoryItemStatusFilter;
}
