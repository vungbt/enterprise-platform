import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class FundTransactionMaxOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    fundId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    flow?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    amount?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    balanceAfter?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    note?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    refContribId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    refExpenseId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    refTransactionId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdById?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
}
