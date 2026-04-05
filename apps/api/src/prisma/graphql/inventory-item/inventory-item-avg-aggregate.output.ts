import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class InventoryItemAvgAggregate {

    @Field(() => Float, {nullable:true})
    stock?: number;

    @Field(() => Float, {nullable:true})
    minStock?: number;

    @Field(() => Float, {nullable:true})
    price?: number;
}
