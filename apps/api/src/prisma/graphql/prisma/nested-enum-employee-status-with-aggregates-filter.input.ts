import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeStatus } from './employee-status.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumEmployeeStatusFilter } from './nested-enum-employee-status-filter.input';

@InputType()
export class NestedEnumEmployeeStatusWithAggregatesFilter {

    @Field(() => EmployeeStatus, {nullable:true})
    equals?: `${EmployeeStatus}`;

    @Field(() => [EmployeeStatus], {nullable:true})
    in?: Array<`${EmployeeStatus}`>;

    @Field(() => [EmployeeStatus], {nullable:true})
    notIn?: Array<`${EmployeeStatus}`>;

    @Field(() => NestedEnumEmployeeStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumEmployeeStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumEmployeeStatusFilter, {nullable:true})
    _min?: NestedEnumEmployeeStatusFilter;

    @Field(() => NestedEnumEmployeeStatusFilter, {nullable:true})
    _max?: NestedEnumEmployeeStatusFilter;
}
