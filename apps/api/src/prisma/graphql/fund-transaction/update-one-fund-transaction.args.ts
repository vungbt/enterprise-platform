import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FundTransactionUpdateInput } from './fund-transaction-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { FundTransactionWhereUniqueInput } from './fund-transaction-where-unique.input';

@ArgsType()
export class UpdateOneFundTransactionArgs {

    @Field(() => FundTransactionUpdateInput, {nullable:false})
    @Type(() => FundTransactionUpdateInput)
    data!: FundTransactionUpdateInput;

    @Field(() => FundTransactionWhereUniqueInput, {nullable:false})
    @Type(() => FundTransactionWhereUniqueInput)
    where!: Prisma.AtLeast<FundTransactionWhereUniqueInput, 'id'>;
}
