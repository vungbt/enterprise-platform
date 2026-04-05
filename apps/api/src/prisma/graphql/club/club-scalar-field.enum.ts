import { registerEnumType } from '@nestjs/graphql';

export enum ClubScalarFieldEnum {
    id = "id",
    name = "name",
    sport = "sport",
    description = "description",
    status = "status",
    foundedAt = "foundedAt",
    createdById = "createdById",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    deletedAt = "deletedAt"
}


registerEnumType(ClubScalarFieldEnum, { name: 'ClubScalarFieldEnum', description: undefined })
