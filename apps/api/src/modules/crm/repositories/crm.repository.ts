import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../shared/database/prisma.service';
import type { CreateCustomerInput } from '../dto/create-customer.input';
import type { UpdateCustomerInput } from '../dto/update-customer.input';

@Injectable()
export class CrmRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findCustomers(pagination: { page: number; limit: number }) {
    const skip = (pagination.page - 1) * pagination.limit;
    const take = pagination.limit;

    const [items, total] = await Promise.all([
      this.prisma.customer.findMany({
        orderBy: { createdAt: 'desc' },
        skip,
        take,
      }),
      this.prisma.customer.count(),
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
    return this.prisma.customer.findUnique({
      where: { id },
    });
  }

  create(data: CreateCustomerInput) {
    return this.prisma.customer.create({ data });
  }

  update(id: string, data: UpdateCustomerInput) {
    return this.prisma.customer.update({
      where: { id },
      data,
    });
  }

  delete(id: string) {
    return this.prisma.customer.delete({
      where: { id },
    });
  }

  findUserById(userId: string) {
    return this.prisma.user.findUnique({
      where: { id: userId },
    });
  }

  findInvoicesByCustomerId(customerId: string) {
    return this.prisma.invoice.findMany({
      where: { customerId },
    });
  }
}
