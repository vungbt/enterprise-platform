import { registerEnumType } from '@nestjs/graphql';

export enum RolePermissionScalarFieldEnum {
    roleId = "roleId",
    permission = "permission"
}


registerEnumType(RolePermissionScalarFieldEnum, { name: 'RolePermissionScalarFieldEnum', description: undefined })
