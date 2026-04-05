import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubFundWhereInput } from './club-fund-where.input';

@InputType()
export class ClubFundScalarRelationFilter {

    @Field(() => ClubFundWhereInput, {nullable:true})
    is?: ClubFundWhereInput;

    @Field(() => ClubFundWhereInput, {nullable:true})
    isNot?: ClubFundWhereInput;
}
