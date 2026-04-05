import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { FundTransactionCountOrderByAggregateInput } from './fund-transaction-count-order-by-aggregate.input';
import { FundTransactionAvgOrderByAggregateInput } from './fund-transaction-avg-order-by-aggregate.input';
import { FundTransactionMaxOrderByAggregateInput } from './fund-transaction-max-order-by-aggregate.input';
import { FundTransactionMinOrderByAggregateInput } from './fund-transaction-min-order-by-aggregate.input';
import { FundTransactionSumOrderByAggregateInput } from './fund-transaction-sum-order-by-aggregate.input';

@InputType()
export class FundTransactionOrderByWithAggregationInput {

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

    @Field(() => SortOrderInput, {nullable:true})
    note?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    refContribId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    refExpenseId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    refTransactionId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdById?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => FundTransactionCountOrderByAggregateInput, {nullable:true})
    _count?: FundTransactionCountOrderByAggregateInput;

    @Field(() => FundTransactionAvgOrderByAggregateInput, {nullable:true})
    _avg?: FundTransactionAvgOrderByAggregateInput;

    @Field(() => FundTransactionMaxOrderByAggregateInput, {nullable:true})
    _max?: FundTransactionMaxOrderByAggregateInput;

    @Field(() => FundTransactionMinOrderByAggregateInput, {nullable:true})
    _min?: FundTransactionMinOrderByAggregateInput;

    @Field(() => FundTransactionSumOrderByAggregateInput, {nullable:true})
    _sum?: FundTransactionSumOrderByAggregateInput;
}
