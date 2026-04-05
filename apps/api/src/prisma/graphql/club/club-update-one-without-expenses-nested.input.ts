import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubCreateWithoutExpensesInput } from './club-create-without-expenses.input';
import { Type } from 'class-transformer';
import { ClubCreateOrConnectWithoutExpensesInput } from './club-create-or-connect-without-expenses.input';
import { ClubUpsertWithoutExpensesInput } from './club-upsert-without-expenses.input';
import { ClubWhereInput } from './club-where.input';
import { Prisma } from '@prisma/client';
import { ClubWhereUniqueInput } from './club-where-unique.input';
import { ClubUpdateToOneWithWhereWithoutExpensesInput } from './club-update-to-one-with-where-without-expenses.input';

@InputType()
export class ClubUpdateOneWithoutExpensesNestedInput {

    @Field(() => ClubCreateWithoutExpensesInput, {nullable:true})
    @Type(() => ClubCreateWithoutExpensesInput)
    create?: ClubCreateWithoutExpensesInput;

    @Field(() => ClubCreateOrConnectWithoutExpensesInput, {nullable:true})
    @Type(() => ClubCreateOrConnectWithoutExpensesInput)
    connectOrCreate?: ClubCreateOrConnectWithoutExpensesInput;

    @Field(() => ClubUpsertWithoutExpensesInput, {nullable:true})
    @Type(() => ClubUpsertWithoutExpensesInput)
    upsert?: ClubUpsertWithoutExpensesInput;

    @Field(() => ClubWhereInput, {nullable:true})
    @Type(() => ClubWhereInput)
    disconnect?: ClubWhereInput;

    @Field(() => ClubWhereInput, {nullable:true})
    @Type(() => ClubWhereInput)
    delete?: ClubWhereInput;

    @Field(() => ClubWhereUniqueInput, {nullable:true})
    @Type(() => ClubWhereUniqueInput)
    connect?: Prisma.AtLeast<ClubWhereUniqueInput, 'id'>;

    @Field(() => ClubUpdateToOneWithWhereWithoutExpensesInput, {nullable:true})
    @Type(() => ClubUpdateToOneWithWhereWithoutExpensesInput)
    update?: ClubUpdateToOneWithWhereWithoutExpensesInput;
}
