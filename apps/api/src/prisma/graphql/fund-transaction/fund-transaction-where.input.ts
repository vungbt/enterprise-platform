import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumFundTransactionTypeFilter } from '../prisma/enum-fund-transaction-type-filter.input';
import { EnumFundFlowFilter } from '../prisma/enum-fund-flow-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ClubFundScalarRelationFilter } from '../club-fund/club-fund-scalar-relation-filter.input';
import { FundContributionNullableScalarRelationFilter } from '../fund-contribution/fund-contribution-nullable-scalar-relation-filter.input';
import { ExpenseNullableScalarRelationFilter } from '../expense/expense-nullable-scalar-relation-filter.input';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input';

@InputType()
export class FundTransactionWhereInput {

    @Field(() => [FundTransactionWhereInput], {nullable:true})
    AND?: Array<FundTransactionWhereInput>;

    @Field(() => [FundTransactionWhereInput], {nullable:true})
    OR?: Array<FundTransactionWhereInput>;

    @Field(() => [FundTransactionWhereInput], {nullable:true})
    NOT?: Array<FundTransactionWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    fundId?: StringFilter;

    @Field(() => EnumFundTransactionTypeFilter, {nullable:true})
    type?: EnumFundTransactionTypeFilter;

    @Field(() => EnumFundFlowFilter, {nullable:true})
    flow?: EnumFundFlowFilter;

    @Field(() => FloatFilter, {nullable:true})
    amount?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    balanceAfter?: FloatFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    note?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    refContribId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    refExpenseId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    refTransactionId?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    createdById?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => ClubFundScalarRelationFilter, {nullable:true})
    fund?: ClubFundScalarRelationFilter;

    @Field(() => FundContributionNullableScalarRelationFilter, {nullable:true})
    contribution?: FundContributionNullableScalarRelationFilter;

    @Field(() => ExpenseNullableScalarRelationFilter, {nullable:true})
    expense?: ExpenseNullableScalarRelationFilter;

    @Field(() => UserScalarRelationFilter, {nullable:true})
    createdBy?: UserScalarRelationFilter;
}
