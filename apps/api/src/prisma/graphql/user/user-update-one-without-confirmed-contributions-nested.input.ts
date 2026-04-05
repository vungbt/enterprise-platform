import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutConfirmedContributionsInput } from './user-create-without-confirmed-contributions.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutConfirmedContributionsInput } from './user-create-or-connect-without-confirmed-contributions.input';
import { UserUpsertWithoutConfirmedContributionsInput } from './user-upsert-without-confirmed-contributions.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutConfirmedContributionsInput } from './user-update-to-one-with-where-without-confirmed-contributions.input';

@InputType()
export class UserUpdateOneWithoutConfirmedContributionsNestedInput {

    @Field(() => UserCreateWithoutConfirmedContributionsInput, {nullable:true})
    @Type(() => UserCreateWithoutConfirmedContributionsInput)
    create?: UserCreateWithoutConfirmedContributionsInput;

    @Field(() => UserCreateOrConnectWithoutConfirmedContributionsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutConfirmedContributionsInput)
    connectOrCreate?: UserCreateOrConnectWithoutConfirmedContributionsInput;

    @Field(() => UserUpsertWithoutConfirmedContributionsInput, {nullable:true})
    @Type(() => UserUpsertWithoutConfirmedContributionsInput)
    upsert?: UserUpsertWithoutConfirmedContributionsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: UserWhereInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: UserWhereInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutConfirmedContributionsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutConfirmedContributionsInput)
    update?: UserUpdateToOneWithWhereWithoutConfirmedContributionsInput;
}
