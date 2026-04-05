import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class InventoryItemSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    stock?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    minStock?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    price?: `${SortOrder}`;
}
