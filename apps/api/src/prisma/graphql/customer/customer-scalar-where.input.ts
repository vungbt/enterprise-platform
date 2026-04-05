import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumCustomerStatusFilter } from '../prisma/enum-customer-status-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class CustomerScalarWhereInput {

    @Field(() => [CustomerScalarWhereInput], {nullable:true})
    AND?: Array<CustomerScalarWhereInput>;

    @Field(() => [CustomerScalarWhereInput], {nullable:true})
    OR?: Array<CustomerScalarWhereInput>;

    @Field(() => [CustomerScalarWhereInput], {nullable:true})
    NOT?: Array<CustomerScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    email?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    phone?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    company?: StringNullableFilter;

    @Field(() => EnumCustomerStatusFilter, {nullable:true})
    status?: EnumCustomerStatusFilter;

    @Field(() => StringFilter, {nullable:true})
    ownerId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
