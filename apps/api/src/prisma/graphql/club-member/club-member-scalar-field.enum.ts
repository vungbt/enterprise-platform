import { registerEnumType } from '@nestjs/graphql';

export enum ClubMemberScalarFieldEnum {
    clubId = "clubId",
    userId = "userId",
    role = "role",
    status = "status",
    joinedAt = "joinedAt",
    leftAt = "leftAt"
}


registerEnumType(ClubMemberScalarFieldEnum, { name: 'ClubMemberScalarFieldEnum', description: undefined })
