import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubMemberRole } from './club-member-role.enum';

@InputType()
export class EnumClubMemberRoleFieldUpdateOperationsInput {

    @Field(() => ClubMemberRole, {nullable:true})
    set?: `${ClubMemberRole}`;
}
