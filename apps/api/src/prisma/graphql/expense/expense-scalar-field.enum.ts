import { registerEnumType } from '@nestjs/graphql';

export enum ExpenseScalarFieldEnum {
    id = "id",
    title = "title",
    amount = "amount",
    description = "description",
    date = "date",
    status = "status",
    categoryId = "categoryId",
    createdById = "createdById",
    clubId = "clubId",
    departmentId = "departmentId",
    fundId = "fundId",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    deletedAt = "deletedAt"
}


registerEnumType(ExpenseScalarFieldEnum, { name: 'ExpenseScalarFieldEnum', description: undefined })
