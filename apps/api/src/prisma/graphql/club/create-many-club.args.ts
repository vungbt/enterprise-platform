import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClubCreateManyInput } from './club-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyClubArgs {

    @Field(() => [ClubCreateManyInput], {nullable:false})
    @Type(() => ClubCreateManyInput)
    data!: Array<ClubCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
