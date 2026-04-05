import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerWhereInput } from './customer-where.input';
import { Type } from 'class-transformer';
import { CustomerUpdateWithoutInvoicesInput } from './customer-update-without-invoices.input';

@InputType()
export class CustomerUpdateToOneWithWhereWithoutInvoicesInput {

    @Field(() => CustomerWhereInput, {nullable:true})
    @Type(() => CustomerWhereInput)
    where?: CustomerWhereInput;

    @Field(() => CustomerUpdateWithoutInvoicesInput, {nullable:false})
    @Type(() => CustomerUpdateWithoutInvoicesInput)
    data!: CustomerUpdateWithoutInvoicesInput;
}
