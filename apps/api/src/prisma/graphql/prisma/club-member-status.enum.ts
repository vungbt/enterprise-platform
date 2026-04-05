import { registerEnumType } from '@nestjs/graphql';

export enum ClubMemberStatus {
    active = "active",
    left = "left",
    banned = "banned"
}


registerEnumType(ClubMemberStatus, { name: 'ClubMemberStatus', description: undefined })
