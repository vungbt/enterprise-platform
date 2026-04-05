import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FundTransactionType } from './fund-transaction-type.enum';

@InputType()
export class EnumFundTransactionTypeFieldUpdateOperationsInput {

    @Field(() => FundTransactionType, {nullable:true})
    set?: `${FundTransactionType}`;
}
