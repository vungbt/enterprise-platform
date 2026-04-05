import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ClubFundOrderByWithRelationInput } from '../club-fund/club-fund-order-by-with-relation.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { FundTransactionOrderByRelationAggregateInput } from '../fund-transaction/fund-transaction-order-by-relation-aggregate.input';

@InputType()
export class FundContributionOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    fundId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    memberId?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    month?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    year?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    amount?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    note?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    paidAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    confirmedBy?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => ClubFundOrderByWithRelationInput, {nullable:true})
    fund?: ClubFundOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    member?: UserOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    confirmedByUser?: UserOrderByWithRelationInput;

    @Field(() => FundTransactionOrderByRelationAggregateInput, {nullable:true})
    transactions?: FundTransactionOrderByRelationAggregateInput;
}
