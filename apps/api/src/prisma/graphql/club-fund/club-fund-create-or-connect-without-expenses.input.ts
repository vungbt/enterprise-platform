import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ClubFundWhereUniqueInput } from './club-fund-where-unique.input';
import { Type } from 'class-transformer';
import { ClubFundCreateWithoutExpensesInput } from './club-fund-create-without-expenses.input';

@InputType()
export class ClubFundCreateOrConnectWithoutExpensesInput {

    @Field(() => ClubFundWhereUniqueInput, {nullable:false})
    @Type(() => ClubFundWhereUniqueInput)
    where!: Prisma.AtLeast<ClubFundWhereUniqueInput, 'id' | 'clubId'>;

    @Field(() => ClubFundCreateWithoutExpensesInput, {nullable:false})
    @Type(() => ClubFundCreateWithoutExpensesInput)
    create!: ClubFundCreateWithoutExpensesInput;
}
