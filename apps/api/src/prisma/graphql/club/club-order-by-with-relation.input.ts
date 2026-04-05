import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { ClubMemberOrderByRelationAggregateInput } from '../club-member/club-member-order-by-relation-aggregate.input';
import { ExpenseOrderByRelationAggregateInput } from '../expense/expense-order-by-relation-aggregate.input';
import { ClubFundOrderByWithRelationInput } from '../club-fund/club-fund-order-by-with-relation.input';

@InputType()
export class ClubOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    sport?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    foundedAt?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdById?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    deletedAt?: SortOrderInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    createdBy?: UserOrderByWithRelationInput;

    @Field(() => ClubMemberOrderByRelationAggregateInput, {nullable:true})
    members?: ClubMemberOrderByRelationAggregateInput;

    @Field(() => ExpenseOrderByRelationAggregateInput, {nullable:true})
    expenses?: ExpenseOrderByRelationAggregateInput;

    @Field(() => ClubFundOrderByWithRelationInput, {nullable:true})
    fund?: ClubFundOrderByWithRelationInput;
}
