import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubFundUpdateWithoutClubInput } from './club-fund-update-without-club.input';
import { Type } from 'class-transformer';
import { ClubFundCreateWithoutClubInput } from './club-fund-create-without-club.input';
import { ClubFundWhereInput } from './club-fund-where.input';

@InputType()
export class ClubFundUpsertWithoutClubInput {

    @Field(() => ClubFundUpdateWithoutClubInput, {nullable:false})
    @Type(() => ClubFundUpdateWithoutClubInput)
    update!: ClubFundUpdateWithoutClubInput;

    @Field(() => ClubFundCreateWithoutClubInput, {nullable:false})
    @Type(() => ClubFundCreateWithoutClubInput)
    create!: ClubFundCreateWithoutClubInput;

    @Field(() => ClubFundWhereInput, {nullable:true})
    @Type(() => ClubFundWhereInput)
    where?: ClubFundWhereInput;
}
