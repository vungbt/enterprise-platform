import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubStatus } from '../prisma/club-status.enum';
import { UserUpdateOneRequiredWithoutOwnedClubsNestedInput } from '../user/user-update-one-required-without-owned-clubs-nested.input';
import { ClubMemberUpdateManyWithoutClubNestedInput } from '../club-member/club-member-update-many-without-club-nested.input';
import { ClubFundUpdateOneWithoutClubNestedInput } from '../club-fund/club-fund-update-one-without-club-nested.input';

@InputType()
export class ClubUpdateWithoutExpensesInput {

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

    @Field(() => ClubMemberUpdateManyWithoutClubNestedInput, {nullable:true})
    members?: ClubMemberUpdateManyWithoutClubNestedInput;

    @Field(() => ClubFundUpdateOneWithoutClubNestedInput, {nullable:true})
    fund?: ClubFundUpdateOneWithoutClubNestedInput;
}
