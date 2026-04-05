import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubUpdateWithoutExpensesInput } from './club-update-without-expenses.input';
import { Type } from 'class-transformer';
import { ClubCreateWithoutExpensesInput } from './club-create-without-expenses.input';
import { ClubWhereInput } from './club-where.input';

@InputType()
export class ClubUpsertWithoutExpensesInput {

    @Field(() => ClubUpdateWithoutExpensesInput, {nullable:false})
    @Type(() => ClubUpdateWithoutExpensesInput)
    update!: ClubUpdateWithoutExpensesInput;

    @Field(() => ClubCreateWithoutExpensesInput, {nullable:false})
    @Type(() => ClubCreateWithoutExpensesInput)
    create!: ClubCreateWithoutExpensesInput;

    @Field(() => ClubWhereInput, {nullable:true})
    @Type(() => ClubWhereInput)
    where?: ClubWhereInput;
}
