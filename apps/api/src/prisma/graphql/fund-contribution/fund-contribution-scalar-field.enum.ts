import { registerEnumType } from '@nestjs/graphql';

export enum FundContributionScalarFieldEnum {
    id = "id",
    fundId = "fundId",
    memberId = "memberId",
    month = "month",
    year = "year",
    amount = "amount",
    note = "note",
    paidAt = "paidAt",
    status = "status",
    confirmedBy = "confirmedBy",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(FundContributionScalarFieldEnum, { name: 'FundContributionScalarFieldEnum', description: undefined })
