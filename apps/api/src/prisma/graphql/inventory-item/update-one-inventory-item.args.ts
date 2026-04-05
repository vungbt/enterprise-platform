import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InventoryItemUpdateInput } from './inventory-item-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { InventoryItemWhereUniqueInput } from './inventory-item-where-unique.input';

@ArgsType()
export class UpdateOneInventoryItemArgs {

    @Field(() => InventoryItemUpdateInput, {nullable:false})
    @Type(() => InventoryItemUpdateInput)
    data!: InventoryItemUpdateInput;

    @Field(() => InventoryItemWhereUniqueInput, {nullable:false})
    @Type(() => InventoryItemWhereUniqueInput)
    where!: Prisma.AtLeast<InventoryItemWhereUniqueInput, 'id' | 'sku'>;
}
