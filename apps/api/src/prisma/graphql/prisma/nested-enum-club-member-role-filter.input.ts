import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubMemberRole } from './club-member-role.enum';

@InputType()
export class NestedEnumClubMemberRoleFilter {

    @Field(() => ClubMemberRole, {nullable:true})
    equals?: `${ClubMemberRole}`;

    @Field(() => [ClubMemberRole], {nullable:true})
    in?: Array<`${ClubMemberRole}`>;

    @Field(() => [ClubMemberRole], {nullable:true})
    notIn?: Array<`${ClubMemberRole}`>;

    @Field(() => NestedEnumClubMemberRoleFilter, {nullable:true})
    not?: NestedEnumClubMemberRoleFilter;
}
