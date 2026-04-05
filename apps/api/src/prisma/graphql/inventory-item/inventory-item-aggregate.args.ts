import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InventoryItemWhereInput } from './inventory-item-where.input';
import { Type } from 'class-transformer';
import { InventoryItemOrderByWithRelationInput } from './inventory-item-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { InventoryItemWhereUniqueInput } from './inventory-item-where-unique.input';
import { Int } from '@nestjs/graphql';
import { InventoryItemCountAggregateInput } from './inventory-item-count-aggregate.input';
import { InventoryItemAvgAggregateInput } from './inventory-item-avg-aggregate.input';
import { InventoryItemSumAggregateInput } from './inventory-item-sum-aggregate.input';
import { InventoryItemMinAggregateInput } from './inventory-item-min-aggregate.input';
import { InventoryItemMaxAggregateInput } from './inventory-item-max-aggregate.input';

@ArgsType()
export class InventoryItemAggregateArgs {

    @Field(() => InventoryItemWhereInput, {nullable:true})
    @Type(() => InventoryItemWhereInput)
    where?: InventoryItemWhereInput;

    @Field(() => [InventoryItemOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<InventoryItemOrderByWithRelationInput>;

    @Field(() => InventoryItemWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<InventoryItemWhereUniqueInput, 'id' | 'sku'>;

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
