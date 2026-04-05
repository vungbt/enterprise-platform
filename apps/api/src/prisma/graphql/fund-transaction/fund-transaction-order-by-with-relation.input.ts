import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ClubFundOrderByWithRelationInput } from '../club-fund/club-fund-order-by-with-relation.input';
import { FundContributionOrderByWithRelationInput } from '../fund-contribution/fund-contribution-order-by-with-relation.input';
import { ExpenseOrderByWithRelationInput } from '../expense/expense-order-by-with-relation.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';

@InputType()
export class FundTransactionOrderByWithRelationInput {

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

    @Field(() => ClubFundOrderByWithRelationInput, {nullable:true})
    fund?: ClubFundOrderByWithRelationInput;

    @Field(() => FundContributionOrderByWithRelationInput, {nullable:true})
    contribution?: FundContributionOrderByWithRelationInput;

    @Field(() => ExpenseOrderByWithRelationInput, {nullable:true})
    expense?: ExpenseOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    createdBy?: UserOrderByWithRelationInput;
}
