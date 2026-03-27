import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../shared/database/prisma.service';

@Injectable()
export class FinanceRepository {
  constructor(private readonly prisma: PrismaService) {}

  findInvoices() {
    return this.prisma.invoice.findMany({
      orderBy: { createdAt: 'desc' }
    });
  }
}
