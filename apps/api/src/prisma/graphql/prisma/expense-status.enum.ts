import { registerEnumType } from '@nestjs/graphql';

export enum ExpenseStatus {
    pending = "pending",
    approved = "approved",
    rejected = "rejected",
    reimbursed = "reimbursed"
}


registerEnumType(ExpenseStatus, { name: 'ExpenseStatus', description: undefined })
