import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubFundCreateWithoutExpensesInput } from './club-fund-create-without-expenses.input';
import { Type } from 'class-transformer';
import { ClubFundCreateOrConnectWithoutExpensesInput } from './club-fund-create-or-connect-without-expenses.input';
import { ClubFundUpsertWithoutExpensesInput } from './club-fund-upsert-without-expenses.input';
import { ClubFundWhereInput } from './club-fund-where.input';
import { Prisma } from '@prisma/client';
import { ClubFundWhereUniqueInput } from './club-fund-where-unique.input';
import { ClubFundUpdateToOneWithWhereWithoutExpensesInput } from './club-fund-update-to-one-with-where-without-expenses.input';

@InputType()
export class ClubFundUpdateOneWithoutExpensesNestedInput {

    @Field(() => ClubFundCreateWithoutExpensesInput, {nullable:true})
    @Type(() => ClubFundCreateWithoutExpensesInput)
    create?: ClubFundCreateWithoutExpensesInput;

    @Field(() => ClubFundCreateOrConnectWithoutExpensesInput, {nullable:true})
    @Type(() => ClubFundCreateOrConnectWithoutExpensesInput)
    connectOrCreate?: ClubFundCreateOrConnectWithoutExpensesInput;

    @Field(() => ClubFundUpsertWithoutExpensesInput, {nullable:true})
    @Type(() => ClubFundUpsertWithoutExpensesInput)
    upsert?: ClubFundUpsertWithoutExpensesInput;

    @Field(() => ClubFundWhereInput, {nullable:true})
    @Type(() => ClubFundWhereInput)
    disconnect?: ClubFundWhereInput;

    @Field(() => ClubFundWhereInput, {nullable:true})
    @Type(() => ClubFundWhereInput)
    delete?: ClubFundWhereInput;

    @Field(() => ClubFundWhereUniqueInput, {nullable:true})
    @Type(() => ClubFundWhereUniqueInput)
    connect?: Prisma.AtLeast<ClubFundWhereUniqueInput, 'id' | 'clubId'>;

    @Field(() => ClubFundUpdateToOneWithWhereWithoutExpensesInput, {nullable:true})
    @Type(() => ClubFundUpdateToOneWithWhereWithoutExpensesInput)
    update?: ClubFundUpdateToOneWithWhereWithoutExpensesInput;
}
