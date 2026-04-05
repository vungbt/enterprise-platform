import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExpenseCreateManyInput } from './expense-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyExpenseArgs {

    @Field(() => [ExpenseCreateManyInput], {nullable:false})
    @Type(() => ExpenseCreateManyInput)
    data!: Array<ExpenseCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
