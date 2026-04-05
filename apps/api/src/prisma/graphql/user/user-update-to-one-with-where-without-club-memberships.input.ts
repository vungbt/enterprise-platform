import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutClubMembershipsInput } from './user-update-without-club-memberships.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutClubMembershipsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutClubMembershipsInput, {nullable:false})
    @Type(() => UserUpdateWithoutClubMembershipsInput)
    data!: UserUpdateWithoutClubMembershipsInput;
}
