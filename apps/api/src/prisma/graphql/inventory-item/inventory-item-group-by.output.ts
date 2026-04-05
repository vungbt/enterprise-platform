import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { InventoryItemStatus } from '../prisma/inventory-item-status.enum';
import { InventoryItemCountAggregate } from './inventory-item-count-aggregate.output';
import { InventoryItemAvgAggregate } from './inventory-item-avg-aggregate.output';
import { InventoryItemSumAggregate } from './inventory-item-sum-aggregate.output';
import { InventoryItemMinAggregate } from './inventory-item-min-aggregate.output';
import { InventoryItemMaxAggregate } from './inventory-item-max-aggregate.output';

@ObjectType()
export class InventoryItemGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    sku!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    category?: string;

    @Field(() => Int, {nullable:false})
    stock!: number;

    @Field(() => Int, {nullable:false})
    minStock!: number;

    @Field(() => String, {nullable:false})
    unit!: string;

    @Field(() => Float, {nullable:false})
    price!: number;

    @Field(() => InventoryItemStatus, {nullable:false})
    status!: `${InventoryItemStatus}`;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => InventoryItemCountAggregate, {nullable:true})
    _count?: InventoryItemCountAggregate;

    @Field(() => InventoryItemAvgAggregate, {nullable:true})
    _avg?: InventoryItemAvgAggregate;

    @Field(() => InventoryItemSumAggregate, {nullable:true})
    _sum?: InventoryItemSumAggregate;

    @Field(() => InventoryItemMinAggregate, {nullable:true})
    _min?: InventoryItemMinAggregate;

    @Field(() => InventoryItemMaxAggregate, {nullable:true})
    _max?: InventoryItemMaxAggregate;
}
