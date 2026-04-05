import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutExpensesInput } from './user-create-without-expenses.input';

@InputType()
export class UserCreateOrConnectWithoutExpensesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutExpensesInput, {nullable:false})
    @Type(() => UserCreateWithoutExpensesInput)
    create!: UserCreateWithoutExpensesInput;
}
