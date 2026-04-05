import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubFundUpdateWithoutContributionsInput } from './club-fund-update-without-contributions.input';
import { Type } from 'class-transformer';
import { ClubFundCreateWithoutContributionsInput } from './club-fund-create-without-contributions.input';
import { ClubFundWhereInput } from './club-fund-where.input';

@InputType()
export class ClubFundUpsertWithoutContributionsInput {

    @Field(() => ClubFundUpdateWithoutContributionsInput, {nullable:false})
    @Type(() => ClubFundUpdateWithoutContributionsInput)
    update!: ClubFundUpdateWithoutContributionsInput;

    @Field(() => ClubFundCreateWithoutContributionsInput, {nullable:false})
    @Type(() => ClubFundCreateWithoutContributionsInput)
    create!: ClubFundCreateWithoutContributionsInput;

    @Field(() => ClubFundWhereInput, {nullable:true})
    @Type(() => ClubFundWhereInput)
    where?: ClubFundWhereInput;
}
