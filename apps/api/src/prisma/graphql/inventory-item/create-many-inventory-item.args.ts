import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InventoryItemCreateManyInput } from './inventory-item-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyInventoryItemArgs {

    @Field(() => [InventoryItemCreateManyInput], {nullable:false})
    @Type(() => InventoryItemCreateManyInput)
    data!: Array<InventoryItemCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
