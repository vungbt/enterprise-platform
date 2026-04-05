import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubFundCreateWithoutClubInput } from './club-fund-create-without-club.input';
import { Type } from 'class-transformer';
import { ClubFundCreateOrConnectWithoutClubInput } from './club-fund-create-or-connect-without-club.input';
import { ClubFundUpsertWithoutClubInput } from './club-fund-upsert-without-club.input';
import { ClubFundWhereInput } from './club-fund-where.input';
import { Prisma } from '@prisma/client';
import { ClubFundWhereUniqueInput } from './club-fund-where-unique.input';
import { ClubFundUpdateToOneWithWhereWithoutClubInput } from './club-fund-update-to-one-with-where-without-club.input';

@InputType()
export class ClubFundUpdateOneWithoutClubNestedInput {

    @Field(() => ClubFundCreateWithoutClubInput, {nullable:true})
    @Type(() => ClubFundCreateWithoutClubInput)
    create?: ClubFundCreateWithoutClubInput;

    @Field(() => ClubFundCreateOrConnectWithoutClubInput, {nullable:true})
    @Type(() => ClubFundCreateOrConnectWithoutClubInput)
    connectOrCreate?: ClubFundCreateOrConnectWithoutClubInput;

    @Field(() => ClubFundUpsertWithoutClubInput, {nullable:true})
    @Type(() => ClubFundUpsertWithoutClubInput)
    upsert?: ClubFundUpsertWithoutClubInput;

    @Field(() => ClubFundWhereInput, {nullable:true})
    @Type(() => ClubFundWhereInput)
    disconnect?: ClubFundWhereInput;

    @Field(() => ClubFundWhereInput, {nullable:true})
    @Type(() => ClubFundWhereInput)
    delete?: ClubFundWhereInput;

    @Field(() => ClubFundWhereUniqueInput, {nullable:true})
    @Type(() => ClubFundWhereUniqueInput)
    connect?: Prisma.AtLeast<ClubFundWhereUniqueInput, 'id' | 'clubId'>;

    @Field(() => ClubFundUpdateToOneWithWhereWithoutClubInput, {nullable:true})
    @Type(() => ClubFundUpdateToOneWithWhereWithoutClubInput)
    update?: ClubFundUpdateToOneWithWhereWithoutClubInput;
}
