import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../shared/database/prisma.service';

@Injectable()
export class InventoryRepository {
  constructor(private readonly prisma: PrismaService) {}

  findItems() {
    return this.prisma.inventoryItem.findMany({
      orderBy: { createdAt: 'desc' }
    });
  }
}
