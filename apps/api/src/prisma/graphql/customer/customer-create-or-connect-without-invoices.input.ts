import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';
import { Type } from 'class-transformer';
import { CustomerCreateWithoutInvoicesInput } from './customer-create-without-invoices.input';

@InputType()
export class CustomerCreateOrConnectWithoutInvoicesInput {

    @Field(() => CustomerWhereUniqueInput, {nullable:false})
    @Type(() => CustomerWhereUniqueInput)
    where!: Prisma.AtLeast<CustomerWhereUniqueInput, 'id'>;

    @Field(() => CustomerCreateWithoutInvoicesInput, {nullable:false})
    @Type(() => CustomerCreateWithoutInvoicesInput)
    create!: CustomerCreateWithoutInvoicesInput;
}
