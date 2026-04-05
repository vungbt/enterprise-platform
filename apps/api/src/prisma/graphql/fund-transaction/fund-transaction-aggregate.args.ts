import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FundTransactionWhereInput } from './fund-transaction-where.input';
import { Type } from 'class-transformer';
import { FundTransactionOrderByWithRelationInput } from './fund-transaction-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { FundTransactionWhereUniqueInput } from './fund-transaction-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FundTransactionCountAggregateInput } from './fund-transaction-count-aggregate.input';
import { FundTransactionAvgAggregateInput } from './fund-transaction-avg-aggregate.input';
import { FundTransactionSumAggregateInput } from './fund-transaction-sum-aggregate.input';
import { FundTransactionMinAggregateInput } from './fund-transaction-min-aggregate.input';
import { FundTransactionMaxAggregateInput } from './fund-transaction-max-aggregate.input';

@ArgsType()
export class FundTransactionAggregateArgs {

    @Field(() => FundTransactionWhereInput, {nullable:true})
    @Type(() => FundTransactionWhereInput)
    where?: FundTransactionWhereInput;

    @Field(() => [FundTransactionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FundTransactionOrderByWithRelationInput>;

    @Field(() => FundTransactionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<FundTransactionWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => FundTransactionCountAggregateInput, {nullable:true})
    _count?: FundTransactionCountAggregateInput;

    @Field(() => FundTransactionAvgAggregateInput, {nullable:true})
    _avg?: FundTransactionAvgAggregateInput;

    @Field(() => FundTransactionSumAggregateInput, {nullable:true})
    _sum?: FundTransactionSumAggregateInput;

    @Field(() => FundTransactionMinAggregateInput, {nullable:true})
    _min?: FundTransactionMinAggregateInput;

    @Field(() => FundTransactionMaxAggregateInput, {nullable:true})
    _max?: FundTransactionMaxAggregateInput;
}
