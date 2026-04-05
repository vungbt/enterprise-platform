import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubFundWhereInput } from './club-fund-where.input';
import { Type } from 'class-transformer';
import { ClubFundUpdateWithoutClubInput } from './club-fund-update-without-club.input';

@InputType()
export class ClubFundUpdateToOneWithWhereWithoutClubInput {

    @Field(() => ClubFundWhereInput, {nullable:true})
    @Type(() => ClubFundWhereInput)
    where?: ClubFundWhereInput;

    @Field(() => ClubFundUpdateWithoutClubInput, {nullable:false})
    @Type(() => ClubFundUpdateWithoutClubInput)
    data!: ClubFundUpdateWithoutClubInput;
}
