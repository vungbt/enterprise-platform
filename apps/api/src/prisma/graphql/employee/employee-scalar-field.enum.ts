import { registerEnumType } from '@nestjs/graphql';

export enum EmployeeScalarFieldEnum {
    id = "id",
    code = "code",
    name = "name",
    email = "email",
    phone = "phone",
    position = "position",
    hireDate = "hireDate",
    status = "status",
    departmentId = "departmentId",
    managerId = "managerId",
    userId = "userId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(EmployeeScalarFieldEnum, { name: 'EmployeeScalarFieldEnum', description: undefined })
