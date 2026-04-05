import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClubFundUpdateInput } from './club-fund-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ClubFundWhereUniqueInput } from './club-fund-where-unique.input';

@ArgsType()
export class UpdateOneClubFundArgs {

    @Field(() => ClubFundUpdateInput, {nullable:false})
    @Type(() => ClubFundUpdateInput)
    data!: ClubFundUpdateInput;

    @Field(() => ClubFundWhereUniqueInput, {nullable:false})
    @Type(() => ClubFundWhereUniqueInput)
    where!: Prisma.AtLeast<ClubFundWhereUniqueInput, 'id' | 'clubId'>;
}
