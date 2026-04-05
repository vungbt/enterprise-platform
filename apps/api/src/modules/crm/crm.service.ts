import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '@api/shared/database/prisma.service';
import type { PaginationInput } from '@api/shared/graphql/pagination.types';
import type { CustomerUncheckedCreateInput, CustomerUncheckedUpdateInput } from './crm.types';

@Injectable()
export class CrmService {
  constructor(private readonly prisma: PrismaService) {}

  async getCustomers(pagination?: PaginationInput) {
    const page = Math.max(pagination?.page ?? 1, 1);
    const limit = Math.min(Math.max(pagination?.limit ?? 20, 1), 100);
    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
      this.prisma.customer.findMany({
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
      }),
      this.prisma.customer.count(),
    ]);

    return {
      items,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  async getCustomerById(id: string) {
    const customer = await this.prisma.customer.findUnique({ where: { id } });
    if (!customer) {
      throw new NotFoundException(`Customer with id "${id}" not found`);
    }
    return customer;
  }

  async createCustomer(input: CustomerUncheckedCreateInput) {
    try {
      return await this.prisma.customer.create({
        data: input as Prisma.CustomerUncheckedCreateInput,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
        const field = (error.meta?.target as string[])?.join(', ');
        throw new ConflictException(`Customer with duplicate ${field} already exists`);
      }
      throw error;
    }
  }

  async updateCustomer(id: string, input: CustomerUncheckedUpdateInput) {
    await this.getCustomerById(id);
    try {
      return await this.prisma.customer.update({
        where: { id },
        data: input as Prisma.CustomerUncheckedUpdateInput,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
        const field = (error.meta?.target as string[])?.join(', ');
        throw new ConflictException(`Customer with duplicate ${field} already exists`);
      }
      throw error;
    }
  }

  async deleteCustomer(id: string) {
    await this.getCustomerById(id);
    await this.prisma.customer.delete({ where: { id } });
    return true;
  }

  getOwnerForCustomer(ownerId: string) {
    return this.prisma.user.findUnique({ where: { id: ownerId } });
  }

  getInvoicesForCustomer(customerId: string) {
    return this.prisma.invoice.findMany({ where: { customerId } });
  }
}
