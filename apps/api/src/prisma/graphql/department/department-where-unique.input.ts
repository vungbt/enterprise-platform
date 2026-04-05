import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentWhereInput } from './department-where.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DepartmentNullableScalarRelationFilter } from './department-nullable-scalar-relation-filter.input';
import { DepartmentListRelationFilter } from './department-list-relation-filter.input';
import { EmployeeListRelationFilter } from '../employee/employee-list-relation-filter.input';
import { ExpenseListRelationFilter } from '../expense/expense-list-relation-filter.input';

@InputType()
export class DepartmentWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => [DepartmentWhereInput], {nullable:true})
    AND?: Array<DepartmentWhereInput>;

    @Field(() => [DepartmentWhereInput], {nullable:true})
    OR?: Array<DepartmentWhereInput>;

    @Field(() => [DepartmentWhereInput], {nullable:true})
    NOT?: Array<DepartmentWhereInput>;

    @Field(() => StringNullableFilter, {nullable:true})
    parentId?: StringNullableFilter;

    @Field(() => DepartmentNullableScalarRelationFilter, {nullable:true})
    parent?: DepartmentNullableScalarRelationFilter;

    @Field(() => DepartmentListRelationFilter, {nullable:true})
    children?: DepartmentListRelationFilter;

    @Field(() => EmployeeListRelationFilter, {nullable:true})
    employees?: EmployeeListRelationFilter;

    @Field(() => ExpenseListRelationFilter, {nullable:true})
    expenses?: ExpenseListRelationFilter;
}
