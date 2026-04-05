import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ClubCountOrderByAggregateInput } from './club-count-order-by-aggregate.input';
import { ClubMaxOrderByAggregateInput } from './club-max-order-by-aggregate.input';
import { ClubMinOrderByAggregateInput } from './club-min-order-by-aggregate.input';

@InputType()
export class ClubOrderByWithAggregationInput {

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

    @Field(() => ClubCountOrderByAggregateInput, {nullable:true})
    _count?: ClubCountOrderByAggregateInput;

    @Field(() => ClubMaxOrderByAggregateInput, {nullable:true})
    _max?: ClubMaxOrderByAggregateInput;

    @Field(() => ClubMinOrderByAggregateInput, {nullable:true})
    _min?: ClubMinOrderByAggregateInput;
}
