import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ClubFundWhereUniqueInput } from './club-fund-where-unique.input';
import { Type } from 'class-transformer';
import { ClubFundCreateWithoutClubInput } from './club-fund-create-without-club.input';

@InputType()
export class ClubFundCreateOrConnectWithoutClubInput {

    @Field(() => ClubFundWhereUniqueInput, {nullable:false})
    @Type(() => ClubFundWhereUniqueInput)
    where!: Prisma.AtLeast<ClubFundWhereUniqueInput, 'id' | 'clubId'>;

    @Field(() => ClubFundCreateWithoutClubInput, {nullable:false})
    @Type(() => ClubFundCreateWithoutClubInput)
    create!: ClubFundCreateWithoutClubInput;
}
