import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ClubMemberCountOrderByAggregateInput } from './club-member-count-order-by-aggregate.input';
import { ClubMemberMaxOrderByAggregateInput } from './club-member-max-order-by-aggregate.input';
import { ClubMemberMinOrderByAggregateInput } from './club-member-min-order-by-aggregate.input';

@InputType()
export class ClubMemberOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    clubId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    role?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    joinedAt?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    leftAt?: SortOrderInput;

    @Field(() => ClubMemberCountOrderByAggregateInput, {nullable:true})
    _count?: ClubMemberCountOrderByAggregateInput;

    @Field(() => ClubMemberMaxOrderByAggregateInput, {nullable:true})
    _max?: ClubMemberMaxOrderByAggregateInput;

    @Field(() => ClubMemberMinOrderByAggregateInput, {nullable:true})
    _min?: ClubMemberMinOrderByAggregateInput;
}
