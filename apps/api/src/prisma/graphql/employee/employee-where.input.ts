import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumEmployeeStatusFilter } from '../prisma/enum-employee-status-filter.input';
import { DepartmentScalarRelationFilter } from '../department/department-scalar-relation-filter.input';
import { EmployeeNullableScalarRelationFilter } from './employee-nullable-scalar-relation-filter.input';
import { EmployeeListRelationFilter } from './employee-list-relation-filter.input';
import { UserNullableScalarRelationFilter } from '../user/user-nullable-scalar-relation-filter.input';

@InputType()
export class EmployeeWhereInput {

    @Field(() => [EmployeeWhereInput], {nullable:true})
    AND?: Array<EmployeeWhereInput>;

    @Field(() => [EmployeeWhereInput], {nullable:true})
    OR?: Array<EmployeeWhereInput>;

    @Field(() => [EmployeeWhereInput], {nullable:true})
    NOT?: Array<EmployeeWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    code?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    phone?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    position?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    hireDate?: DateTimeFilter;

    @Field(() => EnumEmployeeStatusFilter, {nullable:true})
    status?: EnumEmployeeStatusFilter;

    @Field(() => StringFilter, {nullable:true})
    departmentId?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    managerId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    userId?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DepartmentScalarRelationFilter, {nullable:true})
    department?: DepartmentScalarRelationFilter;

    @Field(() => EmployeeNullableScalarRelationFilter, {nullable:true})
    manager?: EmployeeNullableScalarRelationFilter;

    @Field(() => EmployeeListRelationFilter, {nullable:true})
    reports?: EmployeeListRelationFilter;

    @Field(() => UserNullableScalarRelationFilter, {nullable:true})
    user?: UserNullableScalarRelationFilter;
}
