import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutExpensesInput } from './user-update-without-expenses.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutExpensesInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutExpensesInput, {nullable:false})
    @Type(() => UserUpdateWithoutExpensesInput)
    data!: UserUpdateWithoutExpensesInput;
}
