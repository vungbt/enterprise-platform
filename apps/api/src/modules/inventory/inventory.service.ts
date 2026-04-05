import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '@api/shared/database/prisma.service';
import type { PaginationInput } from '@api/shared/graphql/pagination.types';
import type {
  InventoryItemUncheckedCreateInput,
  InventoryItemUncheckedUpdateInput,
} from './inventory.types';

@Injectable()
export class InventoryService {
  constructor(private readonly prisma: PrismaService) {}

  async getItems(pagination?: PaginationInput) {
    const page = Math.max(pagination?.page ?? 1, 1);
    const limit = Math.min(Math.max(pagination?.limit ?? 20, 1), 100);
    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
      this.prisma.inventoryItem.findMany({
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
      }),
      this.prisma.inventoryItem.count(),
    ]);

    return {
      items,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  async getItemById(id: string) {
    const item = await this.prisma.inventoryItem.findUnique({ where: { id } });
    if (!item) {
      throw new NotFoundException(`InventoryItem with id "${id}" not found`);
    }
    return item;
  }

  async createItem(input: InventoryItemUncheckedCreateInput) {
    try {
      return await this.prisma.inventoryItem.create({
        data: input as Prisma.InventoryItemUncheckedCreateInput,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
        const field = (error.meta?.target as string[])?.join(', ');
        throw new ConflictException(`InventoryItem with duplicate ${field} already exists`);
      }
      throw error;
    }
  }

  async updateItem(id: string, input: InventoryItemUncheckedUpdateInput) {
    await this.getItemById(id);
    try {
      return await this.prisma.inventoryItem.update({
        where: { id },
        data: input as Prisma.InventoryItemUncheckedUpdateInput,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
        const field = (error.meta?.target as string[])?.join(', ');
        throw new ConflictException(`InventoryItem with duplicate ${field} already exists`);
      }
      throw error;
    }
  }

  async deleteItem(id: string) {
    await this.getItemById(id);
    await this.prisma.inventoryItem.delete({ where: { id } });
    return true;
  }
}
