import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClubMemberUpdateManyMutationInput } from './club-member-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ClubMemberWhereInput } from './club-member-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyClubMemberArgs {

    @Field(() => ClubMemberUpdateManyMutationInput, {nullable:false})
    @Type(() => ClubMemberUpdateManyMutationInput)
    data!: ClubMemberUpdateManyMutationInput;

    @Field(() => ClubMemberWhereInput, {nullable:true})
    @Type(() => ClubMemberWhereInput)
    where?: ClubMemberWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
