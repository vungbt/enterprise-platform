import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutFundContributionsInput } from './user-create-without-fund-contributions.input';

@InputType()
export class UserCreateOrConnectWithoutFundContributionsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutFundContributionsInput, {nullable:false})
    @Type(() => UserCreateWithoutFundContributionsInput)
    create!: UserCreateWithoutFundContributionsInput;
}
