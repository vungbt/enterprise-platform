import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FundTransactionWhereUniqueInput } from './fund-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { FundTransactionCreateInput } from './fund-transaction-create.input';
import { FundTransactionUpdateInput } from './fund-transaction-update.input';

@ArgsType()
export class UpsertOneFundTransactionArgs {

    @Field(() => FundTransactionWhereUniqueInput, {nullable:false})
    @Type(() => FundTransactionWhereUniqueInput)
    where!: Prisma.AtLeast<FundTransactionWhereUniqueInput, 'id'>;

    @Field(() => FundTransactionCreateInput, {nullable:false})
    @Type(() => FundTransactionCreateInput)
    create!: FundTransactionCreateInput;

    @Field(() => FundTransactionUpdateInput, {nullable:false})
    @Type(() => FundTransactionUpdateInput)
    update!: FundTransactionUpdateInput;
}
