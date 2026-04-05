import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubFundUpdateWithoutExpensesInput } from './club-fund-update-without-expenses.input';
import { Type } from 'class-transformer';
import { ClubFundCreateWithoutExpensesInput } from './club-fund-create-without-expenses.input';
import { ClubFundWhereInput } from './club-fund-where.input';

@InputType()
export class ClubFundUpsertWithoutExpensesInput {

    @Field(() => ClubFundUpdateWithoutExpensesInput, {nullable:false})
    @Type(() => ClubFundUpdateWithoutExpensesInput)
    update!: ClubFundUpdateWithoutExpensesInput;

    @Field(() => ClubFundCreateWithoutExpensesInput, {nullable:false})
    @Type(() => ClubFundCreateWithoutExpensesInput)
    create!: ClubFundCreateWithoutExpensesInput;

    @Field(() => ClubFundWhereInput, {nullable:true})
    @Type(() => ClubFundWhereInput)
    where?: ClubFundWhereInput;
}
