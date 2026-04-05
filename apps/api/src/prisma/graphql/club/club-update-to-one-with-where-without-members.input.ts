import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubWhereInput } from './club-where.input';
import { Type } from 'class-transformer';
import { ClubUpdateWithoutMembersInput } from './club-update-without-members.input';

@InputType()
export class ClubUpdateToOneWithWhereWithoutMembersInput {

    @Field(() => ClubWhereInput, {nullable:true})
    @Type(() => ClubWhereInput)
    where?: ClubWhereInput;

    @Field(() => ClubUpdateWithoutMembersInput, {nullable:false})
    @Type(() => ClubUpdateWithoutMembersInput)
    data!: ClubUpdateWithoutMembersInput;
}
