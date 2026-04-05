import { registerEnumType } from '@nestjs/graphql';

export enum InvoiceScalarFieldEnum {
    id = "id",
    code = "code",
    amount = "amount",
    tax = "tax",
    total = "total",
    status = "status",
    dueDate = "dueDate",
    issuedAt = "issuedAt",
    customerId = "customerId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(InvoiceScalarFieldEnum, { name: 'InvoiceScalarFieldEnum', description: undefined })
