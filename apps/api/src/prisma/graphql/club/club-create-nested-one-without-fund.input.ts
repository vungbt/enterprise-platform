import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubCreateWithoutFundInput } from './club-create-without-fund.input';
import { Type } from 'class-transformer';
import { ClubCreateOrConnectWithoutFundInput } from './club-create-or-connect-without-fund.input';
import { Prisma } from '@prisma/client';
import { ClubWhereUniqueInput } from './club-where-unique.input';

@InputType()
export class ClubCreateNestedOneWithoutFundInput {

    @Field(() => ClubCreateWithoutFundInput, {nullable:true})
    @Type(() => ClubCreateWithoutFundInput)
    create?: ClubCreateWithoutFundInput;

    @Field(() => ClubCreateOrConnectWithoutFundInput, {nullable:true})
    @Type(() => ClubCreateOrConnectWithoutFundInput)
    connectOrCreate?: ClubCreateOrConnectWithoutFundInput;

    @Field(() => ClubWhereUniqueInput, {nullable:true})
    @Type(() => ClubWhereUniqueInput)
    connect?: Prisma.AtLeast<ClubWhereUniqueInput, 'id'>;
}
