import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { InventoryItemCountOrderByAggregateInput } from './inventory-item-count-order-by-aggregate.input';
import { InventoryItemAvgOrderByAggregateInput } from './inventory-item-avg-order-by-aggregate.input';
import { InventoryItemMaxOrderByAggregateInput } from './inventory-item-max-order-by-aggregate.input';
import { InventoryItemMinOrderByAggregateInput } from './inventory-item-min-order-by-aggregate.input';
import { InventoryItemSumOrderByAggregateInput } from './inventory-item-sum-order-by-aggregate.input';

@InputType()
export class InventoryItemOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    sku?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    category?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    stock?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    minStock?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    unit?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    price?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => InventoryItemCountOrderByAggregateInput, {nullable:true})
    _count?: InventoryItemCountOrderByAggregateInput;

    @Field(() => InventoryItemAvgOrderByAggregateInput, {nullable:true})
    _avg?: InventoryItemAvgOrderByAggregateInput;

    @Field(() => InventoryItemMaxOrderByAggregateInput, {nullable:true})
    _max?: InventoryItemMaxOrderByAggregateInput;

    @Field(() => InventoryItemMinOrderByAggregateInput, {nullable:true})
    _min?: InventoryItemMinOrderByAggregateInput;

    @Field(() => InventoryItemSumOrderByAggregateInput, {nullable:true})
    _sum?: InventoryItemSumOrderByAggregateInput;
}
