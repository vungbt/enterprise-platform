import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ClubFundSumAggregate {

    @Field(() => Float, {nullable:true})
    initialBalance?: number;
}
