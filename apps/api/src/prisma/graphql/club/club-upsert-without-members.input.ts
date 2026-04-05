import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubUpdateWithoutMembersInput } from './club-update-without-members.input';
import { Type } from 'class-transformer';
import { ClubCreateWithoutMembersInput } from './club-create-without-members.input';
import { ClubWhereInput } from './club-where.input';

@InputType()
export class ClubUpsertWithoutMembersInput {

    @Field(() => ClubUpdateWithoutMembersInput, {nullable:false})
    @Type(() => ClubUpdateWithoutMembersInput)
    update!: ClubUpdateWithoutMembersInput;

    @Field(() => ClubCreateWithoutMembersInput, {nullable:false})
    @Type(() => ClubCreateWithoutMembersInput)
    create!: ClubCreateWithoutMembersInput;

    @Field(() => ClubWhereInput, {nullable:true})
    @Type(() => ClubWhereInput)
    where?: ClubWhereInput;
}
