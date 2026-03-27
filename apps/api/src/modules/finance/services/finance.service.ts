import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { FinanceRepository } from '../repositories/finance.repository';
import { CreateInvoiceInput } from '../dto/create-invoice.input';
import { UpdateInvoiceInput } from '../dto/update-invoice.input';
import { PaginationInput } from '../../../shared/graphql/pagination.types';

@Injectable()
export class FinanceService {
  constructor(private readonly financeRepository: FinanceRepository) {}

  getInvoices(pagination?: PaginationInput) {
    const page = Math.max(pagination?.page ?? 1, 1);
    const limit = Math.min(Math.max(pagination?.limit ?? 20, 1), 100);
    return this.financeRepository.findInvoices({ page, limit });
  }

  async getInvoiceById(id: string) {
    const invoice = await this.financeRepository.findById(id);
    if (!invoice) {
      throw new NotFoundException(`Invoice with id "${id}" not found`);
    }
    return invoice;
  }

  async createInvoice(input: CreateInvoiceInput) {
    try {
      return await this.financeRepository.create(input);
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        const field = (error.meta?.target as string[])?.join(', ');
        throw new ConflictException(
          `Invoice with duplicate ${field} already exists`,
        );
      }
      throw error;
    }
  }

  async updateInvoice(id: string, input: UpdateInvoiceInput) {
    await this.getInvoiceById(id);
    try {
      return await this.financeRepository.update(id, input);
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        const field = (error.meta?.target as string[])?.join(', ');
        throw new ConflictException(
          `Invoice with duplicate ${field} already exists`,
        );
      }
      throw error;
    }
  }

  async deleteInvoice(id: string) {
    await this.getInvoiceById(id);
    await this.financeRepository.delete(id);
    return true;
  }

  getCustomerForInvoice(customerId: string) {
    return this.financeRepository.findCustomerById(customerId);
  }
}
