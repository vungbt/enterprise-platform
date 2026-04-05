import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubFundCreateWithoutTransactionsInput } from './club-fund-create-without-transactions.input';
import { Type } from 'class-transformer';
import { ClubFundCreateOrConnectWithoutTransactionsInput } from './club-fund-create-or-connect-without-transactions.input';
import { Prisma } from '@prisma/client';
import { ClubFundWhereUniqueInput } from './club-fund-where-unique.input';

@InputType()
export class ClubFundCreateNestedOneWithoutTransactionsInput {

    @Field(() => ClubFundCreateWithoutTransactionsInput, {nullable:true})
    @Type(() => ClubFundCreateWithoutTransactionsInput)
    create?: ClubFundCreateWithoutTransactionsInput;

    @Field(() => ClubFundCreateOrConnectWithoutTransactionsInput, {nullable:true})
    @Type(() => ClubFundCreateOrConnectWithoutTransactionsInput)
    connectOrCreate?: ClubFundCreateOrConnectWithoutTransactionsInput;

    @Field(() => ClubFundWhereUniqueInput, {nullable:true})
    @Type(() => ClubFundWhereUniqueInput)
    connect?: Prisma.AtLeast<ClubFundWhereUniqueInput, 'id' | 'clubId'>;
}
