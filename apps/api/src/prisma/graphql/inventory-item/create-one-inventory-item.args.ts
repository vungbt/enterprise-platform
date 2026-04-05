import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InventoryItemCreateInput } from './inventory-item-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneInventoryItemArgs {

    @Field(() => InventoryItemCreateInput, {nullable:false})
    @Type(() => InventoryItemCreateInput)
    data!: InventoryItemCreateInput;
}
