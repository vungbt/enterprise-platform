import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutConfirmedContributionsInput } from './user-create-without-confirmed-contributions.input';

@InputType()
export class UserCreateOrConnectWithoutConfirmedContributionsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutConfirmedContributionsInput, {nullable:false})
    @Type(() => UserCreateWithoutConfirmedContributionsInput)
    create!: UserCreateWithoutConfirmedContributionsInput;
}
