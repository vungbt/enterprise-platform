import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubStatus } from '../prisma/club-status.enum';
import { ClubMemberUncheckedUpdateManyWithoutClubNestedInput } from '../club-member/club-member-unchecked-update-many-without-club-nested.input';
import { ExpenseUncheckedUpdateManyWithoutClubNestedInput } from '../expense/expense-unchecked-update-many-without-club-nested.input';
import { ClubFundUncheckedUpdateOneWithoutClubNestedInput } from '../club-fund/club-fund-unchecked-update-one-without-club-nested.input';

@InputType()
export class ClubUncheckedUpdateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    sport?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => ClubStatus, {nullable:true})
    status?: `${ClubStatus}`;

    @Field(() => Date, {nullable:true})
    foundedAt?: Date | string;

    @Field(() => String, {nullable:true})
    createdById?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => ClubMemberUncheckedUpdateManyWithoutClubNestedInput, {nullable:true})
    members?: ClubMemberUncheckedUpdateManyWithoutClubNestedInput;

    @Field(() => ExpenseUncheckedUpdateManyWithoutClubNestedInput, {nullable:true})
    expenses?: ExpenseUncheckedUpdateManyWithoutClubNestedInput;

    @Field(() => ClubFundUncheckedUpdateOneWithoutClubNestedInput, {nullable:true})
    fund?: ClubFundUncheckedUpdateOneWithoutClubNestedInput;
}
