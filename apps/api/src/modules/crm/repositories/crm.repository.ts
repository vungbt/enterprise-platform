import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../shared/database/prisma.service';

@Injectable()
export class CrmRepository {
  constructor(private readonly prisma: PrismaService) {}

  findCustomers() {
    return this.prisma.customer.findMany({
      orderBy: { createdAt: 'desc' }
    });
  }
}
