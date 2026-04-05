import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubStatus } from '../prisma/club-status.enum';
import { ExpenseUncheckedCreateNestedManyWithoutClubInput } from '../expense/expense-unchecked-create-nested-many-without-club.input';
import { ClubFundUncheckedCreateNestedOneWithoutClubInput } from '../club-fund/club-fund-unchecked-create-nested-one-without-club.input';

@InputType()
export class ClubUncheckedCreateWithoutMembersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    sport!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => ClubStatus, {nullable:true})
    status?: `${ClubStatus}`;

    @Field(() => Date, {nullable:true})
    foundedAt?: Date | string;

    @Field(() => String, {nullable:false})
    createdById!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => ExpenseUncheckedCreateNestedManyWithoutClubInput, {nullable:true})
    expenses?: ExpenseUncheckedCreateNestedManyWithoutClubInput;

    @Field(() => ClubFundUncheckedCreateNestedOneWithoutClubInput, {nullable:true})
    fund?: ClubFundUncheckedCreateNestedOneWithoutClubInput;
}
