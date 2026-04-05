import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FundContributionCreateManyFundInput } from './fund-contribution-create-many-fund.input';
import { Type } from 'class-transformer';

@InputType()
export class FundContributionCreateManyFundInputEnvelope {

    @Field(() => [FundContributionCreateManyFundInput], {nullable:false})
    @Type(() => FundContributionCreateManyFundInput)
    data!: Array<FundContributionCreateManyFundInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
