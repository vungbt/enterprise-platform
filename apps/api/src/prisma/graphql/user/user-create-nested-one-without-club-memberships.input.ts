import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutClubMembershipsInput } from './user-create-without-club-memberships.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutClubMembershipsInput } from './user-create-or-connect-without-club-memberships.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutClubMembershipsInput {

    @Field(() => UserCreateWithoutClubMembershipsInput, {nullable:true})
    @Type(() => UserCreateWithoutClubMembershipsInput)
    create?: UserCreateWithoutClubMembershipsInput;

    @Field(() => UserCreateOrConnectWithoutClubMembershipsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutClubMembershipsInput)
    connectOrCreate?: UserCreateOrConnectWithoutClubMembershipsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
