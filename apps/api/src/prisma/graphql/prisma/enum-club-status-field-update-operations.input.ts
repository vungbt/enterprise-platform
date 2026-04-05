import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubStatus } from './club-status.enum';

@InputType()
export class EnumClubStatusFieldUpdateOperationsInput {

    @Field(() => ClubStatus, {nullable:true})
    set?: `${ClubStatus}`;
}
