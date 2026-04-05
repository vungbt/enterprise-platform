import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ExpenseCategoryCountOrderByAggregateInput } from './expense-category-count-order-by-aggregate.input';
import { ExpenseCategoryMaxOrderByAggregateInput } from './expense-category-max-order-by-aggregate.input';
import { ExpenseCategoryMinOrderByAggregateInput } from './expense-category-min-order-by-aggregate.input';

@InputType()
export class ExpenseCategoryOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => ExpenseCategoryCountOrderByAggregateInput, {nullable:true})
    _count?: ExpenseCategoryCountOrderByAggregateInput;

    @Field(() => ExpenseCategoryMaxOrderByAggregateInput, {nullable:true})
    _max?: ExpenseCategoryMaxOrderByAggregateInput;

    @Field(() => ExpenseCategoryMinOrderByAggregateInput, {nullable:true})
    _min?: ExpenseCategoryMinOrderByAggregateInput;
}
