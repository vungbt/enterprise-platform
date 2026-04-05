import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RolePermissionRoleIdPermissionCompoundUniqueInput } from './role-permission-role-id-permission-compound-unique.input';
import { RolePermissionWhereInput } from './role-permission-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { RoleScalarRelationFilter } from '../role/role-scalar-relation-filter.input';

@InputType()
export class RolePermissionWhereUniqueInput {

    @Field(() => RolePermissionRoleIdPermissionCompoundUniqueInput, {nullable:true})
    roleId_permission?: RolePermissionRoleIdPermissionCompoundUniqueInput;

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
