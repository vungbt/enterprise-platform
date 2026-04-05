import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCreateWithoutInvoicesInput } from './customer-create-without-invoices.input';
import { Type } from 'class-transformer';
import { CustomerCreateOrConnectWithoutInvoicesInput } from './customer-create-or-connect-without-invoices.input';
import { Prisma } from '@prisma/client';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';

@InputType()
export class CustomerCreateNestedOneWithoutInvoicesInput {

    @Field(() => CustomerCreateWithoutInvoicesInput, {nullable:true})
    @Type(() => CustomerCreateWithoutInvoicesInput)
    create?: CustomerCreateWithoutInvoicesInput;

    @Field(() => CustomerCreateOrConnectWithoutInvoicesInput, {nullable:true})
    @Type(() => CustomerCreateOrConnectWithoutInvoicesInput)
    connectOrCreate?: CustomerCreateOrConnectWithoutInvoicesInput;

    @Field(() => CustomerWhereUniqueInput, {nullable:true})
    @Type(() => CustomerWhereUniqueInput)
    connect?: Prisma.AtLeast<CustomerWhereUniqueInput, 'id'>;
}
