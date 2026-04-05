import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClubCreateInput } from './club-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneClubArgs {

    @Field(() => ClubCreateInput, {nullable:false})
    @Type(() => ClubCreateInput)
    data!: ClubCreateInput;
}
