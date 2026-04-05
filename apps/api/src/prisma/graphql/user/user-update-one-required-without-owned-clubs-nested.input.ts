import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutOwnedClubsInput } from './user-create-without-owned-clubs.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutOwnedClubsInput } from './user-create-or-connect-without-owned-clubs.input';
import { UserUpsertWithoutOwnedClubsInput } from './user-upsert-without-owned-clubs.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutOwnedClubsInput } from './user-update-to-one-with-where-without-owned-clubs.input';

@InputType()
export class UserUpdateOneRequiredWithoutOwnedClubsNestedInput {

    @Field(() => UserCreateWithoutOwnedClubsInput, {nullable:true})
    @Type(() => UserCreateWithoutOwnedClubsInput)
    create?: UserCreateWithoutOwnedClubsInput;

    @Field(() => UserCreateOrConnectWithoutOwnedClubsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutOwnedClubsInput)
    connectOrCreate?: UserCreateOrConnectWithoutOwnedClubsInput;

    @Field(() => UserUpsertWithoutOwnedClubsInput, {nullable:true})
    @Type(() => UserUpsertWithoutOwnedClubsInput)
    upsert?: UserUpsertWithoutOwnedClubsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutOwnedClubsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutOwnedClubsInput)
    update?: UserUpdateToOneWithWhereWithoutOwnedClubsInput;
}
