import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeStatus } from './employee-status.enum';
import { NestedEnumEmployeeStatusFilter } from './nested-enum-employee-status-filter.input';

@InputType()
export class EnumEmployeeStatusFilter {

    @Field(() => EmployeeStatus, {nullable:true})
    equals?: `${EmployeeStatus}`;

    @Field(() => [EmployeeStatus], {nullable:true})
    in?: Array<`${EmployeeStatus}`>;

    @Field(() => [EmployeeStatus], {nullable:true})
    notIn?: Array<`${EmployeeStatus}`>;

    @Field(() => NestedEnumEmployeeStatusFilter, {nullable:true})
    not?: NestedEnumEmployeeStatusFilter;
}
