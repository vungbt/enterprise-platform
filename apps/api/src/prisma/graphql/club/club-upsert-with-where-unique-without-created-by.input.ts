import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ClubWhereUniqueInput } from './club-where-unique.input';
import { Type } from 'class-transformer';
import { ClubUpdateWithoutCreatedByInput } from './club-update-without-created-by.input';
import { ClubCreateWithoutCreatedByInput } from './club-create-without-created-by.input';

@InputType()
export class ClubUpsertWithWhereUniqueWithoutCreatedByInput {

    @Field(() => ClubWhereUniqueInput, {nullable:false})
    @Type(() => ClubWhereUniqueInput)
    where!: Prisma.AtLeast<ClubWhereUniqueInput, 'id'>;

    @Field(() => ClubUpdateWithoutCreatedByInput, {nullable:false})
    @Type(() => ClubUpdateWithoutCreatedByInput)
    update!: ClubUpdateWithoutCreatedByInput;

    @Field(() => ClubCreateWithoutCreatedByInput, {nullable:false})
    @Type(() => ClubCreateWithoutCreatedByInput)
    create!: ClubCreateWithoutCreatedByInput;
}
