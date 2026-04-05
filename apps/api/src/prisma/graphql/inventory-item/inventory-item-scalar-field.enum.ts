import { registerEnumType } from '@nestjs/graphql';

export enum InventoryItemScalarFieldEnum {
    id = "id",
    sku = "sku",
    name = "name",
    category = "category",
    stock = "stock",
    minStock = "minStock",
    unit = "unit",
    price = "price",
    status = "status",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(InventoryItemScalarFieldEnum, { name: 'InventoryItemScalarFieldEnum', description: undefined })
