import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumFundContributionStatusFilter } from '../prisma/enum-fund-contribution-status-filter.input';

@InputType()
export class FundContributionScalarWhereInput {

    @Field(() => [FundContributionScalarWhereInput], {nullable:true})
    AND?: Array<FundContributionScalarWhereInput>;

    @Field(() => [FundContributionScalarWhereInput], {nullable:true})
    OR?: Array<FundContributionScalarWhereInput>;

    @Field(() => [FundContributionScalarWhereInput], {nullable:true})
    NOT?: Array<FundContributionScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    fundId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    memberId?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    month?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    year?: IntNullableFilter;

    @Field(() => FloatFilter, {nullable:true})
    amount?: FloatFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    note?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    paidAt?: DateTimeFilter;

    @Field(() => EnumFundContributionStatusFilter, {nullable:true})
    status?: EnumFundContributionStatusFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    confirmedBy?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
