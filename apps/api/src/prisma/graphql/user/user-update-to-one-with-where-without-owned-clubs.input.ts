import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutOwnedClubsInput } from './user-update-without-owned-clubs.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutOwnedClubsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutOwnedClubsInput, {nullable:false})
    @Type(() => UserUpdateWithoutOwnedClubsInput)
    data!: UserUpdateWithoutOwnedClubsInput;
}
