import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InventoryItemWhereInput } from './inventory-item-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyInventoryItemArgs {

    @Field(() => InventoryItemWhereInput, {nullable:true})
    @Type(() => InventoryItemWhereInput)
    where?: InventoryItemWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
