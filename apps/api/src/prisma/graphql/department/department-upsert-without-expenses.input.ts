import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentUpdateWithoutExpensesInput } from './department-update-without-expenses.input';
import { Type } from 'class-transformer';
import { DepartmentCreateWithoutExpensesInput } from './department-create-without-expenses.input';
import { DepartmentWhereInput } from './department-where.input';

@InputType()
export class DepartmentUpsertWithoutExpensesInput {

    @Field(() => DepartmentUpdateWithoutExpensesInput, {nullable:false})
    @Type(() => DepartmentUpdateWithoutExpensesInput)
    update!: DepartmentUpdateWithoutExpensesInput;

    @Field(() => DepartmentCreateWithoutExpensesInput, {nullable:false})
    @Type(() => DepartmentCreateWithoutExpensesInput)
    create!: DepartmentCreateWithoutExpensesInput;

    @Field(() => DepartmentWhereInput, {nullable:true})
    @Type(() => DepartmentWhereInput)
    where?: DepartmentWhereInput;
}
