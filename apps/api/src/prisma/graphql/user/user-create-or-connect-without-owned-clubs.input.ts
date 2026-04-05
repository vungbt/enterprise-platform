import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutOwnedClubsInput } from './user-create-without-owned-clubs.input';

@InputType()
export class UserCreateOrConnectWithoutOwnedClubsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutOwnedClubsInput, {nullable:false})
    @Type(() => UserCreateWithoutOwnedClubsInput)
    create!: UserCreateWithoutOwnedClubsInput;
}
