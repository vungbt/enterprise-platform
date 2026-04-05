import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpenseCreateWithoutClubInput } from './expense-create-without-club.input';
import { Type } from 'class-transformer';
import { ExpenseCreateOrConnectWithoutClubInput } from './expense-create-or-connect-without-club.input';
import { ExpenseUpsertWithWhereUniqueWithoutClubInput } from './expense-upsert-with-where-unique-without-club.input';
import { ExpenseCreateManyClubInputEnvelope } from './expense-create-many-club-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ExpenseWhereUniqueInput } from './expense-where-unique.input';
import { ExpenseUpdateWithWhereUniqueWithoutClubInput } from './expense-update-with-where-unique-without-club.input';
import { ExpenseUpdateManyWithWhereWithoutClubInput } from './expense-update-many-with-where-without-club.input';
import { ExpenseScalarWhereInput } from './expense-scalar-where.input';

@InputType()
export class ExpenseUncheckedUpdateManyWithoutClubNestedInput {

    @Field(() => [ExpenseCreateWithoutClubInput], {nullable:true})
    @Type(() => ExpenseCreateWithoutClubInput)
    create?: Array<ExpenseCreateWithoutClubInput>;

    @Field(() => [ExpenseCreateOrConnectWithoutClubInput], {nullable:true})
    @Type(() => ExpenseCreateOrConnectWithoutClubInput)
    connectOrCreate?: Array<ExpenseCreateOrConnectWithoutClubInput>;

    @Field(() => [ExpenseUpsertWithWhereUniqueWithoutClubInput], {nullable:true})
    @Type(() => ExpenseUpsertWithWhereUniqueWithoutClubInput)
    upsert?: Array<ExpenseUpsertWithWhereUniqueWithoutClubInput>;

    @Field(() => ExpenseCreateManyClubInputEnvelope, {nullable:true})
    @Type(() => ExpenseCreateManyClubInputEnvelope)
    createMany?: ExpenseCreateManyClubInputEnvelope;

    @Field(() => [ExpenseWhereUniqueInput], {nullable:true})
    @Type(() => ExpenseWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ExpenseWhereUniqueInput, 'id'>>;

    @Field(() => [ExpenseWhereUniqueInput], {nullable:true})
    @Type(() => ExpenseWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ExpenseWhereUniqueInput, 'id'>>;

    @Field(() => [ExpenseWhereUniqueInput], {nullable:true})
    @Type(() => ExpenseWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ExpenseWhereUniqueInput, 'id'>>;

    @Field(() => [ExpenseWhereUniqueInput], {nullable:true})
    @Type(() => ExpenseWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ExpenseWhereUniqueInput, 'id'>>;

    @Field(() => [ExpenseUpdateWithWhereUniqueWithoutClubInput], {nullable:true})
    @Type(() => ExpenseUpdateWithWhereUniqueWithoutClubInput)
    update?: Array<ExpenseUpdateWithWhereUniqueWithoutClubInput>;

    @Field(() => [ExpenseUpdateManyWithWhereWithoutClubInput], {nullable:true})
    @Type(() => ExpenseUpdateManyWithWhereWithoutClubInput)
    updateMany?: Array<ExpenseUpdateManyWithWhereWithoutClubInput>;

    @Field(() => [ExpenseScalarWhereInput], {nullable:true})
    @Type(() => ExpenseScalarWhereInput)
    deleteMany?: Array<ExpenseScalarWhereInput>;
}
