import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '@api/shared/database/prisma.service';
import type { PaginationInput } from '@api/shared/graphql/pagination.types';
import type {
  ExpenseCategoryUncheckedCreateInput,
  ExpenseCategoryUncheckedUpdateInput,
  ExpenseFilterInput,
  ExpenseUncheckedCreateInput,
  ExpenseUncheckedUpdateInput,
} from './expense.types';

@Injectable()
export class ExpenseService {
  constructor(private readonly prisma: PrismaService) {}

  async getExpenses(pagination?: PaginationInput, filter?: ExpenseFilterInput) {
    const page = Math.max(pagination?.page ?? 1, 1);
    const limit = Math.min(Math.max(pagination?.limit ?? 20, 1), 100);
    const skip = (page - 1) * limit;

    const where: Prisma.ExpenseWhereInput = { deletedAt: null };
    if (filter?.clubId) where.clubId = filter.clubId;
    if (filter?.departmentId) where.departmentId = filter.departmentId;
    if (filter?.categoryId) where.categoryId = filter.categoryId;
    if (filter?.status) where.status = filter.status;

    const [items, total] = await Promise.all([
      this.prisma.expense.findMany({
        where,
        skip,
        take: limit,
        orderBy: { date: 'desc' },
      }),
      this.prisma.expense.count({ where }),
    ]);

    return {
      items,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  async getExpenseById(id: string) {
    const expense = await this.prisma.expense.findUnique({ where: { id } });
    if (!expense) {
      throw new NotFoundException(`Expense with id "${id}" not found`);
    }
    return expense;
  }

  async createExpense(input: ExpenseUncheckedCreateInput) {
    try {
      return await this.prisma.expense.create({
        data: input as Prisma.ExpenseUncheckedCreateInput,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
        const field = (error.meta?.target as string[])?.join(', ');
        throw new ConflictException(`Expense with duplicate ${field} already exists`);
      }
      throw error;
    }
  }

  async updateExpense(id: string, input: ExpenseUncheckedUpdateInput) {
    await this.getExpenseById(id);
    return this.prisma.expense.update({
      where: { id },
      data: input as Prisma.ExpenseUncheckedUpdateInput,
    });
  }

  async deleteExpense(id: string) {
    await this.getExpenseById(id);
    await this.prisma.expense.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
    return true;
  }

  getExpenseCategories() {
    return this.prisma.expenseCategory.findMany({
      orderBy: { name: 'asc' },
    });
  }

  async getExpenseCategoryById(id: string) {
    const category = await this.prisma.expenseCategory.findUnique({ where: { id } });
    if (!category) {
      throw new NotFoundException(`ExpenseCategory with id "${id}" not found`);
    }
    return category;
  }

  async createExpenseCategory(input: ExpenseCategoryUncheckedCreateInput) {
    try {
      return await this.prisma.expenseCategory.create({
        data: input as Prisma.ExpenseCategoryUncheckedCreateInput,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
        const field = (error.meta?.target as string[])?.join(', ');
        throw new ConflictException(`ExpenseCategory with duplicate ${field} already exists`);
      }
      throw error;
    }
  }

  async updateExpenseCategory(id: string, input: ExpenseCategoryUncheckedUpdateInput) {
    await this.getExpenseCategoryById(id);
    return this.prisma.expenseCategory.update({
      where: { id },
      data: input as Prisma.ExpenseCategoryUncheckedUpdateInput,
    });
  }

  async deleteExpenseCategory(id: string) {
    await this.getExpenseCategoryById(id);
    await this.prisma.expenseCategory.delete({ where: { id } });
    return true;
  }

  getCategoryForExpense(categoryId: string) {
    return this.prisma.expenseCategory.findUnique({ where: { id: categoryId } });
  }

  getCreatedByForExpense(createdById: string) {
    return this.prisma.user.findUnique({ where: { id: createdById } });
  }

  getClubForExpense(clubId: string) {
    return this.prisma.club.findUnique({ where: { id: clubId } });
  }

  getDepartmentForExpense(departmentId: string) {
    return this.prisma.department.findUnique({ where: { id: departmentId } });
  }
}
