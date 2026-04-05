import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubCreateWithoutExpensesInput } from './club-create-without-expenses.input';
import { Type } from 'class-transformer';
import { ClubCreateOrConnectWithoutExpensesInput } from './club-create-or-connect-without-expenses.input';
import { Prisma } from '@prisma/client';
import { ClubWhereUniqueInput } from './club-where-unique.input';

@InputType()
export class ClubCreateNestedOneWithoutExpensesInput {

    @Field(() => ClubCreateWithoutExpensesInput, {nullable:true})
    @Type(() => ClubCreateWithoutExpensesInput)
    create?: ClubCreateWithoutExpensesInput;

    @Field(() => ClubCreateOrConnectWithoutExpensesInput, {nullable:true})
    @Type(() => ClubCreateOrConnectWithoutExpensesInput)
    connectOrCreate?: ClubCreateOrConnectWithoutExpensesInput;

    @Field(() => ClubWhereUniqueInput, {nullable:true})
    @Type(() => ClubWhereUniqueInput)
    connect?: Prisma.AtLeast<ClubWhereUniqueInput, 'id'>;
}
