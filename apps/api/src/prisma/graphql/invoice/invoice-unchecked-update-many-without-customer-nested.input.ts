import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InvoiceCreateWithoutCustomerInput } from './invoice-create-without-customer.input';
import { Type } from 'class-transformer';
import { InvoiceCreateOrConnectWithoutCustomerInput } from './invoice-create-or-connect-without-customer.input';
import { InvoiceUpsertWithWhereUniqueWithoutCustomerInput } from './invoice-upsert-with-where-unique-without-customer.input';
import { InvoiceCreateManyCustomerInputEnvelope } from './invoice-create-many-customer-input-envelope.input';
import { Prisma } from '@prisma/client';
import { InvoiceWhereUniqueInput } from './invoice-where-unique.input';
import { InvoiceUpdateWithWhereUniqueWithoutCustomerInput } from './invoice-update-with-where-unique-without-customer.input';
import { InvoiceUpdateManyWithWhereWithoutCustomerInput } from './invoice-update-many-with-where-without-customer.input';
import { InvoiceScalarWhereInput } from './invoice-scalar-where.input';

@InputType()
export class InvoiceUncheckedUpdateManyWithoutCustomerNestedInput {

    @Field(() => [InvoiceCreateWithoutCustomerInput], {nullable:true})
    @Type(() => InvoiceCreateWithoutCustomerInput)
    create?: Array<InvoiceCreateWithoutCustomerInput>;

    @Field(() => [InvoiceCreateOrConnectWithoutCustomerInput], {nullable:true})
    @Type(() => InvoiceCreateOrConnectWithoutCustomerInput)
    connectOrCreate?: Array<InvoiceCreateOrConnectWithoutCustomerInput>;

    @Field(() => [InvoiceUpsertWithWhereUniqueWithoutCustomerInput], {nullable:true})
    @Type(() => InvoiceUpsertWithWhereUniqueWithoutCustomerInput)
    upsert?: Array<InvoiceUpsertWithWhereUniqueWithoutCustomerInput>;

    @Field(() => InvoiceCreateManyCustomerInputEnvelope, {nullable:true})
    @Type(() => InvoiceCreateManyCustomerInputEnvelope)
    createMany?: InvoiceCreateManyCustomerInputEnvelope;

    @Field(() => [InvoiceWhereUniqueInput], {nullable:true})
    @Type(() => InvoiceWhereUniqueInput)
    set?: Array<Prisma.AtLeast<InvoiceWhereUniqueInput, 'id' | 'code'>>;

    @Field(() => [InvoiceWhereUniqueInput], {nullable:true})
    @Type(() => InvoiceWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<InvoiceWhereUniqueInput, 'id' | 'code'>>;

    @Field(() => [InvoiceWhereUniqueInput], {nullable:true})
    @Type(() => InvoiceWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<InvoiceWhereUniqueInput, 'id' | 'code'>>;

    @Field(() => [InvoiceWhereUniqueInput], {nullable:true})
    @Type(() => InvoiceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<InvoiceWhereUniqueInput, 'id' | 'code'>>;

    @Field(() => [InvoiceUpdateWithWhereUniqueWithoutCustomerInput], {nullable:true})
    @Type(() => InvoiceUpdateWithWhereUniqueWithoutCustomerInput)
    update?: Array<InvoiceUpdateWithWhereUniqueWithoutCustomerInput>;

    @Field(() => [InvoiceUpdateManyWithWhereWithoutCustomerInput], {nullable:true})
    @Type(() => InvoiceUpdateManyWithWhereWithoutCustomerInput)
    updateMany?: Array<InvoiceUpdateManyWithWhereWithoutCustomerInput>;

    @Field(() => [InvoiceScalarWhereInput], {nullable:true})
    @Type(() => InvoiceScalarWhereInput)
    deleteMany?: Array<InvoiceScalarWhereInput>;
}
