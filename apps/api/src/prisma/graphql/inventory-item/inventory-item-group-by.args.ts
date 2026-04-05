import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InventoryItemWhereInput } from './inventory-item-where.input';
import { Type } from 'class-transformer';
import { InventoryItemOrderByWithAggregationInput } from './inventory-item-order-by-with-aggregation.input';
import { InventoryItemScalarFieldEnum } from './inventory-item-scalar-field.enum';
import { InventoryItemScalarWhereWithAggregatesInput } from './inventory-item-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { InventoryItemCountAggregateInput } from './inventory-item-count-aggregate.input';
import { InventoryItemAvgAggregateInput } from './inventory-item-avg-aggregate.input';
import { InventoryItemSumAggregateInput } from './inventory-item-sum-aggregate.input';
import { InventoryItemMinAggregateInput } from './inventory-item-min-aggregate.input';
import { InventoryItemMaxAggregateInput } from './inventory-item-max-aggregate.input';

@ArgsType()
export class InventoryItemGroupByArgs {

    @Field(() => InventoryItemWhereInput, {nullable:true})
    @Type(() => InventoryItemWhereInput)
    where?: InventoryItemWhereInput;

    @Field(() => [InventoryItemOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<InventoryItemOrderByWithAggregationInput>;

    @Field(() => [InventoryItemScalarFieldEnum], {nullable:false})
    by!: Array<`${InventoryItemScalarFieldEnum}`>;

    @Field(() => InventoryItemScalarWhereWithAggregatesInput, {nullable:true})
    having?: InventoryItemScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => InventoryItemCountAggregateInput, {nullable:true})
    _count?: InventoryItemCountAggregateInput;

    @Field(() => InventoryItemAvgAggregateInput, {nullable:true})
    _avg?: InventoryItemAvgAggregateInput;

    @Field(() => InventoryItemSumAggregateInput, {nullable:true})
    _sum?: InventoryItemSumAggregateInput;

    @Field(() => InventoryItemMinAggregateInput, {nullable:true})
    _min?: InventoryItemMinAggregateInput;

    @Field(() => InventoryItemMaxAggregateInput, {nullable:true})
    _max?: InventoryItemMaxAggregateInput;
}
