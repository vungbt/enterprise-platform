import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FundContributionFundIdMemberIdMonthYearCompoundUniqueInput } from './fund-contribution-fund-id-member-id-month-year-compound-unique.input';
import { FundContributionWhereInput } from './fund-contribution-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumFundContributionStatusFilter } from '../prisma/enum-fund-contribution-status-filter.input';
import { ClubFundScalarRelationFilter } from '../club-fund/club-fund-scalar-relation-filter.input';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input';
import { UserNullableScalarRelationFilter } from '../user/user-nullable-scalar-relation-filter.input';
import { FundTransactionListRelationFilter } from '../fund-transaction/fund-transaction-list-relation-filter.input';

@InputType()
export class FundContributionWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => FundContributionFundIdMemberIdMonthYearCompoundUniqueInput, {nullable:true})
    fundId_memberId_month_year?: FundContributionFundIdMemberIdMonthYearCompoundUniqueInput;

    @Field(() => [FundContributionWhereInput], {nullable:true})
    AND?: Array<FundContributionWhereInput>;

    @Field(() => [FundContributionWhereInput], {nullable:true})
    OR?: Array<FundContributionWhereInput>;

    @Field(() => [FundContributionWhereInput], {nullable:true})
    NOT?: Array<FundContributionWhereInput>;

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

    @Field(() => ClubFundScalarRelationFilter, {nullable:true})
    fund?: ClubFundScalarRelationFilter;

    @Field(() => UserScalarRelationFilter, {nullable:true})
    member?: UserScalarRelationFilter;

    @Field(() => UserNullableScalarRelationFilter, {nullable:true})
    confirmedByUser?: UserNullableScalarRelationFilter;

    @Field(() => FundTransactionListRelationFilter, {nullable:true})
    transactions?: FundTransactionListRelationFilter;
}
