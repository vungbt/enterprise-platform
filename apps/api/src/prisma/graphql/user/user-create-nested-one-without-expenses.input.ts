import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutExpensesInput } from './user-create-without-expenses.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutExpensesInput } from './user-create-or-connect-without-expenses.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutExpensesInput {

    @Field(() => UserCreateWithoutExpensesInput, {nullable:true})
    @Type(() => UserCreateWithoutExpensesInput)
    create?: UserCreateWithoutExpensesInput;

    @Field(() => UserCreateOrConnectWithoutExpensesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutExpensesInput)
    connectOrCreate?: UserCreateOrConnectWithoutExpensesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
