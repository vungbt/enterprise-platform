import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ClubFundCount {

    @Field(() => Int, {nullable:false})
    contributions?: number;

    @Field(() => Int, {nullable:false})
    expenses?: number;

    @Field(() => Int, {nullable:false})
    transactions?: number;
}
