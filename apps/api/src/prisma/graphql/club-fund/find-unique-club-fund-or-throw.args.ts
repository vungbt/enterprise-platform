import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ClubFundWhereUniqueInput } from './club-fund-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueClubFundOrThrowArgs {

    @Field(() => ClubFundWhereUniqueInput, {nullable:false})
    @Type(() => ClubFundWhereUniqueInput)
    where!: Prisma.AtLeast<ClubFundWhereUniqueInput, 'id' | 'clubId'>;
}
