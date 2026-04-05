import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Employee } from '../employee/employee.model';
import { Expense } from '../expense/expense.model';
import { DepartmentCount } from './department-count.output';

@ObjectType()
export class Department {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    parentId!: string | null;

    @Field(() => Department, {nullable:true})
    parent?: Department | null;

    @Field(() => [Department], {nullable:true})
    children?: Array<Department>;

    @Field(() => [Employee], {nullable:true})
    employees?: Array<Employee>;

    @Field(() => [Expense], {nullable:true})
    expenses?: Array<Expense>;

    @Field(() => DepartmentCount, {nullable:false})
    _count?: DepartmentCount;
}
