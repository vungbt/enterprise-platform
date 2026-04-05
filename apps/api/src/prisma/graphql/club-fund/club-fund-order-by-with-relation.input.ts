import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ClubOrderByWithRelationInput } from '../club/club-order-by-with-relation.input';
import { FundContributionOrderByRelationAggregateInput } from '../fund-contribution/fund-contribution-order-by-relation-aggregate.input';
import { ExpenseOrderByRelationAggregateInput } from '../expense/expense-order-by-relation-aggregate.input';
import { FundTransactionOrderByRelationAggregateInput } from '../fund-transaction/fund-transaction-order-by-relation-aggregate.input';

@InputType()
export class ClubFundOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    clubId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    initialBalance?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    deletedAt?: SortOrderInput;

    @Field(() => ClubOrderByWithRelationInput, {nullable:true})
    club?: ClubOrderByWithRelationInput;

    @Field(() => FundContributionOrderByRelationAggregateInput, {nullable:true})
    contributions?: FundContributionOrderByRelationAggregateInput;

    @Field(() => ExpenseOrderByRelationAggregateInput, {nullable:true})
    expenses?: ExpenseOrderByRelationAggregateInput;

    @Field(() => FundTransactionOrderByRelationAggregateInput, {nullable:true})
    transactions?: FundTransactionOrderByRelationAggregateInput;
}
