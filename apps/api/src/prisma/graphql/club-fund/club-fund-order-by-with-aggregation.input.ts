import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ClubFundCountOrderByAggregateInput } from './club-fund-count-order-by-aggregate.input';
import { ClubFundAvgOrderByAggregateInput } from './club-fund-avg-order-by-aggregate.input';
import { ClubFundMaxOrderByAggregateInput } from './club-fund-max-order-by-aggregate.input';
import { ClubFundMinOrderByAggregateInput } from './club-fund-min-order-by-aggregate.input';
import { ClubFundSumOrderByAggregateInput } from './club-fund-sum-order-by-aggregate.input';

@InputType()
export class ClubFundOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    clubId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    initialBalance?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    deletedAt?: SortOrderInput;

    @Field(() => ClubFundCountOrderByAggregateInput, {nullable:true})
    _count?: ClubFundCountOrderByAggregateInput;

    @Field(() => ClubFundAvgOrderByAggregateInput, {nullable:true})
    _avg?: ClubFundAvgOrderByAggregateInput;

    @Field(() => ClubFundMaxOrderByAggregateInput, {nullable:true})
    _max?: ClubFundMaxOrderByAggregateInput;

    @Field(() => ClubFundMinOrderByAggregateInput, {nullable:true})
    _min?: ClubFundMinOrderByAggregateInput;

    @Field(() => ClubFundSumOrderByAggregateInput, {nullable:true})
    _sum?: ClubFundSumOrderByAggregateInput;
}
