import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InventoryItemStatus } from './inventory-item-status.enum';

@InputType()
export class NestedEnumInventoryItemStatusFilter {

    @Field(() => InventoryItemStatus, {nullable:true})
    equals?: `${InventoryItemStatus}`;

    @Field(() => [InventoryItemStatus], {nullable:true})
    in?: Array<`${InventoryItemStatus}`>;

    @Field(() => [InventoryItemStatus], {nullable:true})
    notIn?: Array<`${InventoryItemStatus}`>;

    @Field(() => NestedEnumInventoryItemStatusFilter, {nullable:true})
    not?: NestedEnumInventoryItemStatusFilter;
}
