import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../shared/database/prisma.service';
import type { CreateInventoryItemInput } from '../dto/create-inventory-item.input';
import type { UpdateInventoryItemInput } from '../dto/update-inventory-item.input';

@Injectable()
export class InventoryRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findItems(pagination: { page: number; limit: number }) {
    const skip = (pagination.page - 1) * pagination.limit;
    const take = pagination.limit;

    const [items, total] = await Promise.all([
      this.prisma.inventoryItem.findMany({
        orderBy: { createdAt: 'desc' },
        skip,
        take,
      }),
      this.prisma.inventoryItem.count(),
    ]);

    return {
      items,
      total,
      page: pagination.page,
      limit: pagination.limit,
      totalPages: Math.ceil(total / pagination.limit),
    };
  }

  findById(id: string) {
    return this.prisma.inventoryItem.findUnique({
      where: { id },
    });
  }

  create(data: CreateInventoryItemInput) {
    return this.prisma.inventoryItem.create({ data });
  }

  update(id: string, data: UpdateInventoryItemInput) {
    return this.prisma.inventoryItem.update({
      where: { id },
      data,
    });
  }

  delete(id: string) {
    return this.prisma.inventoryItem.delete({
      where: { id },
    });
  }
}
