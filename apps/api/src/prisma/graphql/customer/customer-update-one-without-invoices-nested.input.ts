import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCreateWithoutInvoicesInput } from './customer-create-without-invoices.input';
import { Type } from 'class-transformer';
import { CustomerCreateOrConnectWithoutInvoicesInput } from './customer-create-or-connect-without-invoices.input';
import { CustomerUpsertWithoutInvoicesInput } from './customer-upsert-without-invoices.input';
import { CustomerWhereInput } from './customer-where.input';
import { Prisma } from '@prisma/client';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';
import { CustomerUpdateToOneWithWhereWithoutInvoicesInput } from './customer-update-to-one-with-where-without-invoices.input';

@InputType()
export class CustomerUpdateOneWithoutInvoicesNestedInput {

    @Field(() => CustomerCreateWithoutInvoicesInput, {nullable:true})
    @Type(() => CustomerCreateWithoutInvoicesInput)
    create?: CustomerCreateWithoutInvoicesInput;

    @Field(() => CustomerCreateOrConnectWithoutInvoicesInput, {nullable:true})
    @Type(() => CustomerCreateOrConnectWithoutInvoicesInput)
    connectOrCreate?: CustomerCreateOrConnectWithoutInvoicesInput;

    @Field(() => CustomerUpsertWithoutInvoicesInput, {nullable:true})
    @Type(() => CustomerUpsertWithoutInvoicesInput)
    upsert?: CustomerUpsertWithoutInvoicesInput;

    @Field(() => CustomerWhereInput, {nullable:true})
    @Type(() => CustomerWhereInput)
    disconnect?: CustomerWhereInput;

    @Field(() => CustomerWhereInput, {nullable:true})
    @Type(() => CustomerWhereInput)
    delete?: CustomerWhereInput;

    @Field(() => CustomerWhereUniqueInput, {nullable:true})
    @Type(() => CustomerWhereUniqueInput)
    connect?: Prisma.AtLeast<CustomerWhereUniqueInput, 'id'>;

    @Field(() => CustomerUpdateToOneWithWhereWithoutInvoicesInput, {nullable:true})
    @Type(() => CustomerUpdateToOneWithWhereWithoutInvoicesInput)
    update?: CustomerUpdateToOneWithWhereWithoutInvoicesInput;
}
