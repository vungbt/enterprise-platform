import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpenseCreateManyFundInput } from './expense-create-many-fund.input';
import { Type } from 'class-transformer';

@InputType()
export class ExpenseCreateManyFundInputEnvelope {

    @Field(() => [ExpenseCreateManyFundInput], {nullable:false})
    @Type(() => ExpenseCreateManyFundInput)
    data!: Array<ExpenseCreateManyFundInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
