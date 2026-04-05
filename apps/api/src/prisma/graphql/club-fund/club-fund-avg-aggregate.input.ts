import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ClubFundAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    initialBalance?: true;
}
