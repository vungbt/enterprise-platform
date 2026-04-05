import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutEmployeesInput } from './user-create-without-employees.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutEmployeesInput } from './user-create-or-connect-without-employees.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutEmployeesInput {

    @Field(() => UserCreateWithoutEmployeesInput, {nullable:true})
    @Type(() => UserCreateWithoutEmployeesInput)
    create?: UserCreateWithoutEmployeesInput;

    @Field(() => UserCreateOrConnectWithoutEmployeesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutEmployeesInput)
    connectOrCreate?: UserCreateOrConnectWithoutEmployeesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
