import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { EnumInventoryItemStatusFilter } from '../prisma/enum-inventory-item-status-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class InventoryItemWhereInput {

    @Field(() => [InventoryItemWhereInput], {nullable:true})
    AND?: Array<InventoryItemWhereInput>;

    @Field(() => [InventoryItemWhereInput], {nullable:true})
    OR?: Array<InventoryItemWhereInput>;

    @Field(() => [InventoryItemWhereInput], {nullable:true})
    NOT?: Array<InventoryItemWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    sku?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    category?: StringNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    stock?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    minStock?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    unit?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    price?: FloatFilter;

    @Field(() => EnumInventoryItemStatusFilter, {nullable:true})
    status?: EnumInventoryItemStatusFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
