import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ExpenseWhereUniqueInput } from './expense-where-unique.input';
import { Type } from 'class-transformer';
import { ExpenseCreateWithoutClubInput } from './expense-create-without-club.input';

@InputType()
export class ExpenseCreateOrConnectWithoutClubInput {

    @Field(() => ExpenseWhereUniqueInput, {nullable:false})
    @Type(() => ExpenseWhereUniqueInput)
    where!: Prisma.AtLeast<ExpenseWhereUniqueInput, 'id'>;

    @Field(() => ExpenseCreateWithoutClubInput, {nullable:false})
    @Type(() => ExpenseCreateWithoutClubInput)
    create!: ExpenseCreateWithoutClubInput;
}
