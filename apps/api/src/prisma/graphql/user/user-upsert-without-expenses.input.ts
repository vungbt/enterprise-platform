import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutExpensesInput } from './user-update-without-expenses.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutExpensesInput } from './user-create-without-expenses.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutExpensesInput {

    @Field(() => UserUpdateWithoutExpensesInput, {nullable:false})
    @Type(() => UserUpdateWithoutExpensesInput)
    update!: UserUpdateWithoutExpensesInput;

    @Field(() => UserCreateWithoutExpensesInput, {nullable:false})
    @Type(() => UserCreateWithoutExpensesInput)
    create!: UserCreateWithoutExpensesInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
