import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { RoleScalarRelationFilter } from '../role/role-scalar-relation-filter.input';

@InputType()
export class RolePermissionWhereInput {

    @Field(() => [RolePermissionWhereInput], {nullable:true})
    AND?: Array<RolePermissionWhereInput>;

    @Field(() => [RolePermissionWhereInput], {nullable:true})
    OR?: Array<RolePermissionWhereInput>;

    @Field(() => [RolePermissionWhereInput], {nullable:true})
    NOT?: Array<RolePermissionWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    roleId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    permission?: StringFilter;

    @Field(() => RoleScalarRelationFilter, {nullable:true})
    role?: RoleScalarRelationFilter;
}
