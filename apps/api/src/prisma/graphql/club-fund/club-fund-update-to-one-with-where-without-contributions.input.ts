import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubFundWhereInput } from './club-fund-where.input';
import { Type } from 'class-transformer';
import { ClubFundUpdateWithoutContributionsInput } from './club-fund-update-without-contributions.input';

@InputType()
export class ClubFundUpdateToOneWithWhereWithoutContributionsInput {

    @Field(() => ClubFundWhereInput, {nullable:true})
    @Type(() => ClubFundWhereInput)
    where?: ClubFundWhereInput;

    @Field(() => ClubFundUpdateWithoutContributionsInput, {nullable:false})
    @Type(() => ClubFundUpdateWithoutContributionsInput)
    data!: ClubFundUpdateWithoutContributionsInput;
}
