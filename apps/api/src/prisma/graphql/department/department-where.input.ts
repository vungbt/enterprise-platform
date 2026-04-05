import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DepartmentNullableScalarRelationFilter } from './department-nullable-scalar-relation-filter.input';
import { DepartmentListRelationFilter } from './department-list-relation-filter.input';
import { EmployeeListRelationFilter } from '../employee/employee-list-relation-filter.input';
import { ExpenseListRelationFilter } from '../expense/expense-list-relation-filter.input';

@InputType()
export class DepartmentWhereInput {

    @Field(() => [DepartmentWhereInput], {nullable:true})
    AND?: Array<DepartmentWhereInput>;

    @Field(() => [DepartmentWhereInput], {nullable:true})
    OR?: Array<DepartmentWhereInput>;

    @Field(() => [DepartmentWhereInput], {nullable:true})
    NOT?: Array<DepartmentWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

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
