import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutEmployeesInput } from './user-create-without-employees.input';

@InputType()
export class UserCreateOrConnectWithoutEmployeesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutEmployeesInput, {nullable:false})
    @Type(() => UserCreateWithoutEmployeesInput)
    create!: UserCreateWithoutEmployeesInput;
}
