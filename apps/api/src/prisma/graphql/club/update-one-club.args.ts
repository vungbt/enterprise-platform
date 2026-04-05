import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClubUpdateInput } from './club-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ClubWhereUniqueInput } from './club-where-unique.input';

@ArgsType()
export class UpdateOneClubArgs {

    @Field(() => ClubUpdateInput, {nullable:false})
    @Type(() => ClubUpdateInput)
    data!: ClubUpdateInput;

    @Field(() => ClubWhereUniqueInput, {nullable:false})
    @Type(() => ClubWhereUniqueInput)
    where!: Prisma.AtLeast<ClubWhereUniqueInput, 'id'>;
}
