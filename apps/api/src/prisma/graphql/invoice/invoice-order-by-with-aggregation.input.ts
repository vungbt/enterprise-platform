import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { InvoiceCountOrderByAggregateInput } from './invoice-count-order-by-aggregate.input';
import { InvoiceAvgOrderByAggregateInput } from './invoice-avg-order-by-aggregate.input';
import { InvoiceMaxOrderByAggregateInput } from './invoice-max-order-by-aggregate.input';
import { InvoiceMinOrderByAggregateInput } from './invoice-min-order-by-aggregate.input';
import { InvoiceSumOrderByAggregateInput } from './invoice-sum-order-by-aggregate.input';

@InputType()
export class InvoiceOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    code?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    amount?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    tax?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    total?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    dueDate?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    issuedAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    customerId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => InvoiceCountOrderByAggregateInput, {nullable:true})
    _count?: InvoiceCountOrderByAggregateInput;

    @Field(() => InvoiceAvgOrderByAggregateInput, {nullable:true})
    _avg?: InvoiceAvgOrderByAggregateInput;

    @Field(() => InvoiceMaxOrderByAggregateInput, {nullable:true})
    _max?: InvoiceMaxOrderByAggregateInput;

    @Field(() => InvoiceMinOrderByAggregateInput, {nullable:true})
    _min?: InvoiceMinOrderByAggregateInput;

    @Field(() => InvoiceSumOrderByAggregateInput, {nullable:true})
    _sum?: InvoiceSumOrderByAggregateInput;
}
