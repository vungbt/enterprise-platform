import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClubWhereInput } from './club-where.input';
import { Type } from 'class-transformer';
import { ClubOrderByWithRelationInput } from './club-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ClubWhereUniqueInput } from './club-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ClubScalarFieldEnum } from './club-scalar-field.enum';

@ArgsType()
export class FindManyClubArgs {

    @Field(() => ClubWhereInput, {nullable:true})
    @Type(() => ClubWhereInput)
    where?: ClubWhereInput;

    @Field(() => [ClubOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ClubOrderByWithRelationInput>;

    @Field(() => ClubWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ClubWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ClubScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ClubScalarFieldEnum}`>;
}
