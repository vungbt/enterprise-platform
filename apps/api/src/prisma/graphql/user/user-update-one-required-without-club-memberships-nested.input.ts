import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutClubMembershipsInput } from './user-create-without-club-memberships.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutClubMembershipsInput } from './user-create-or-connect-without-club-memberships.input';
import { UserUpsertWithoutClubMembershipsInput } from './user-upsert-without-club-memberships.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutClubMembershipsInput } from './user-update-to-one-with-where-without-club-memberships.input';

@InputType()
export class UserUpdateOneRequiredWithoutClubMembershipsNestedInput {

    @Field(() => UserCreateWithoutClubMembershipsInput, {nullable:true})
    @Type(() => UserCreateWithoutClubMembershipsInput)
    create?: UserCreateWithoutClubMembershipsInput;

    @Field(() => UserCreateOrConnectWithoutClubMembershipsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutClubMembershipsInput)
    connectOrCreate?: UserCreateOrConnectWithoutClubMembershipsInput;

    @Field(() => UserUpsertWithoutClubMembershipsInput, {nullable:true})
    @Type(() => UserUpsertWithoutClubMembershipsInput)
    upsert?: UserUpsertWithoutClubMembershipsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutClubMembershipsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutClubMembershipsInput)
    update?: UserUpdateToOneWithWhereWithoutClubMembershipsInput;
}
