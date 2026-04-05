import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { InventoryItemStatus } from '../prisma/inventory-item-status.enum';

@InputType()
export class InventoryItemUncheckedUpdateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    sku?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    category?: string;

    @Field(() => Int, {nullable:true})
    stock?: number;

    @Field(() => Int, {nullable:true})
    minStock?: number;

    @Field(() => String, {nullable:true})
    unit?: string;

    @Field(() => Float, {nullable:true})
    price?: number;

    @Field(() => InventoryItemStatus, {nullable:true})
    status?: `${InventoryItemStatus}`;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
