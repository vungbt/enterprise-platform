import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InvoiceWhereInput } from './invoice-where.input';

@InputType()
export class InvoiceListRelationFilter {

    @Field(() => InvoiceWhereInput, {nullable:true})
    every?: InvoiceWhereInput;

    @Field(() => InvoiceWhereInput, {nullable:true})
    some?: InvoiceWhereInput;

    @Field(() => InvoiceWhereInput, {nullable:true})
    none?: InvoiceWhereInput;
}
