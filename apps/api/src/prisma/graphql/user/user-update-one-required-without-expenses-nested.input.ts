import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutExpensesInput } from './user-create-without-expenses.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutExpensesInput } from './user-create-or-connect-without-expenses.input';
import { UserUpsertWithoutExpensesInput } from './user-upsert-without-expenses.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutExpensesInput } from './user-update-to-one-with-where-without-expenses.input';

@InputType()
export class UserUpdateOneRequiredWithoutExpensesNestedInput {

    @Field(() => UserCreateWithoutExpensesInput, {nullable:true})
    @Type(() => UserCreateWithoutExpensesInput)
    create?: UserCreateWithoutExpensesInput;

    @Field(() => UserCreateOrConnectWithoutExpensesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutExpensesInput)
    connectOrCreate?: UserCreateOrConnectWithoutExpensesInput;

    @Field(() => UserUpsertWithoutExpensesInput, {nullable:true})
    @Type(() => UserUpsertWithoutExpensesInput)
    upsert?: UserUpsertWithoutExpensesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutExpensesInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutExpensesInput)
    update?: UserUpdateToOneWithWhereWithoutExpensesInput;
}
