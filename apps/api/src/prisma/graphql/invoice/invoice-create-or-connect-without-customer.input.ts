import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { InvoiceWhereUniqueInput } from './invoice-where-unique.input';
import { Type } from 'class-transformer';
import { InvoiceCreateWithoutCustomerInput } from './invoice-create-without-customer.input';

@InputType()
export class InvoiceCreateOrConnectWithoutCustomerInput {

    @Field(() => InvoiceWhereUniqueInput, {nullable:false})
    @Type(() => InvoiceWhereUniqueInput)
    where!: Prisma.AtLeast<InvoiceWhereUniqueInput, 'id' | 'code'>;

    @Field(() => InvoiceCreateWithoutCustomerInput, {nullable:false})
    @Type(() => InvoiceCreateWithoutCustomerInput)
    create!: InvoiceCreateWithoutCustomerInput;
}
