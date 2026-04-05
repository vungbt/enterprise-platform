import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubStatus } from './club-status.enum';
import { NestedEnumClubStatusFilter } from './nested-enum-club-status-filter.input';

@InputType()
export class EnumClubStatusFilter {

    @Field(() => ClubStatus, {nullable:true})
    equals?: `${ClubStatus}`;

    @Field(() => [ClubStatus], {nullable:true})
    in?: Array<`${ClubStatus}`>;

    @Field(() => [ClubStatus], {nullable:true})
    notIn?: Array<`${ClubStatus}`>;

    @Field(() => NestedEnumClubStatusFilter, {nullable:true})
    not?: NestedEnumClubStatusFilter;
}
