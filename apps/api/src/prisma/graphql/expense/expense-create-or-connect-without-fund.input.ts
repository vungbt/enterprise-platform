import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ExpenseWhereUniqueInput } from './expense-where-unique.input';
import { Type } from 'class-transformer';
import { ExpenseCreateWithoutFundInput } from './expense-create-without-fund.input';

@InputType()
export class ExpenseCreateOrConnectWithoutFundInput {

    @Field(() => ExpenseWhereUniqueInput, {nullable:false})
    @Type(() => ExpenseWhereUniqueInput)
    where!: Prisma.AtLeast<ExpenseWhereUniqueInput, 'id'>;

    @Field(() => ExpenseCreateWithoutFundInput, {nullable:false})
    @Type(() => ExpenseCreateWithoutFundInput)
    create!: ExpenseCreateWithoutFundInput;
}
