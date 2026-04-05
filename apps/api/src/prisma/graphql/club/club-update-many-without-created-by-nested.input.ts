import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubCreateWithoutCreatedByInput } from './club-create-without-created-by.input';
import { Type } from 'class-transformer';
import { ClubCreateOrConnectWithoutCreatedByInput } from './club-create-or-connect-without-created-by.input';
import { ClubUpsertWithWhereUniqueWithoutCreatedByInput } from './club-upsert-with-where-unique-without-created-by.input';
import { ClubCreateManyCreatedByInputEnvelope } from './club-create-many-created-by-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ClubWhereUniqueInput } from './club-where-unique.input';
import { ClubUpdateWithWhereUniqueWithoutCreatedByInput } from './club-update-with-where-unique-without-created-by.input';
import { ClubUpdateManyWithWhereWithoutCreatedByInput } from './club-update-many-with-where-without-created-by.input';
import { ClubScalarWhereInput } from './club-scalar-where.input';

@InputType()
export class ClubUpdateManyWithoutCreatedByNestedInput {

    @Field(() => [ClubCreateWithoutCreatedByInput], {nullable:true})
    @Type(() => ClubCreateWithoutCreatedByInput)
    create?: Array<ClubCreateWithoutCreatedByInput>;

    @Field(() => [ClubCreateOrConnectWithoutCreatedByInput], {nullable:true})
    @Type(() => ClubCreateOrConnectWithoutCreatedByInput)
    connectOrCreate?: Array<ClubCreateOrConnectWithoutCreatedByInput>;

    @Field(() => [ClubUpsertWithWhereUniqueWithoutCreatedByInput], {nullable:true})
    @Type(() => ClubUpsertWithWhereUniqueWithoutCreatedByInput)
    upsert?: Array<ClubUpsertWithWhereUniqueWithoutCreatedByInput>;

    @Field(() => ClubCreateManyCreatedByInputEnvelope, {nullable:true})
    @Type(() => ClubCreateManyCreatedByInputEnvelope)
    createMany?: ClubCreateManyCreatedByInputEnvelope;

    @Field(() => [ClubWhereUniqueInput], {nullable:true})
    @Type(() => ClubWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ClubWhereUniqueInput, 'id'>>;

    @Field(() => [ClubWhereUniqueInput], {nullable:true})
    @Type(() => ClubWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ClubWhereUniqueInput, 'id'>>;

    @Field(() => [ClubWhereUniqueInput], {nullable:true})
    @Type(() => ClubWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ClubWhereUniqueInput, 'id'>>;

    @Field(() => [ClubWhereUniqueInput], {nullable:true})
    @Type(() => ClubWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ClubWhereUniqueInput, 'id'>>;

    @Field(() => [ClubUpdateWithWhereUniqueWithoutCreatedByInput], {nullable:true})
    @Type(() => ClubUpdateWithWhereUniqueWithoutCreatedByInput)
    update?: Array<ClubUpdateWithWhereUniqueWithoutCreatedByInput>;

    @Field(() => [ClubUpdateManyWithWhereWithoutCreatedByInput], {nullable:true})
    @Type(() => ClubUpdateManyWithWhereWithoutCreatedByInput)
    updateMany?: Array<ClubUpdateManyWithWhereWithoutCreatedByInput>;

    @Field(() => [ClubScalarWhereInput], {nullable:true})
    @Type(() => ClubScalarWhereInput)
    deleteMany?: Array<ClubScalarWhereInput>;
}
