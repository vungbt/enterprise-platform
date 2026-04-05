import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InventoryItemWhereInput } from './inventory-item-where.input';
import { Type } from 'class-transformer';
import { InventoryItemOrderByWithRelationInput } from './inventory-item-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { InventoryItemWhereUniqueInput } from './inventory-item-where-unique.input';
import { Int } from '@nestjs/graphql';
import { InventoryItemScalarFieldEnum } from './inventory-item-scalar-field.enum';

@ArgsType()
export class FindManyInventoryItemArgs {

    @Field(() => InventoryItemWhereInput, {nullable:true})
    @Type(() => InventoryItemWhereInput)
    where?: InventoryItemWhereInput;

    @Field(() => [InventoryItemOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<InventoryItemOrderByWithRelationInput>;

    @Field(() => InventoryItemWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<InventoryItemWhereUniqueInput, 'id' | 'sku'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [InventoryItemScalarFieldEnum], {nullable:true})
    distinct?: Array<`${InventoryItemScalarFieldEnum}`>;
}
