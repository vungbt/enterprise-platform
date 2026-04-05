import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClubMemberCreateManyInput } from './club-member-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyClubMemberArgs {

    @Field(() => [ClubMemberCreateManyInput], {nullable:false})
    @Type(() => ClubMemberCreateManyInput)
    data!: Array<ClubMemberCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
