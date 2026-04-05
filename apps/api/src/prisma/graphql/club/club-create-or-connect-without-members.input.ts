import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ClubWhereUniqueInput } from './club-where-unique.input';
import { Type } from 'class-transformer';
import { ClubCreateWithoutMembersInput } from './club-create-without-members.input';

@InputType()
export class ClubCreateOrConnectWithoutMembersInput {

    @Field(() => ClubWhereUniqueInput, {nullable:false})
    @Type(() => ClubWhereUniqueInput)
    where!: Prisma.AtLeast<ClubWhereUniqueInput, 'id'>;

    @Field(() => ClubCreateWithoutMembersInput, {nullable:false})
    @Type(() => ClubCreateWithoutMembersInput)
    create!: ClubCreateWithoutMembersInput;
}
