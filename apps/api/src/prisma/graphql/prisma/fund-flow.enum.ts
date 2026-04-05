import { registerEnumType } from '@nestjs/graphql';

export enum FundFlow {
    inflow = "inflow",
    outflow = "outflow"
}


registerEnumType(FundFlow, { name: 'FundFlow', description: undefined })
