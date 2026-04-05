import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubFundUpdateWithoutTransactionsInput } from './club-fund-update-without-transactions.input';
import { Type } from 'class-transformer';
import { ClubFundCreateWithoutTransactionsInput } from './club-fund-create-without-transactions.input';
import { ClubFundWhereInput } from './club-fund-where.input';

@InputType()
export class ClubFundUpsertWithoutTransactionsInput {

    @Field(() => ClubFundUpdateWithoutTransactionsInput, {nullable:false})
    @Type(() => ClubFundUpdateWithoutTransactionsInput)
    update!: ClubFundUpdateWithoutTransactionsInput;

    @Field(() => ClubFundCreateWithoutTransactionsInput, {nullable:false})
    @Type(() => ClubFundCreateWithoutTransactionsInput)
    create!: ClubFundCreateWithoutTransactionsInput;

    @Field(() => ClubFundWhereInput, {nullable:true})
    @Type(() => ClubFundWhereInput)
    where?: ClubFundWhereInput;
}
