import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutConfirmedContributionsInput } from './user-create-without-confirmed-contributions.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutConfirmedContributionsInput } from './user-create-or-connect-without-confirmed-contributions.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutConfirmedContributionsInput {

    @Field(() => UserCreateWithoutConfirmedContributionsInput, {nullable:true})
    @Type(() => UserCreateWithoutConfirmedContributionsInput)
    create?: UserCreateWithoutConfirmedContributionsInput;

    @Field(() => UserCreateOrConnectWithoutConfirmedContributionsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutConfirmedContributionsInput)
    connectOrCreate?: UserCreateOrConnectWithoutConfirmedContributionsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
