import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ClubFundSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    initialBalance?: true;
}
