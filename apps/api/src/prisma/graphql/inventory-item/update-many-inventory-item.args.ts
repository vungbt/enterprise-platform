import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InventoryItemUpdateManyMutationInput } from './inventory-item-update-many-mutation.input';
import { Type } from 'class-transformer';
import { InventoryItemWhereInput } from './inventory-item-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyInventoryItemArgs {

    @Field(() => InventoryItemUpdateManyMutationInput, {nullable:false})
    @Type(() => InventoryItemUpdateManyMutationInput)
    data!: InventoryItemUpdateManyMutationInput;

    @Field(() => InventoryItemWhereInput, {nullable:true})
    @Type(() => InventoryItemWhereInput)
    where?: InventoryItemWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
