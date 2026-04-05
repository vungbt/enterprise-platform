import { registerEnumType } from '@nestjs/graphql';

export enum EmployeeStatus {
    active = "active",
    resigned = "resigned",
    terminated = "terminated",
    on_leave = "on_leave"
}


registerEnumType(EmployeeStatus, { name: 'EmployeeStatus', description: undefined })
