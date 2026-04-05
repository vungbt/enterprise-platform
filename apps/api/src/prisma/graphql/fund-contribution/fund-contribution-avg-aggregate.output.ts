import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class FundContributionAvgAggregate {

    @Field(() => Float, {nullable:true})
    month?: number;

    @Field(() => Float, {nullable:true})
    year?: number;

    @Field(() => Float, {nullable:true})
    amount?: number;
}
