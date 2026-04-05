import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubWhereInput } from './club-where.input';
import { Type } from 'class-transformer';
import { ClubUpdateWithoutFundInput } from './club-update-without-fund.input';

@InputType()
export class ClubUpdateToOneWithWhereWithoutFundInput {

    @Field(() => ClubWhereInput, {nullable:true})
    @Type(() => ClubWhereInput)
    where?: ClubWhereInput;

    @Field(() => ClubUpdateWithoutFundInput, {nullable:false})
    @Type(() => ClubUpdateWithoutFundInput)
    data!: ClubUpdateWithoutFundInput;
}
