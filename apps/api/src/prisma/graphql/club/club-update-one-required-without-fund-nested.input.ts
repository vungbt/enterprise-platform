import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubCreateWithoutFundInput } from './club-create-without-fund.input';
import { Type } from 'class-transformer';
import { ClubCreateOrConnectWithoutFundInput } from './club-create-or-connect-without-fund.input';
import { ClubUpsertWithoutFundInput } from './club-upsert-without-fund.input';
import { Prisma } from '@prisma/client';
import { ClubWhereUniqueInput } from './club-where-unique.input';
import { ClubUpdateToOneWithWhereWithoutFundInput } from './club-update-to-one-with-where-without-fund.input';

@InputType()
export class ClubUpdateOneRequiredWithoutFundNestedInput {

    @Field(() => ClubCreateWithoutFundInput, {nullable:true})
    @Type(() => ClubCreateWithoutFundInput)
    create?: ClubCreateWithoutFundInput;

    @Field(() => ClubCreateOrConnectWithoutFundInput, {nullable:true})
    @Type(() => ClubCreateOrConnectWithoutFundInput)
    connectOrCreate?: ClubCreateOrConnectWithoutFundInput;

    @Field(() => ClubUpsertWithoutFundInput, {nullable:true})
    @Type(() => ClubUpsertWithoutFundInput)
    upsert?: ClubUpsertWithoutFundInput;

    @Field(() => ClubWhereUniqueInput, {nullable:true})
    @Type(() => ClubWhereUniqueInput)
    connect?: Prisma.AtLeast<ClubWhereUniqueInput, 'id'>;

    @Field(() => ClubUpdateToOneWithWhereWithoutFundInput, {nullable:true})
    @Type(() => ClubUpdateToOneWithWhereWithoutFundInput)
    update?: ClubUpdateToOneWithWhereWithoutFundInput;
}
