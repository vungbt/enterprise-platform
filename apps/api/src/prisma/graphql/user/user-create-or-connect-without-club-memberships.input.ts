import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutClubMembershipsInput } from './user-create-without-club-memberships.input';

@InputType()
export class UserCreateOrConnectWithoutClubMembershipsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutClubMembershipsInput, {nullable:false})
    @Type(() => UserCreateWithoutClubMembershipsInput)
    create!: UserCreateWithoutClubMembershipsInput;
}
