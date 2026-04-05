import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutOwnedClubsInput } from './user-create-without-owned-clubs.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutOwnedClubsInput } from './user-create-or-connect-without-owned-clubs.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutOwnedClubsInput {

    @Field(() => UserCreateWithoutOwnedClubsInput, {nullable:true})
    @Type(() => UserCreateWithoutOwnedClubsInput)
    create?: UserCreateWithoutOwnedClubsInput;

    @Field(() => UserCreateOrConnectWithoutOwnedClubsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutOwnedClubsInput)
    connectOrCreate?: UserCreateOrConnectWithoutOwnedClubsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
