import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { InventoryItemWhereUniqueInput } from './inventory-item-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneInventoryItemArgs {

    @Field(() => InventoryItemWhereUniqueInput, {nullable:false})
    @Type(() => InventoryItemWhereUniqueInput)
    where!: Prisma.AtLeast<InventoryItemWhereUniqueInput, 'id' | 'sku'>;
}
