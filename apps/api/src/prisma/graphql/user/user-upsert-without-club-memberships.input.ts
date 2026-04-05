import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutClubMembershipsInput } from './user-update-without-club-memberships.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutClubMembershipsInput } from './user-create-without-club-memberships.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutClubMembershipsInput {

    @Field(() => UserUpdateWithoutClubMembershipsInput, {nullable:false})
    @Type(() => UserUpdateWithoutClubMembershipsInput)
    update!: UserUpdateWithoutClubMembershipsInput;

    @Field(() => UserCreateWithoutClubMembershipsInput, {nullable:false})
    @Type(() => UserCreateWithoutClubMembershipsInput)
    create!: UserCreateWithoutClubMembershipsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
