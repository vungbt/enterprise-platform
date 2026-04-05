import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubMemberCreateManyClubInput } from './club-member-create-many-club.input';
import { Type } from 'class-transformer';

@InputType()
export class ClubMemberCreateManyClubInputEnvelope {

    @Field(() => [ClubMemberCreateManyClubInput], {nullable:false})
    @Type(() => ClubMemberCreateManyClubInput)
    data!: Array<ClubMemberCreateManyClubInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
