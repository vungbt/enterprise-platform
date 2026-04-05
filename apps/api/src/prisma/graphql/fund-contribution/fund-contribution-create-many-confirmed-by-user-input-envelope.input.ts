import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FundContributionCreateManyConfirmedByUserInput } from './fund-contribution-create-many-confirmed-by-user.input';
import { Type } from 'class-transformer';

@InputType()
export class FundContributionCreateManyConfirmedByUserInputEnvelope {

    @Field(() => [FundContributionCreateManyConfirmedByUserInput], {nullable:false})
    @Type(() => FundContributionCreateManyConfirmedByUserInput)
    data!: Array<FundContributionCreateManyConfirmedByUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
