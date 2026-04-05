import { registerEnumType } from '@nestjs/graphql';

export enum InventoryItemStatus {
    available = "available",
    low_stock = "low_stock",
    out_of_stock = "out_of_stock",
    discontinued = "discontinued"
}


registerEnumType(InventoryItemStatus, { name: 'InventoryItemStatus', description: undefined })
