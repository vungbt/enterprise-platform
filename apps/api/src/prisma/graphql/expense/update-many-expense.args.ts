import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExpenseUpdateManyMutationInput } from './expense-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ExpenseWhereInput } from './expense-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyExpenseArgs {

    @Field(() => ExpenseUpdateManyMutationInput, {nullable:false})
    @Type(() => ExpenseUpdateManyMutationInput)
    data!: ExpenseUpdateManyMutationInput;

    @Field(() => ExpenseWhereInput, {nullable:true})
    @Type(() => ExpenseWhereInput)
    where?: ExpenseWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
