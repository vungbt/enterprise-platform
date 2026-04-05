import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { InventoryItemWhereUniqueInput } from './inventory-item-where-unique.input';
import { Type } from 'class-transformer';
import { InventoryItemCreateInput } from './inventory-item-create.input';
import { InventoryItemUpdateInput } from './inventory-item-update.input';

@ArgsType()
export class UpsertOneInventoryItemArgs {

    @Field(() => InventoryItemWhereUniqueInput, {nullable:false})
    @Type(() => InventoryItemWhereUniqueInput)
    where!: Prisma.AtLeast<InventoryItemWhereUniqueInput, 'id' | 'sku'>;

    @Field(() => InventoryItemCreateInput, {nullable:false})
    @Type(() => InventoryItemCreateInput)
    create!: InventoryItemCreateInput;

    @Field(() => InventoryItemUpdateInput, {nullable:false})
    @Type(() => InventoryItemUpdateInput)
    update!: InventoryItemUpdateInput;
}
