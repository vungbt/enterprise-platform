import { registerEnumType } from '@nestjs/graphql';

export enum ClubMemberRole {
    captain = "captain",
    coach = "coach",
    member = "member"
}


registerEnumType(ClubMemberRole, { name: 'ClubMemberRole', description: undefined })
