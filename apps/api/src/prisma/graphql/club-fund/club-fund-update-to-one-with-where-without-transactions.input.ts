import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubFundWhereInput } from './club-fund-where.input';
import { Type } from 'class-transformer';
import { ClubFundUpdateWithoutTransactionsInput } from './club-fund-update-without-transactions.input';

@InputType()
export class ClubFundUpdateToOneWithWhereWithoutTransactionsInput {

    @Field(() => ClubFundWhereInput, {nullable:true})
    @Type(() => ClubFundWhereInput)
    where?: ClubFundWhereInput;

    @Field(() => ClubFundUpdateWithoutTransactionsInput, {nullable:false})
    @Type(() => ClubFundUpdateWithoutTransactionsInput)
    data!: ClubFundUpdateWithoutTransactionsInput;
}
