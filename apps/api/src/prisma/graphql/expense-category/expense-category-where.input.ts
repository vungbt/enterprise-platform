import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ExpenseListRelationFilter } from '../expense/expense-list-relation-filter.input';

@InputType()
export class ExpenseCategoryWhereInput {

    @Field(() => [ExpenseCategoryWhereInput], {nullable:true})
    AND?: Array<ExpenseCategoryWhereInput>;

    @Field(() => [ExpenseCategoryWhereInput], {nullable:true})
    OR?: Array<ExpenseCategoryWhereInput>;

    @Field(() => [ExpenseCategoryWhereInput], {nullable:true})
    NOT?: Array<ExpenseCategoryWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => ExpenseListRelationFilter, {nullable:true})
    expenses?: ExpenseListRelationFilter;
}
