import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ClubWhereUniqueInput } from './club-where-unique.input';
import { Type } from 'class-transformer';
import { ClubCreateWithoutExpensesInput } from './club-create-without-expenses.input';

@InputType()
export class ClubCreateOrConnectWithoutExpensesInput {

    @Field(() => ClubWhereUniqueInput, {nullable:false})
    @Type(() => ClubWhereUniqueInput)
    where!: Prisma.AtLeast<ClubWhereUniqueInput, 'id'>;

    @Field(() => ClubCreateWithoutExpensesInput, {nullable:false})
    @Type(() => ClubCreateWithoutExpensesInput)
    create!: ClubCreateWithoutExpensesInput;
}
