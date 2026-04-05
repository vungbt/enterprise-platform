import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InvoiceWhereInput } from './invoice-where.input';
import { Type } from 'class-transformer';
import { InvoiceOrderByWithRelationInput } from './invoice-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { InvoiceWhereUniqueInput } from './invoice-where-unique.input';
import { Int } from '@nestjs/graphql';
import { InvoiceCountAggregateInput } from './invoice-count-aggregate.input';
import { InvoiceAvgAggregateInput } from './invoice-avg-aggregate.input';
import { InvoiceSumAggregateInput } from './invoice-sum-aggregate.input';
import { InvoiceMinAggregateInput } from './invoice-min-aggregate.input';
import { InvoiceMaxAggregateInput } from './invoice-max-aggregate.input';

@ArgsType()
export class InvoiceAggregateArgs {

    @Field(() => InvoiceWhereInput, {nullable:true})
    @Type(() => InvoiceWhereInput)
    where?: InvoiceWhereInput;

    @Field(() => [InvoiceOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<InvoiceOrderByWithRelationInput>;

    @Field(() => InvoiceWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<InvoiceWhereUniqueInput, 'id' | 'code'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => InvoiceCountAggregateInput, {nullable:true})
    _count?: InvoiceCountAggregateInput;

    @Field(() => InvoiceAvgAggregateInput, {nullable:true})
    _avg?: InvoiceAvgAggregateInput;

    @Field(() => InvoiceSumAggregateInput, {nullable:true})
    _sum?: InvoiceSumAggregateInput;

    @Field(() => InvoiceMinAggregateInput, {nullable:true})
    _min?: InvoiceMinAggregateInput;

    @Field(() => InvoiceMaxAggregateInput, {nullable:true})
    _max?: InvoiceMaxAggregateInput;
}
