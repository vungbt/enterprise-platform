import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClubMemberWhereInput } from './club-member-where.input';
import { Type } from 'class-transformer';
import { ClubMemberOrderByWithRelationInput } from './club-member-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ClubMemberWhereUniqueInput } from './club-member-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ClubMemberScalarFieldEnum } from './club-member-scalar-field.enum';

@ArgsType()
export class FindFirstClubMemberArgs {

    @Field(() => ClubMemberWhereInput, {nullable:true})
    @Type(() => ClubMemberWhereInput)
    where?: ClubMemberWhereInput;

    @Field(() => [ClubMemberOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ClubMemberOrderByWithRelationInput>;

    @Field(() => ClubMemberWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ClubMemberWhereUniqueInput, 'clubId_userId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ClubMemberScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ClubMemberScalarFieldEnum}`>;
}
