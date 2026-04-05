import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserRoleOrderByRelationAggregateInput } from '../user-role/user-role-order-by-relation-aggregate.input';
import { EmployeeOrderByRelationAggregateInput } from '../employee/employee-order-by-relation-aggregate.input';
import { CustomerOrderByRelationAggregateInput } from '../customer/customer-order-by-relation-aggregate.input';
import { ClubMemberOrderByRelationAggregateInput } from '../club-member/club-member-order-by-relation-aggregate.input';
import { ClubOrderByRelationAggregateInput } from '../club/club-order-by-relation-aggregate.input';
import { ExpenseOrderByRelationAggregateInput } from '../expense/expense-order-by-relation-aggregate.input';
import { FundContributionOrderByRelationAggregateInput } from '../fund-contribution/fund-contribution-order-by-relation-aggregate.input';
import { FundTransactionOrderByRelationAggregateInput } from '../fund-transaction/fund-transaction-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @HideField()
    password?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    avatar?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    isActive?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    deletedAt?: SortOrderInput;

    @Field(() => UserRoleOrderByRelationAggregateInput, {nullable:true})
    roles?: UserRoleOrderByRelationAggregateInput;

    @Field(() => EmployeeOrderByRelationAggregateInput, {nullable:true})
    employees?: EmployeeOrderByRelationAggregateInput;

    @Field(() => CustomerOrderByRelationAggregateInput, {nullable:true})
    ownedCustomers?: CustomerOrderByRelationAggregateInput;

    @Field(() => ClubMemberOrderByRelationAggregateInput, {nullable:true})
    clubMemberships?: ClubMemberOrderByRelationAggregateInput;

    @Field(() => ClubOrderByRelationAggregateInput, {nullable:true})
    ownedClubs?: ClubOrderByRelationAggregateInput;

    @Field(() => ExpenseOrderByRelationAggregateInput, {nullable:true})
    expenses?: ExpenseOrderByRelationAggregateInput;

    @Field(() => FundContributionOrderByRelationAggregateInput, {nullable:true})
    fundContributions?: FundContributionOrderByRelationAggregateInput;

    @Field(() => FundContributionOrderByRelationAggregateInput, {nullable:true})
    confirmedContributions?: FundContributionOrderByRelationAggregateInput;

    @Field(() => FundTransactionOrderByRelationAggregateInput, {nullable:true})
    fundTransactions?: FundTransactionOrderByRelationAggregateInput;
}
