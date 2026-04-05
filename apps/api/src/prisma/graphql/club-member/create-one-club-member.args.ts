import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClubMemberCreateInput } from './club-member-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneClubMemberArgs {

    @Field(() => ClubMemberCreateInput, {nullable:false})
    @Type(() => ClubMemberCreateInput)
    data!: ClubMemberCreateInput;
}
