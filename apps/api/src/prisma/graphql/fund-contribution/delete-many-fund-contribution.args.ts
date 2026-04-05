import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FundContributionWhereInput } from './fund-contribution-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyFundContributionArgs {

    @Field(() => FundContributionWhereInput, {nullable:true})
    @Type(() => FundContributionWhereInput)
    where?: FundContributionWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
