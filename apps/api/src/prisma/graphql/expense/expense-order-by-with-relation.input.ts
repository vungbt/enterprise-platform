import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ExpenseCategoryOrderByWithRelationInput } from '../expense-category/expense-category-order-by-with-relation.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { ClubOrderByWithRelationInput } from '../club/club-order-by-with-relation.input';
import { DepartmentOrderByWithRelationInput } from '../department/department-order-by-with-relation.input';
import { ClubFundOrderByWithRelationInput } from '../club-fund/club-fund-order-by-with-relation.input';
import { FundTransactionOrderByRelationAggregateInput } from '../fund-transaction/fund-transaction-order-by-relation-aggregate.input';

@InputType()
export class ExpenseOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    amount?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    date?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    categoryId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdById?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    clubId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    departmentId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    fundId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    deletedAt?: SortOrderInput;

    @Field(() => ExpenseCategoryOrderByWithRelationInput, {nullable:true})
    category?: ExpenseCategoryOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    createdBy?: UserOrderByWithRelationInput;

    @Field(() => ClubOrderByWithRelationInput, {nullable:true})
    club?: ClubOrderByWithRelationInput;

    @Field(() => DepartmentOrderByWithRelationInput, {nullable:true})
    department?: DepartmentOrderByWithRelationInput;

    @Field(() => ClubFundOrderByWithRelationInput, {nullable:true})
    fund?: ClubFundOrderByWithRelationInput;

    @Field(() => FundTransactionOrderByRelationAggregateInput, {nullable:true})
    fundTransactions?: FundTransactionOrderByRelationAggregateInput;
}
