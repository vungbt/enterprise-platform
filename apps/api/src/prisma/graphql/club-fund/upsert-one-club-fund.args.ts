import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ClubFundWhereUniqueInput } from './club-fund-where-unique.input';
import { Type } from 'class-transformer';
import { ClubFundCreateInput } from './club-fund-create.input';
import { ClubFundUpdateInput } from './club-fund-update.input';

@ArgsType()
export class UpsertOneClubFundArgs {

    @Field(() => ClubFundWhereUniqueInput, {nullable:false})
    @Type(() => ClubFundWhereUniqueInput)
    where!: Prisma.AtLeast<ClubFundWhereUniqueInput, 'id' | 'clubId'>;

    @Field(() => ClubFundCreateInput, {nullable:false})
    @Type(() => ClubFundCreateInput)
    create!: ClubFundCreateInput;

    @Field(() => ClubFundUpdateInput, {nullable:false})
    @Type(() => ClubFundUpdateInput)
    update!: ClubFundUpdateInput;
}
