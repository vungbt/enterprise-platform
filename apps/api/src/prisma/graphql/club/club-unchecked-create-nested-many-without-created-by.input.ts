import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubCreateWithoutCreatedByInput } from './club-create-without-created-by.input';
import { Type } from 'class-transformer';
import { ClubCreateOrConnectWithoutCreatedByInput } from './club-create-or-connect-without-created-by.input';
import { ClubCreateManyCreatedByInputEnvelope } from './club-create-many-created-by-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ClubWhereUniqueInput } from './club-where-unique.input';

@InputType()
export class ClubUncheckedCreateNestedManyWithoutCreatedByInput {

    @Field(() => [ClubCreateWithoutCreatedByInput], {nullable:true})
    @Type(() => ClubCreateWithoutCreatedByInput)
    create?: Array<ClubCreateWithoutCreatedByInput>;

    @Field(() => [ClubCreateOrConnectWithoutCreatedByInput], {nullable:true})
    @Type(() => ClubCreateOrConnectWithoutCreatedByInput)
    connectOrCreate?: Array<ClubCreateOrConnectWithoutCreatedByInput>;

    @Field(() => ClubCreateManyCreatedByInputEnvelope, {nullable:true})
    @Type(() => ClubCreateManyCreatedByInputEnvelope)
    createMany?: ClubCreateManyCreatedByInputEnvelope;

    @Field(() => [ClubWhereUniqueInput], {nullable:true})
    @Type(() => ClubWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ClubWhereUniqueInput, 'id'>>;
}
