import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerUpdateWithoutInvoicesInput } from './customer-update-without-invoices.input';
import { Type } from 'class-transformer';
import { CustomerCreateWithoutInvoicesInput } from './customer-create-without-invoices.input';
import { CustomerWhereInput } from './customer-where.input';

@InputType()
export class CustomerUpsertWithoutInvoicesInput {

    @Field(() => CustomerUpdateWithoutInvoicesInput, {nullable:false})
    @Type(() => CustomerUpdateWithoutInvoicesInput)
    update!: CustomerUpdateWithoutInvoicesInput;

    @Field(() => CustomerCreateWithoutInvoicesInput, {nullable:false})
    @Type(() => CustomerCreateWithoutInvoicesInput)
    create!: CustomerCreateWithoutInvoicesInput;

    @Field(() => CustomerWhereInput, {nullable:true})
    @Type(() => CustomerWhereInput)
    where?: CustomerWhereInput;
}
