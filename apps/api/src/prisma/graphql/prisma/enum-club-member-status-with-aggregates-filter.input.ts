import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubMemberStatus } from './club-member-status.enum';
import { NestedEnumClubMemberStatusWithAggregatesFilter } from './nested-enum-club-member-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumClubMemberStatusFilter } from './nested-enum-club-member-status-filter.input';

@InputType()
export class EnumClubMemberStatusWithAggregatesFilter {

    @Field(() => ClubMemberStatus, {nullable:true})
    equals?: `${ClubMemberStatus}`;

    @Field(() => [ClubMemberStatus], {nullable:true})
    in?: Array<`${ClubMemberStatus}`>;

    @Field(() => [ClubMemberStatus], {nullable:true})
    notIn?: Array<`${ClubMemberStatus}`>;

    @Field(() => NestedEnumClubMemberStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumClubMemberStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumClubMemberStatusFilter, {nullable:true})
    _min?: NestedEnumClubMemberStatusFilter;

    @Field(() => NestedEnumClubMemberStatusFilter, {nullable:true})
    _max?: NestedEnumClubMemberStatusFilter;
}
