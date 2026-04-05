import { registerEnumType } from '@nestjs/graphql';

export enum InvoiceStatus {
    draft = "draft",
    pending = "pending",
    paid = "paid",
    overdue = "overdue",
    cancelled = "cancelled"
}


registerEnumType(InvoiceStatus, { name: 'InvoiceStatus', description: undefined })
