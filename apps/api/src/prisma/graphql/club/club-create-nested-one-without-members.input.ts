import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubCreateWithoutMembersInput } from './club-create-without-members.input';
import { Type } from 'class-transformer';
import { ClubCreateOrConnectWithoutMembersInput } from './club-create-or-connect-without-members.input';
import { Prisma } from '@prisma/client';
import { ClubWhereUniqueInput } from './club-where-unique.input';

@InputType()
export class ClubCreateNestedOneWithoutMembersInput {

    @Field(() => ClubCreateWithoutMembersInput, {nullable:true})
    @Type(() => ClubCreateWithoutMembersInput)
    create?: ClubCreateWithoutMembersInput;

    @Field(() => ClubCreateOrConnectWithoutMembersInput, {nullable:true})
    @Type(() => ClubCreateOrConnectWithoutMembersInput)
    connectOrCreate?: ClubCreateOrConnectWithoutMembersInput;

    @Field(() => ClubWhereUniqueInput, {nullable:true})
    @Type(() => ClubWhereUniqueInput)
    connect?: Prisma.AtLeast<ClubWhereUniqueInput, 'id'>;
}
