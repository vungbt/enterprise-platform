import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClubFundCreateInput } from './club-fund-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneClubFundArgs {

    @Field(() => ClubFundCreateInput, {nullable:false})
    @Type(() => ClubFundCreateInput)
    data!: ClubFundCreateInput;
}
