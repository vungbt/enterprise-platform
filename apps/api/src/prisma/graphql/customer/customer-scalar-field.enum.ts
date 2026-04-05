import { registerEnumType } from '@nestjs/graphql';

export enum CustomerScalarFieldEnum {
    id = "id",
    name = "name",
    email = "email",
    phone = "phone",
    company = "company",
    status = "status",
    ownerId = "ownerId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(CustomerScalarFieldEnum, { name: 'CustomerScalarFieldEnum', description: undefined })
