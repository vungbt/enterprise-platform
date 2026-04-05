import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { InvoiceStatus } from '../prisma/invoice-status.enum';
import { InvoiceCountAggregate } from './invoice-count-aggregate.output';
import { InvoiceAvgAggregate } from './invoice-avg-aggregate.output';
import { InvoiceSumAggregate } from './invoice-sum-aggregate.output';
import { InvoiceMinAggregate } from './invoice-min-aggregate.output';
import { InvoiceMaxAggregate } from './invoice-max-aggregate.output';

@ObjectType()
export class InvoiceGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => Float, {nullable:false})
    amount!: number;

    @Field(() => Float, {nullable:false})
    tax!: number;

    @Field(() => Float, {nullable:false})
    total!: number;

    @Field(() => InvoiceStatus, {nullable:false})
    status!: `${InvoiceStatus}`;

    @Field(() => Date, {nullable:true})
    dueDate?: Date | string;

    @Field(() => Date, {nullable:true})
    issuedAt?: Date | string;

    @Field(() => String, {nullable:true})
    customerId?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => InvoiceCountAggregate, {nullable:true})
    _count?: InvoiceCountAggregate;

    @Field(() => InvoiceAvgAggregate, {nullable:true})
    _avg?: InvoiceAvgAggregate;

    @Field(() => InvoiceSumAggregate, {nullable:true})
    _sum?: InvoiceSumAggregate;

    @Field(() => InvoiceMinAggregate, {nullable:true})
    _min?: InvoiceMinAggregate;

    @Field(() => InvoiceMaxAggregate, {nullable:true})
    _max?: InvoiceMaxAggregate;
}
