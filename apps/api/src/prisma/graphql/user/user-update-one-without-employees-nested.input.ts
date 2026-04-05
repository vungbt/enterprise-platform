import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutEmployeesInput } from './user-create-without-employees.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutEmployeesInput } from './user-create-or-connect-without-employees.input';
import { UserUpsertWithoutEmployeesInput } from './user-upsert-without-employees.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutEmployeesInput } from './user-update-to-one-with-where-without-employees.input';

@InputType()
export class UserUpdateOneWithoutEmployeesNestedInput {

    @Field(() => UserCreateWithoutEmployeesInput, {nullable:true})
    @Type(() => UserCreateWithoutEmployeesInput)
    create?: UserCreateWithoutEmployeesInput;

    @Field(() => UserCreateOrConnectWithoutEmployeesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutEmployeesInput)
    connectOrCreate?: UserCreateOrConnectWithoutEmployeesInput;

    @Field(() => UserUpsertWithoutEmployeesInput, {nullable:true})
    @Type(() => UserUpsertWithoutEmployeesInput)
    upsert?: UserUpsertWithoutEmployeesInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: UserWhereInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: UserWhereInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutEmployeesInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutEmployeesInput)
    update?: UserUpdateToOneWithWhereWithoutEmployeesInput;
}
