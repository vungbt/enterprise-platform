import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClubMemberWhereInput } from './club-member-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyClubMemberArgs {

    @Field(() => ClubMemberWhereInput, {nullable:true})
    @Type(() => ClubMemberWhereInput)
    where?: ClubMemberWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
