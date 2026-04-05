import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '@api/shared/database/prisma.service';
import type { PaginationInput } from '@api/shared/graphql/pagination.types';
import type { InvoiceUncheckedCreateInput, InvoiceUncheckedUpdateInput } from './finance.types';

@Injectable()
export class FinanceService {
  constructor(private readonly prisma: PrismaService) {}

  async getInvoices(pagination?: PaginationInput) {
    const page = Math.max(pagination?.page ?? 1, 1);
    const limit = Math.min(Math.max(pagination?.limit ?? 20, 1), 100);
    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
      this.prisma.invoice.findMany({
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
      }),
      this.prisma.invoice.count(),
    ]);

    return {
      items,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  async getInvoiceById(id: string) {
    const invoice = await this.prisma.invoice.findUnique({ where: { id } });
    if (!invoice) {
      throw new NotFoundException(`Invoice with id "${id}" not found`);
    }
    return invoice;
  }

  async createInvoice(input: InvoiceUncheckedCreateInput) {
    try {
      return await this.prisma.invoice.create({
        data: input as Prisma.InvoiceUncheckedCreateInput,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
        const field = (error.meta?.target as string[])?.join(', ');
        throw new ConflictException(`Invoice with duplicate ${field} already exists`);
      }
      throw error;
    }
  }

  async updateInvoice(id: string, input: InvoiceUncheckedUpdateInput) {
    await this.getInvoiceById(id);
    try {
      return await this.prisma.invoice.update({
        where: { id },
        data: input as Prisma.InvoiceUncheckedUpdateInput,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
        const field = (error.meta?.target as string[])?.join(', ');
        throw new ConflictException(`Invoice with duplicate ${field} already exists`);
      }
      throw error;
    }
  }

  async deleteInvoice(id: string) {
    await this.getInvoiceById(id);
    await this.prisma.invoice.delete({ where: { id } });
    return true;
  }

  getCustomerForInvoice(customerId: string) {
    return this.prisma.customer.findUnique({ where: { id: customerId } });
  }
}
