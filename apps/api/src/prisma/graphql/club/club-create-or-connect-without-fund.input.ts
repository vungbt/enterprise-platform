import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ClubWhereUniqueInput } from './club-where-unique.input';
import { Type } from 'class-transformer';
import { ClubCreateWithoutFundInput } from './club-create-without-fund.input';

@InputType()
export class ClubCreateOrConnectWithoutFundInput {

    @Field(() => ClubWhereUniqueInput, {nullable:false})
    @Type(() => ClubWhereUniqueInput)
    where!: Prisma.AtLeast<ClubWhereUniqueInput, 'id'>;

    @Field(() => ClubCreateWithoutFundInput, {nullable:false})
    @Type(() => ClubCreateWithoutFundInput)
    create!: ClubCreateWithoutFundInput;
}
