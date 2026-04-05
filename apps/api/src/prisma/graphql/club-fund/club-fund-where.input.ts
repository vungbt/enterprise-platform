import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { ClubScalarRelationFilter } from '../club/club-scalar-relation-filter.input';
import { FundContributionListRelationFilter } from '../fund-contribution/fund-contribution-list-relation-filter.input';
import { ExpenseListRelationFilter } from '../expense/expense-list-relation-filter.input';
import { FundTransactionListRelationFilter } from '../fund-transaction/fund-transaction-list-relation-filter.input';

@InputType()
export class ClubFundWhereInput {

    @Field(() => [ClubFundWhereInput], {nullable:true})
    AND?: Array<ClubFundWhereInput>;

    @Field(() => [ClubFundWhereInput], {nullable:true})
    OR?: Array<ClubFundWhereInput>;

    @Field(() => [ClubFundWhereInput], {nullable:true})
    NOT?: Array<ClubFundWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    clubId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    initialBalance?: FloatFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deletedAt?: DateTimeNullableFilter;

    @Field(() => ClubScalarRelationFilter, {nullable:true})
    club?: ClubScalarRelationFilter;

    @Field(() => FundContributionListRelationFilter, {nullable:true})
    contributions?: FundContributionListRelationFilter;

    @Field(() => ExpenseListRelationFilter, {nullable:true})
    expenses?: ExpenseListRelationFilter;

    @Field(() => FundTransactionListRelationFilter, {nullable:true})
    transactions?: FundTransactionListRelationFilter;
}
