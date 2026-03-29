import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import type { PaginationInput } from '../../../shared/graphql/pagination.types';
import type { CreateCustomerInput } from '../dto/create-customer.input';
import type { UpdateCustomerInput } from '../dto/update-customer.input';
import { CrmRepository } from '../repositories/crm.repository';

@Injectable()
export class CrmService {
  constructor(private readonly crmRepository: CrmRepository) {}

  getCustomers(pagination?: PaginationInput) {
    const page = Math.max(pagination?.page ?? 1, 1);
    const limit = Math.min(Math.max(pagination?.limit ?? 20, 1), 100);
    return this.crmRepository.findCustomers({ page, limit });
  }

  async getCustomerById(id: string) {
    const customer = await this.crmRepository.findById(id);
    if (!customer) {
      throw new NotFoundException(`Customer with id "${id}" not found`);
    }
    return customer;
  }

  async createCustomer(input: CreateCustomerInput) {
    try {
      return await this.crmRepository.create(input);
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
        const field = (error.meta?.target as string[])?.join(', ');
        throw new ConflictException(`Customer with duplicate ${field} already exists`);
      }
      throw error;
    }
  }

  async updateCustomer(id: string, input: UpdateCustomerInput) {
    await this.getCustomerById(id);
    try {
      return await this.crmRepository.update(id, input);
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
    await this.crmRepository.delete(id);
    return true;
  }

  getOwnerForCustomer(ownerId: string) {
    return this.crmRepository.findUserById(ownerId);
  }

  getInvoicesForCustomer(customerId: string) {
    return this.crmRepository.findInvoicesByCustomerId(customerId);
  }
}
