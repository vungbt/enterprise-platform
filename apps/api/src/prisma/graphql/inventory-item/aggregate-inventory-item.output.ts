import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { InventoryItemCountAggregate } from './inventory-item-count-aggregate.output';
import { InventoryItemAvgAggregate } from './inventory-item-avg-aggregate.output';
import { InventoryItemSumAggregate } from './inventory-item-sum-aggregate.output';
import { InventoryItemMinAggregate } from './inventory-item-min-aggregate.output';
import { InventoryItemMaxAggregate } from './inventory-item-max-aggregate.output';

@ObjectType()
export class AggregateInventoryItem {

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
