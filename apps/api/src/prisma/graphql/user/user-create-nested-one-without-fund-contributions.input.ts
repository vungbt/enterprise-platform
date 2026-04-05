import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFundContributionsInput } from './user-create-without-fund-contributions.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutFundContributionsInput } from './user-create-or-connect-without-fund-contributions.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutFundContributionsInput {

    @Field(() => UserCreateWithoutFundContributionsInput, {nullable:true})
    @Type(() => UserCreateWithoutFundContributionsInput)
    create?: UserCreateWithoutFundContributionsInput;

    @Field(() => UserCreateOrConnectWithoutFundContributionsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutFundContributionsInput)
    connectOrCreate?: UserCreateOrConnectWithoutFundContributionsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
