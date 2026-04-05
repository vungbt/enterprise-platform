import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { EnumInvoiceStatusFilter } from '../prisma/enum-invoice-status-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class InvoiceScalarWhereInput {

    @Field(() => [InvoiceScalarWhereInput], {nullable:true})
    AND?: Array<InvoiceScalarWhereInput>;

    @Field(() => [InvoiceScalarWhereInput], {nullable:true})
    OR?: Array<InvoiceScalarWhereInput>;

    @Field(() => [InvoiceScalarWhereInput], {nullable:true})
    NOT?: Array<InvoiceScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    code?: StringFilter;

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
}
