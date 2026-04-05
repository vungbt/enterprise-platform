import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExpenseCreateInput } from './expense-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneExpenseArgs {

    @Field(() => ExpenseCreateInput, {nullable:false})
    @Type(() => ExpenseCreateInput)
    data!: ExpenseCreateInput;
}
