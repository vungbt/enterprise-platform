import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FundTransactionCreateManyExpenseInput } from './fund-transaction-create-many-expense.input';
import { Type } from 'class-transformer';

@InputType()
export class FundTransactionCreateManyExpenseInputEnvelope {

    @Field(() => [FundTransactionCreateManyExpenseInput], {nullable:false})
    @Type(() => FundTransactionCreateManyExpenseInput)
    data!: Array<FundTransactionCreateManyExpenseInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
