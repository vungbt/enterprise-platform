import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpenseCreateWithoutClubInput } from './expense-create-without-club.input';
import { Type } from 'class-transformer';
import { ExpenseCreateOrConnectWithoutClubInput } from './expense-create-or-connect-without-club.input';
import { ExpenseCreateManyClubInputEnvelope } from './expense-create-many-club-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ExpenseWhereUniqueInput } from './expense-where-unique.input';

@InputType()
export class ExpenseCreateNestedManyWithoutClubInput {

    @Field(() => [ExpenseCreateWithoutClubInput], {nullable:true})
    @Type(() => ExpenseCreateWithoutClubInput)
    create?: Array<ExpenseCreateWithoutClubInput>;

    @Field(() => [ExpenseCreateOrConnectWithoutClubInput], {nullable:true})
    @Type(() => ExpenseCreateOrConnectWithoutClubInput)
    connectOrCreate?: Array<ExpenseCreateOrConnectWithoutClubInput>;

    @Field(() => ExpenseCreateManyClubInputEnvelope, {nullable:true})
    @Type(() => ExpenseCreateManyClubInputEnvelope)
    createMany?: ExpenseCreateManyClubInputEnvelope;

    @Field(() => [ExpenseWhereUniqueInput], {nullable:true})
    @Type(() => ExpenseWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ExpenseWhereUniqueInput, 'id'>>;
}
