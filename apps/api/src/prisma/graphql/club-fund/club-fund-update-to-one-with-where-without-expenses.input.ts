import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubFundWhereInput } from './club-fund-where.input';
import { Type } from 'class-transformer';
import { ClubFundUpdateWithoutExpensesInput } from './club-fund-update-without-expenses.input';

@InputType()
export class ClubFundUpdateToOneWithWhereWithoutExpensesInput {

    @Field(() => ClubFundWhereInput, {nullable:true})
    @Type(() => ClubFundWhereInput)
    where?: ClubFundWhereInput;

    @Field(() => ClubFundUpdateWithoutExpensesInput, {nullable:false})
    @Type(() => ClubFundUpdateWithoutExpensesInput)
    data!: ClubFundUpdateWithoutExpensesInput;
}
