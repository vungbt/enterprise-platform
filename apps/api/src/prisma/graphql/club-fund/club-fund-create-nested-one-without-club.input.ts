import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubFundCreateWithoutClubInput } from './club-fund-create-without-club.input';
import { Type } from 'class-transformer';
import { ClubFundCreateOrConnectWithoutClubInput } from './club-fund-create-or-connect-without-club.input';
import { Prisma } from '@prisma/client';
import { ClubFundWhereUniqueInput } from './club-fund-where-unique.input';

@InputType()
export class ClubFundCreateNestedOneWithoutClubInput {

    @Field(() => ClubFundCreateWithoutClubInput, {nullable:true})
    @Type(() => ClubFundCreateWithoutClubInput)
    create?: ClubFundCreateWithoutClubInput;

    @Field(() => ClubFundCreateOrConnectWithoutClubInput, {nullable:true})
    @Type(() => ClubFundCreateOrConnectWithoutClubInput)
    connectOrCreate?: ClubFundCreateOrConnectWithoutClubInput;

    @Field(() => ClubFundWhereUniqueInput, {nullable:true})
    @Type(() => ClubFundWhereUniqueInput)
    connect?: Prisma.AtLeast<ClubFundWhereUniqueInput, 'id' | 'clubId'>;
}
