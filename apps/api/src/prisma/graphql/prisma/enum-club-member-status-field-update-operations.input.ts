import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubMemberStatus } from './club-member-status.enum';

@InputType()
export class EnumClubMemberStatusFieldUpdateOperationsInput {

    @Field(() => ClubMemberStatus, {nullable:true})
    set?: `${ClubMemberStatus}`;
}
