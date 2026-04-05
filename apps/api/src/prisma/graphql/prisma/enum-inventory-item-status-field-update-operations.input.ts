import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InventoryItemStatus } from './inventory-item-status.enum';

@InputType()
export class EnumInventoryItemStatusFieldUpdateOperationsInput {

    @Field(() => InventoryItemStatus, {nullable:true})
    set?: `${InventoryItemStatus}`;
}
