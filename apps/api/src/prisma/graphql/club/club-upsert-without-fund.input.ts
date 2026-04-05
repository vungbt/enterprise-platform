import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubUpdateWithoutFundInput } from './club-update-without-fund.input';
import { Type } from 'class-transformer';
import { ClubCreateWithoutFundInput } from './club-create-without-fund.input';
import { ClubWhereInput } from './club-where.input';

@InputType()
export class ClubUpsertWithoutFundInput {

    @Field(() => ClubUpdateWithoutFundInput, {nullable:false})
    @Type(() => ClubUpdateWithoutFundInput)
    update!: ClubUpdateWithoutFundInput;

    @Field(() => ClubCreateWithoutFundInput, {nullable:false})
    @Type(() => ClubCreateWithoutFundInput)
    create!: ClubCreateWithoutFundInput;

    @Field(() => ClubWhereInput, {nullable:true})
    @Type(() => ClubWhereInput)
    where?: ClubWhereInput;
}
