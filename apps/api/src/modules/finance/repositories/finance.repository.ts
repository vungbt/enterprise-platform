import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../shared/database/prisma.service';
import { CreateInvoiceInput } from '../dto/create-invoice.input';
import { UpdateInvoiceInput } from '../dto/update-invoice.input';

@Injectable()
export class FinanceRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findInvoices(pagination: { page: number; limit: number }) {
    const skip = (pagination.page - 1) * pagination.limit;
    const take = pagination.limit;

    const [items, total] = await Promise.all([
      this.prisma.invoice.findMany({
        orderBy: { createdAt: 'desc' },
        skip,
        take,
      }),
      this.prisma.invoice.count(),
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
    return this.prisma.invoice.findUnique({
      where: { id },
    });
  }

  create(data: CreateInvoiceInput) {
    return this.prisma.invoice.create({ data });
  }

  update(id: string, data: UpdateInvoiceInput) {
    return this.prisma.invoice.update({
      where: { id },
      data,
    });
  }

  delete(id: string) {
    return this.prisma.invoice.delete({
      where: { id },
    });
  }

  findCustomerById(customerId: string) {
    return this.prisma.customer.findUnique({
      where: { id: customerId },
    });
  }
}
