import { registerEnumType } from '@nestjs/graphql';

export enum FundTransactionScalarFieldEnum {
    id = "id",
    fundId = "fundId",
    type = "type",
    flow = "flow",
    amount = "amount",
    balanceAfter = "balanceAfter",
    note = "note",
    refContribId = "refContribId",
    refExpenseId = "refExpenseId",
    refTransactionId = "refTransactionId",
    createdById = "createdById",
    createdAt = "createdAt"
}


registerEnumType(FundTransactionScalarFieldEnum, { name: 'FundTransactionScalarFieldEnum', description: undefined })
