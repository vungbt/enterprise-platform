import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubWhereInput } from './club-where.input';

@InputType()
export class ClubListRelationFilter {

    @Field(() => ClubWhereInput, {nullable:true})
    every?: ClubWhereInput;

    @Field(() => ClubWhereInput, {nullable:true})
    some?: ClubWhereInput;

    @Field(() => ClubWhereInput, {nullable:true})
    none?: ClubWhereInput;
}
