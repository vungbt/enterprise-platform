import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class InventoryItemAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    stock?: true;

    @Field(() => Boolean, {nullable:true})
    minStock?: true;

    @Field(() => Boolean, {nullable:true})
    price?: true;
}
