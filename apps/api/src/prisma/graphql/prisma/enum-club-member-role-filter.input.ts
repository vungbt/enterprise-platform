import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubMemberRole } from './club-member-role.enum';
import { NestedEnumClubMemberRoleFilter } from './nested-enum-club-member-role-filter.input';

@InputType()
export class EnumClubMemberRoleFilter {

    @Field(() => ClubMemberRole, {nullable:true})
    equals?: `${ClubMemberRole}`;

    @Field(() => [ClubMemberRole], {nullable:true})
    in?: Array<`${ClubMemberRole}`>;

    @Field(() => [ClubMemberRole], {nullable:true})
    notIn?: Array<`${ClubMemberRole}`>;

    @Field(() => NestedEnumClubMemberRoleFilter, {nullable:true})
    not?: NestedEnumClubMemberRoleFilter;
}
