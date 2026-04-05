import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ClubWhereUniqueInput } from './club-where-unique.input';
import { Type } from 'class-transformer';
import { ClubCreateWithoutCreatedByInput } from './club-create-without-created-by.input';

@InputType()
export class ClubCreateOrConnectWithoutCreatedByInput {

    @Field(() => ClubWhereUniqueInput, {nullable:false})
    @Type(() => ClubWhereUniqueInput)
    where!: Prisma.AtLeast<ClubWhereUniqueInput, 'id'>;

    @Field(() => ClubCreateWithoutCreatedByInput, {nullable:false})
    @Type(() => ClubCreateWithoutCreatedByInput)
    create!: ClubCreateWithoutCreatedByInput;
}
