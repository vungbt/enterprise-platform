import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { FundContributionCountOrderByAggregateInput } from './fund-contribution-count-order-by-aggregate.input';
import { FundContributionAvgOrderByAggregateInput } from './fund-contribution-avg-order-by-aggregate.input';
import { FundContributionMaxOrderByAggregateInput } from './fund-contribution-max-order-by-aggregate.input';
import { FundContributionMinOrderByAggregateInput } from './fund-contribution-min-order-by-aggregate.input';
import { FundContributionSumOrderByAggregateInput } from './fund-contribution-sum-order-by-aggregate.input';

@InputType()
export class FundContributionOrderByWithAggregationInput {

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

    @Field(() => FundContributionCountOrderByAggregateInput, {nullable:true})
    _count?: FundContributionCountOrderByAggregateInput;

    @Field(() => FundContributionAvgOrderByAggregateInput, {nullable:true})
    _avg?: FundContributionAvgOrderByAggregateInput;

    @Field(() => FundContributionMaxOrderByAggregateInput, {nullable:true})
    _max?: FundContributionMaxOrderByAggregateInput;

    @Field(() => FundContributionMinOrderByAggregateInput, {nullable:true})
    _min?: FundContributionMinOrderByAggregateInput;

    @Field(() => FundContributionSumOrderByAggregateInput, {nullable:true})
    _sum?: FundContributionSumOrderByAggregateInput;
}
