import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { InventoryRepository } from '../repositories/inventory.repository';
import { CreateInventoryItemInput } from '../dto/create-inventory-item.input';
import { UpdateInventoryItemInput } from '../dto/update-inventory-item.input';
import { PaginationInput } from '../../../shared/graphql/pagination.types';

@Injectable()
export class InventoryService {
  constructor(private readonly inventoryRepository: InventoryRepository) {}

  getItems(pagination?: PaginationInput) {
    const page = Math.max(pagination?.page ?? 1, 1);
    const limit = Math.min(Math.max(pagination?.limit ?? 20, 1), 100);
    return this.inventoryRepository.findItems({ page, limit });
  }

  async getItemById(id: string) {
    const item = await this.inventoryRepository.findById(id);
    if (!item) {
      throw new NotFoundException(`InventoryItem with id "${id}" not found`);
    }
    return item;
  }

  async createItem(input: CreateInventoryItemInput) {
    try {
      return await this.inventoryRepository.create(input);
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        const field = (error.meta?.target as string[])?.join(', ');
        throw new ConflictException(
          `InventoryItem with duplicate ${field} already exists`,
        );
      }
      throw error;
    }
  }

  async updateItem(id: string, input: UpdateInventoryItemInput) {
    await this.getItemById(id);
    try {
      return await this.inventoryRepository.update(id, input);
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        const field = (error.meta?.target as string[])?.join(', ');
        throw new ConflictException(
          `InventoryItem with duplicate ${field} already exists`,
        );
      }
      throw error;
    }
  }

  async deleteItem(id: string) {
    await this.getItemById(id);
    await this.inventoryRepository.delete(id);
    return true;
  }
}
