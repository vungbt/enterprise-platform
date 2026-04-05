import { registerEnumType } from '@nestjs/graphql';

export enum FundContributionStatus {
    pending = "pending",
    confirmed = "confirmed",
    cancelled = "cancelled"
}


registerEnumType(FundContributionStatus, { name: 'FundContributionStatus', description: undefined })
