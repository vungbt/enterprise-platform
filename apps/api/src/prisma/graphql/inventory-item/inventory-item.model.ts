import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { InventoryItemStatus } from '../prisma/inventory-item-status.enum';

@ObjectType()
export class InventoryItem {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    sku!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    category!: string | null;

    @Field(() => Int, {defaultValue:0,nullable:false})
    stock!: number;

    @Field(() => Int, {defaultValue:0,nullable:false})
    minStock!: number;

    @Field(() => String, {defaultValue:'pcs',nullable:false})
    unit!: string;

    @Field(() => Float, {defaultValue:0,nullable:false})
    price!: number;

    @Field(() => InventoryItemStatus, {defaultValue:'available',nullable:false})
    status!: `${InventoryItemStatus}`;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}
