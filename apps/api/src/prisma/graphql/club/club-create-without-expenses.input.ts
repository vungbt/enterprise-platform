import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubStatus } from '../prisma/club-status.enum';
import { UserCreateNestedOneWithoutOwnedClubsInput } from '../user/user-create-nested-one-without-owned-clubs.input';
import { ClubMemberCreateNestedManyWithoutClubInput } from '../club-member/club-member-create-nested-many-without-club.input';
import { ClubFundCreateNestedOneWithoutClubInput } from '../club-fund/club-fund-create-nested-one-without-club.input';

@InputType()
export class ClubCreateWithoutExpensesInput {

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

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutOwnedClubsInput, {nullable:false})
    createdBy!: UserCreateNestedOneWithoutOwnedClubsInput;

    @Field(() => ClubMemberCreateNestedManyWithoutClubInput, {nullable:true})
    members?: ClubMemberCreateNestedManyWithoutClubInput;

    @Field(() => ClubFundCreateNestedOneWithoutClubInput, {nullable:true})
    fund?: ClubFundCreateNestedOneWithoutClubInput;
}
