import { registerEnumType } from '@nestjs/graphql';

export enum ExpenseCategoryScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ExpenseCategoryScalarFieldEnum, { name: 'ExpenseCategoryScalarFieldEnum', description: undefined })
