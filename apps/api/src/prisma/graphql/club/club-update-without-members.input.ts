import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubStatus } from '../prisma/club-status.enum';
import { UserUpdateOneRequiredWithoutOwnedClubsNestedInput } from '../user/user-update-one-required-without-owned-clubs-nested.input';
import { ExpenseUpdateManyWithoutClubNestedInput } from '../expense/expense-update-many-without-club-nested.input';
import { ClubFundUpdateOneWithoutClubNestedInput } from '../club-fund/club-fund-update-one-without-club-nested.input';

@InputType()
export class ClubUpdateWithoutMembersInput {

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

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => UserUpdateOneRequiredWithoutOwnedClubsNestedInput, {nullable:true})
    createdBy?: UserUpdateOneRequiredWithoutOwnedClubsNestedInput;

    @Field(() => ExpenseUpdateManyWithoutClubNestedInput, {nullable:true})
    expenses?: ExpenseUpdateManyWithoutClubNestedInput;

    @Field(() => ClubFundUpdateOneWithoutClubNestedInput, {nullable:true})
    fund?: ClubFundUpdateOneWithoutClubNestedInput;
}
