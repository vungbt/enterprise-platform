import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FundContributionCreateInput } from './fund-contribution-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneFundContributionArgs {

    @Field(() => FundContributionCreateInput, {nullable:false})
    @Type(() => FundContributionCreateInput)
    data!: FundContributionCreateInput;
}
