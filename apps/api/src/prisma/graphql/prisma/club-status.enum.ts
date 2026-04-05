import { registerEnumType } from '@nestjs/graphql';

export enum ClubStatus {
    active = "active",
    inactive = "inactive"
}


registerEnumType(ClubStatus, { name: 'ClubStatus', description: undefined })
