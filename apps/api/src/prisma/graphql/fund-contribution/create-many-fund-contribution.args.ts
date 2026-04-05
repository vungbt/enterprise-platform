import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FundContributionCreateManyInput } from './fund-contribution-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyFundContributionArgs {

    @Field(() => [FundContributionCreateManyInput], {nullable:false})
    @Type(() => FundContributionCreateManyInput)
    data!: Array<FundContributionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
