import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InvoiceWhereInput } from './invoice-where.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { EnumInvoiceStatusFilter } from '../prisma/enum-invoice-status-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { CustomerNullableScalarRelationFilter } from '../customer/customer-nullable-scalar-relation-filter.input';

@InputType()
export class InvoiceWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    code?: string;

    @Field(() => [InvoiceWhereInput], {nullable:true})
    AND?: Array<InvoiceWhereInput>;

    @Field(() => [InvoiceWhereInput], {nullable:true})
    OR?: Array<InvoiceWhereInput>;

    @Field(() => [InvoiceWhereInput], {nullable:true})
    NOT?: Array<InvoiceWhereInput>;

    @Field(() => FloatFilter, {nullable:true})
    amount?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    tax?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    total?: FloatFilter;

    @Field(() => EnumInvoiceStatusFilter, {nullable:true})
    status?: EnumInvoiceStatusFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    dueDate?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    issuedAt?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    customerId?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => CustomerNullableScalarRelationFilter, {nullable:true})
    customer?: CustomerNullableScalarRelationFilter;
}
