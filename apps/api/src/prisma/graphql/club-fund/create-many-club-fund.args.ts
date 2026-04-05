import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClubFundCreateManyInput } from './club-fund-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyClubFundArgs {

    @Field(() => [ClubFundCreateManyInput], {nullable:false})
    @Type(() => ClubFundCreateManyInput)
    data!: Array<ClubFundCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
