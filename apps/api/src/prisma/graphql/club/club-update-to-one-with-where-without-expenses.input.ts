import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubWhereInput } from './club-where.input';
import { Type } from 'class-transformer';
import { ClubUpdateWithoutExpensesInput } from './club-update-without-expenses.input';

@InputType()
export class ClubUpdateToOneWithWhereWithoutExpensesInput {

    @Field(() => ClubWhereInput, {nullable:true})
    @Type(() => ClubWhereInput)
    where?: ClubWhereInput;

    @Field(() => ClubUpdateWithoutExpensesInput, {nullable:false})
    @Type(() => ClubUpdateWithoutExpensesInput)
    data!: ClubUpdateWithoutExpensesInput;
}
