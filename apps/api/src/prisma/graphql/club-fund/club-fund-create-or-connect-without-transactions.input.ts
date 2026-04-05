import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ClubFundWhereUniqueInput } from './club-fund-where-unique.input';
import { Type } from 'class-transformer';
import { ClubFundCreateWithoutTransactionsInput } from './club-fund-create-without-transactions.input';

@InputType()
export class ClubFundCreateOrConnectWithoutTransactionsInput {

    @Field(() => ClubFundWhereUniqueInput, {nullable:false})
    @Type(() => ClubFundWhereUniqueInput)
    where!: Prisma.AtLeast<ClubFundWhereUniqueInput, 'id' | 'clubId'>;

    @Field(() => ClubFundCreateWithoutTransactionsInput, {nullable:false})
    @Type(() => ClubFundCreateWithoutTransactionsInput)
    create!: ClubFundCreateWithoutTransactionsInput;
}
