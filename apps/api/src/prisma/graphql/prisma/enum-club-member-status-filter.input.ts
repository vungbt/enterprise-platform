import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubMemberStatus } from './club-member-status.enum';
import { NestedEnumClubMemberStatusFilter } from './nested-enum-club-member-status-filter.input';

@InputType()
export class EnumClubMemberStatusFilter {

    @Field(() => ClubMemberStatus, {nullable:true})
    equals?: `${ClubMemberStatus}`;

    @Field(() => [ClubMemberStatus], {nullable:true})
    in?: Array<`${ClubMemberStatus}`>;

    @Field(() => [ClubMemberStatus], {nullable:true})
    notIn?: Array<`${ClubMemberStatus}`>;

    @Field(() => NestedEnumClubMemberStatusFilter, {nullable:true})
    not?: NestedEnumClubMemberStatusFilter;
}
