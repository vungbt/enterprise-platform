import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { InvoiceWhereUniqueInput } from './invoice-where-unique.input';
import { Type } from 'class-transformer';
import { InvoiceUpdateWithoutCustomerInput } from './invoice-update-without-customer.input';

@InputType()
export class InvoiceUpdateWithWhereUniqueWithoutCustomerInput {

    @Field(() => InvoiceWhereUniqueInput, {nullable:false})
    @Type(() => InvoiceWhereUniqueInput)
    where!: Prisma.AtLeast<InvoiceWhereUniqueInput, 'id' | 'code'>;

    @Field(() => InvoiceUpdateWithoutCustomerInput, {nullable:false})
    @Type(() => InvoiceUpdateWithoutCustomerInput)
    data!: InvoiceUpdateWithoutCustomerInput;
}
