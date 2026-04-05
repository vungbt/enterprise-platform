import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FundContributionUpdateManyMutationInput } from './fund-contribution-update-many-mutation.input';
import { Type } from 'class-transformer';
import { FundContributionWhereInput } from './fund-contribution-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyFundContributionArgs {

    @Field(() => FundContributionUpdateManyMutationInput, {nullable:false})
    @Type(() => FundContributionUpdateManyMutationInput)
    data!: FundContributionUpdateManyMutationInput;

    @Field(() => FundContributionWhereInput, {nullable:true})
    @Type(() => FundContributionWhereInput)
    where?: FundContributionWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
