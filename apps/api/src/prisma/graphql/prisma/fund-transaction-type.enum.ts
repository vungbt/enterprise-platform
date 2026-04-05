import { registerEnumType } from '@nestjs/graphql';

export enum FundTransactionType {
    contribution = "contribution",
    expense = "expense",
    adjustment = "adjustment",
    refund = "refund"
}


registerEnumType(FundTransactionType, { name: 'FundTransactionType', description: undefined })
