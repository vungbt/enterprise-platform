import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubMemberWhereInput } from './club-member-where.input';

@InputType()
export class ClubMemberListRelationFilter {

    @Field(() => ClubMemberWhereInput, {nullable:true})
    every?: ClubMemberWhereInput;

    @Field(() => ClubMemberWhereInput, {nullable:true})
    some?: ClubMemberWhereInput;

    @Field(() => ClubMemberWhereInput, {nullable:true})
    none?: ClubMemberWhereInput;
}
