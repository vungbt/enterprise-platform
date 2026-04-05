import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class FundContributionFundIdMemberIdMonthYearCompoundUniqueInput {

    @Field(() => String, {nullable:false})
    fundId!: string;

    @Field(() => String, {nullable:false})
    memberId!: string;

    @Field(() => Int, {nullable:false})
    month!: number;

    @Field(() => Int, {nullable:false})
    year!: number;
}
