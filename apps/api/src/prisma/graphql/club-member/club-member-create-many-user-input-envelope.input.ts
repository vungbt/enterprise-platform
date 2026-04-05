import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubMemberCreateManyUserInput } from './club-member-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class ClubMemberCreateManyUserInputEnvelope {

    @Field(() => [ClubMemberCreateManyUserInput], {nullable:false})
    @Type(() => ClubMemberCreateManyUserInput)
    data!: Array<ClubMemberCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
