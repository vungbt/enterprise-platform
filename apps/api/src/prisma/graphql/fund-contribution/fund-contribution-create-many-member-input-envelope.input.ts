import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FundContributionCreateManyMemberInput } from './fund-contribution-create-many-member.input';
import { Type } from 'class-transformer';

@InputType()
export class FundContributionCreateManyMemberInputEnvelope {

    @Field(() => [FundContributionCreateManyMemberInput], {nullable:false})
    @Type(() => FundContributionCreateManyMemberInput)
    data!: Array<FundContributionCreateManyMemberInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
