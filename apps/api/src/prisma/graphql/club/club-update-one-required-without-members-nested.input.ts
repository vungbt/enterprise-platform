import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubCreateWithoutMembersInput } from './club-create-without-members.input';
import { Type } from 'class-transformer';
import { ClubCreateOrConnectWithoutMembersInput } from './club-create-or-connect-without-members.input';
import { ClubUpsertWithoutMembersInput } from './club-upsert-without-members.input';
import { Prisma } from '@prisma/client';
import { ClubWhereUniqueInput } from './club-where-unique.input';
import { ClubUpdateToOneWithWhereWithoutMembersInput } from './club-update-to-one-with-where-without-members.input';

@InputType()
export class ClubUpdateOneRequiredWithoutMembersNestedInput {

    @Field(() => ClubCreateWithoutMembersInput, {nullable:true})
    @Type(() => ClubCreateWithoutMembersInput)
    create?: ClubCreateWithoutMembersInput;

    @Field(() => ClubCreateOrConnectWithoutMembersInput, {nullable:true})
    @Type(() => ClubCreateOrConnectWithoutMembersInput)
    connectOrCreate?: ClubCreateOrConnectWithoutMembersInput;

    @Field(() => ClubUpsertWithoutMembersInput, {nullable:true})
    @Type(() => ClubUpsertWithoutMembersInput)
    upsert?: ClubUpsertWithoutMembersInput;

    @Field(() => ClubWhereUniqueInput, {nullable:true})
    @Type(() => ClubWhereUniqueInput)
    connect?: Prisma.AtLeast<ClubWhereUniqueInput, 'id'>;

    @Field(() => ClubUpdateToOneWithWhereWithoutMembersInput, {nullable:true})
    @Type(() => ClubUpdateToOneWithWhereWithoutMembersInput)
    update?: ClubUpdateToOneWithWhereWithoutMembersInput;
}
