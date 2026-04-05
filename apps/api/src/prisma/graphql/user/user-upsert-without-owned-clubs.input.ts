import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutOwnedClubsInput } from './user-update-without-owned-clubs.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutOwnedClubsInput } from './user-create-without-owned-clubs.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutOwnedClubsInput {

    @Field(() => UserUpdateWithoutOwnedClubsInput, {nullable:false})
    @Type(() => UserUpdateWithoutOwnedClubsInput)
    update!: UserUpdateWithoutOwnedClubsInput;

    @Field(() => UserCreateWithoutOwnedClubsInput, {nullable:false})
    @Type(() => UserCreateWithoutOwnedClubsInput)
    create!: UserCreateWithoutOwnedClubsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
