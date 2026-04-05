import { registerEnumType } from '@nestjs/graphql';

export enum ClubFundScalarFieldEnum {
    id = "id",
    clubId = "clubId",
    name = "name",
    initialBalance = "initialBalance",
    description = "description",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    deletedAt = "deletedAt"
}


registerEnumType(ClubFundScalarFieldEnum, { name: 'ClubFundScalarFieldEnum', description: undefined })
