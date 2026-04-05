import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubFundCreateWithoutTransactionsInput } from './club-fund-create-without-transactions.input';
import { Type } from 'class-transformer';
import { ClubFundCreateOrConnectWithoutTransactionsInput } from './club-fund-create-or-connect-without-transactions.input';
import { ClubFundUpsertWithoutTransactionsInput } from './club-fund-upsert-without-transactions.input';
import { Prisma } from '@prisma/client';
import { ClubFundWhereUniqueInput } from './club-fund-where-unique.input';
import { ClubFundUpdateToOneWithWhereWithoutTransactionsInput } from './club-fund-update-to-one-with-where-without-transactions.input';

@InputType()
export class ClubFundUpdateOneRequiredWithoutTransactionsNestedInput {

    @Field(() => ClubFundCreateWithoutTransactionsInput, {nullable:true})
    @Type(() => ClubFundCreateWithoutTransactionsInput)
    create?: ClubFundCreateWithoutTransactionsInput;

    @Field(() => ClubFundCreateOrConnectWithoutTransactionsInput, {nullable:true})
    @Type(() => ClubFundCreateOrConnectWithoutTransactionsInput)
    connectOrCreate?: ClubFundCreateOrConnectWithoutTransactionsInput;

    @Field(() => ClubFundUpsertWithoutTransactionsInput, {nullable:true})
    @Type(() => ClubFundUpsertWithoutTransactionsInput)
    upsert?: ClubFundUpsertWithoutTransactionsInput;

    @Field(() => ClubFundWhereUniqueInput, {nullable:true})
    @Type(() => ClubFundWhereUniqueInput)
    connect?: Prisma.AtLeast<ClubFundWhereUniqueInput, 'id' | 'clubId'>;

    @Field(() => ClubFundUpdateToOneWithWhereWithoutTransactionsInput, {nullable:true})
    @Type(() => ClubFundUpdateToOneWithWhereWithoutTransactionsInput)
    update?: ClubFundUpdateToOneWithWhereWithoutTransactionsInput;
}
