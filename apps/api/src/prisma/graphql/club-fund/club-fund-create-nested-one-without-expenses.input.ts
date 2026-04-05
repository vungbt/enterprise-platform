import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubFundCreateWithoutExpensesInput } from './club-fund-create-without-expenses.input';
import { Type } from 'class-transformer';
import { ClubFundCreateOrConnectWithoutExpensesInput } from './club-fund-create-or-connect-without-expenses.input';
import { Prisma } from '@prisma/client';
import { ClubFundWhereUniqueInput } from './club-fund-where-unique.input';

@InputType()
export class ClubFundCreateNestedOneWithoutExpensesInput {

    @Field(() => ClubFundCreateWithoutExpensesInput, {nullable:true})
    @Type(() => ClubFundCreateWithoutExpensesInput)
    create?: ClubFundCreateWithoutExpensesInput;

    @Field(() => ClubFundCreateOrConnectWithoutExpensesInput, {nullable:true})
    @Type(() => ClubFundCreateOrConnectWithoutExpensesInput)
    connectOrCreate?: ClubFundCreateOrConnectWithoutExpensesInput;

    @Field(() => ClubFundWhereUniqueInput, {nullable:true})
    @Type(() => ClubFundWhereUniqueInput)
    connect?: Prisma.AtLeast<ClubFundWhereUniqueInput, 'id' | 'clubId'>;
}
