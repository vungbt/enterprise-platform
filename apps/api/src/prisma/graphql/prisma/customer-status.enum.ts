import { registerEnumType } from '@nestjs/graphql';

export enum CustomerStatus {
    prospect = "prospect",
    active = "active",
    inactive = "inactive",
    churned = "churned"
}


registerEnumType(CustomerStatus, { name: 'CustomerStatus', description: undefined })
