import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InvoiceCreateWithoutCustomerInput } from './invoice-create-without-customer.input';
import { Type } from 'class-transformer';
import { InvoiceCreateOrConnectWithoutCustomerInput } from './invoice-create-or-connect-without-customer.input';
import { InvoiceCreateManyCustomerInputEnvelope } from './invoice-create-many-customer-input-envelope.input';
import { Prisma } from '@prisma/client';
import { InvoiceWhereUniqueInput } from './invoice-where-unique.input';

@InputType()
export class InvoiceUncheckedCreateNestedManyWithoutCustomerInput {

    @Field(() => [InvoiceCreateWithoutCustomerInput], {nullable:true})
    @Type(() => InvoiceCreateWithoutCustomerInput)
    create?: Array<InvoiceCreateWithoutCustomerInput>;

    @Field(() => [InvoiceCreateOrConnectWithoutCustomerInput], {nullable:true})
    @Type(() => InvoiceCreateOrConnectWithoutCustomerInput)
    connectOrCreate?: Array<InvoiceCreateOrConnectWithoutCustomerInput>;

    @Field(() => InvoiceCreateManyCustomerInputEnvelope, {nullable:true})
    @Type(() => InvoiceCreateManyCustomerInputEnvelope)
    createMany?: InvoiceCreateManyCustomerInputEnvelope;

    @Field(() => [InvoiceWhereUniqueInput], {nullable:true})
    @Type(() => InvoiceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<InvoiceWhereUniqueInput, 'id' | 'code'>>;
}
