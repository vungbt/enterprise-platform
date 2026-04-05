import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubStatus } from './club-status.enum';
import { NestedEnumClubStatusWithAggregatesFilter } from './nested-enum-club-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumClubStatusFilter } from './nested-enum-club-status-filter.input';

@InputType()
export class EnumClubStatusWithAggregatesFilter {

    @Field(() => ClubStatus, {nullable:true})
    equals?: `${ClubStatus}`;

    @Field(() => [ClubStatus], {nullable:true})
    in?: Array<`${ClubStatus}`>;

    @Field(() => [ClubStatus], {nullable:true})
    notIn?: Array<`${ClubStatus}`>;

    @Field(() => NestedEnumClubStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumClubStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumClubStatusFilter, {nullable:true})
    _min?: NestedEnumClubStatusFilter;

    @Field(() => NestedEnumClubStatusFilter, {nullable:true})
    _max?: NestedEnumClubStatusFilter;
}
