import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ExpenseCountOrderByAggregateInput } from './expense-count-order-by-aggregate.input';
import { ExpenseAvgOrderByAggregateInput } from './expense-avg-order-by-aggregate.input';
import { ExpenseMaxOrderByAggregateInput } from './expense-max-order-by-aggregate.input';
import { ExpenseMinOrderByAggregateInput } from './expense-min-order-by-aggregate.input';
import { ExpenseSumOrderByAggregateInput } from './expense-sum-order-by-aggregate.input';

@InputType()
export class ExpenseOrderByWithAggregationInput {

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

    @Field(() => ExpenseCountOrderByAggregateInput, {nullable:true})
    _count?: ExpenseCountOrderByAggregateInput;

    @Field(() => ExpenseAvgOrderByAggregateInput, {nullable:true})
    _avg?: ExpenseAvgOrderByAggregateInput;

    @Field(() => ExpenseMaxOrderByAggregateInput, {nullable:true})
    _max?: ExpenseMaxOrderByAggregateInput;

    @Field(() => ExpenseMinOrderByAggregateInput, {nullable:true})
    _min?: ExpenseMinOrderByAggregateInput;

    @Field(() => ExpenseSumOrderByAggregateInput, {nullable:true})
    _sum?: ExpenseSumOrderByAggregateInput;
}
