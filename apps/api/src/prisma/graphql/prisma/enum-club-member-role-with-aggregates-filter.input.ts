import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubMemberRole } from './club-member-role.enum';
import { NestedEnumClubMemberRoleWithAggregatesFilter } from './nested-enum-club-member-role-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumClubMemberRoleFilter } from './nested-enum-club-member-role-filter.input';

@InputType()
export class EnumClubMemberRoleWithAggregatesFilter {

    @Field(() => ClubMemberRole, {nullable:true})
    equals?: `${ClubMemberRole}`;

    @Field(() => [ClubMemberRole], {nullable:true})
    in?: Array<`${ClubMemberRole}`>;

    @Field(() => [ClubMemberRole], {nullable:true})
    notIn?: Array<`${ClubMemberRole}`>;

    @Field(() => NestedEnumClubMemberRoleWithAggregatesFilter, {nullable:true})
    not?: NestedEnumClubMemberRoleWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumClubMemberRoleFilter, {nullable:true})
    _min?: NestedEnumClubMemberRoleFilter;

    @Field(() => NestedEnumClubMemberRoleFilter, {nullable:true})
    _max?: NestedEnumClubMemberRoleFilter;
}
