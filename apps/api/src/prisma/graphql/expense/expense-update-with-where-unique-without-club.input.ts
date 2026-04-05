import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ExpenseWhereUniqueInput } from './expense-where-unique.input';
import { Type } from 'class-transformer';
import { ExpenseUpdateWithoutClubInput } from './expense-update-without-club.input';

@InputType()
export class ExpenseUpdateWithWhereUniqueWithoutClubInput {

    @Field(() => ExpenseWhereUniqueInput, {nullable:false})
    @Type(() => ExpenseWhereUniqueInput)
    where!: Prisma.AtLeast<ExpenseWhereUniqueInput, 'id'>;

    @Field(() => ExpenseUpdateWithoutClubInput, {nullable:false})
    @Type(() => ExpenseUpdateWithoutClubInput)
    data!: ExpenseUpdateWithoutClubInput;
}
