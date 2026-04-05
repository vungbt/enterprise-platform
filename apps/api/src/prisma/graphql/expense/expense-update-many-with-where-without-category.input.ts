import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpenseScalarWhereInput } from './expense-scalar-where.input';
import { Type } from 'class-transformer';
import { ExpenseUpdateManyMutationInput } from './expense-update-many-mutation.input';

@InputType()
export class ExpenseUpdateManyWithWhereWithoutCategoryInput {

    @Field(() => ExpenseScalarWhereInput, {nullable:false})
    @Type(() => ExpenseScalarWhereInput)
    where!: ExpenseScalarWhereInput;

    @Field(() => ExpenseUpdateManyMutationInput, {nullable:false})
    @Type(() => ExpenseUpdateManyMutationInput)
    data!: ExpenseUpdateManyMutationInput;
}
