import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FundTransactionWhereInput } from './fund-transaction-where.input';
import { Type } from 'class-transformer';
import { FundTransactionOrderByWithRelationInput } from './fund-transaction-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { FundTransactionWhereUniqueInput } from './fund-transaction-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FundTransactionScalarFieldEnum } from './fund-transaction-scalar-field.enum';

@ArgsType()
export class FindFirstFundTransactionOrThrowArgs {

    @Field(() => FundTransactionWhereInput, {nullable:true})
    @Type(() => FundTransactionWhereInput)
    where?: FundTransactionWhereInput;

    @Field(() => [FundTransactionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FundTransactionOrderByWithRelationInput>;

    @Field(() => FundTransactionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<FundTransactionWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [FundTransactionScalarFieldEnum], {nullable:true})
    distinct?: Array<`${FundTransactionScalarFieldEnum}`>;
}
