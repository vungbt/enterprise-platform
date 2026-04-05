import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClubFundWhereInput } from './club-fund-where.input';
import { Type } from 'class-transformer';
import { ClubFundOrderByWithRelationInput } from './club-fund-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ClubFundWhereUniqueInput } from './club-fund-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ClubFundScalarFieldEnum } from './club-fund-scalar-field.enum';

@ArgsType()
export class FindFirstClubFundArgs {

    @Field(() => ClubFundWhereInput, {nullable:true})
    @Type(() => ClubFundWhereInput)
    where?: ClubFundWhereInput;

    @Field(() => [ClubFundOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ClubFundOrderByWithRelationInput>;

    @Field(() => ClubFundWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ClubFundWhereUniqueInput, 'id' | 'clubId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ClubFundScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ClubFundScalarFieldEnum}`>;
}
