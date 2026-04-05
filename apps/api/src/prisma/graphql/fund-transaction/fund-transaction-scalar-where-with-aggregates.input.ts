import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumFundTransactionTypeWithAggregatesFilter } from '../prisma/enum-fund-transaction-type-with-aggregates-filter.input';
import { EnumFundFlowWithAggregatesFilter } from '../prisma/enum-fund-flow-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class FundTransactionScalarWhereWithAggregatesInput {

    @Field(() => [FundTransactionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<FundTransactionScalarWhereWithAggregatesInput>;

    @Field(() => [FundTransactionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<FundTransactionScalarWhereWithAggregatesInput>;

    @Field(() => [FundTransactionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<FundTransactionScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    fundId?: StringWithAggregatesFilter;

    @Field(() => EnumFundTransactionTypeWithAggregatesFilter, {nullable:true})
    type?: EnumFundTransactionTypeWithAggregatesFilter;

    @Field(() => EnumFundFlowWithAggregatesFilter, {nullable:true})
    flow?: EnumFundFlowWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    amount?: FloatWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    balanceAfter?: FloatWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    note?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    refContribId?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    refExpenseId?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    refTransactionId?: StringNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    createdById?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;
}
