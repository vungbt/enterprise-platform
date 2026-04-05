import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubStatus } from './club-status.enum';

@InputType()
export class NestedEnumClubStatusFilter {

    @Field(() => ClubStatus, {nullable:true})
    equals?: `${ClubStatus}`;

    @Field(() => [ClubStatus], {nullable:true})
    in?: Array<`${ClubStatus}`>;

    @Field(() => [ClubStatus], {nullable:true})
    notIn?: Array<`${ClubStatus}`>;

    @Field(() => NestedEnumClubStatusFilter, {nullable:true})
    not?: NestedEnumClubStatusFilter;
}
