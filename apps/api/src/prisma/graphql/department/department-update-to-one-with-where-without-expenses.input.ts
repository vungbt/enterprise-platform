import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentWhereInput } from './department-where.input';
import { Type } from 'class-transformer';
import { DepartmentUpdateWithoutExpensesInput } from './department-update-without-expenses.input';

@InputType()
export class DepartmentUpdateToOneWithWhereWithoutExpensesInput {

    @Field(() => DepartmentWhereInput, {nullable:true})
    @Type(() => DepartmentWhereInput)
    where?: DepartmentWhereInput;

    @Field(() => DepartmentUpdateWithoutExpensesInput, {nullable:false})
    @Type(() => DepartmentUpdateWithoutExpensesInput)
    data!: DepartmentUpdateWithoutExpensesInput;
}
