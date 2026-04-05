import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExpenseCategoryUpdateManyMutationInput } from './expense-category-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ExpenseCategoryWhereInput } from './expense-category-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyExpenseCategoryArgs {

    @Field(() => ExpenseCategoryUpdateManyMutationInput, {nullable:false})
    @Type(() => ExpenseCategoryUpdateManyMutationInput)
    data!: ExpenseCategoryUpdateManyMutationInput;

    @Field(() => ExpenseCategoryWhereInput, {nullable:true})
    @Type(() => ExpenseCategoryWhereInput)
    where?: ExpenseCategoryWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
