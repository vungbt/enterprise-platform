import { Injectable } from '@nestjs/common';
import type { Prisma } from '@prisma/client';
import { PrismaService } from '../../../shared/database/prisma.service';
import type { CreateExpenseInput } from '../dto/create-expense.input';
import type { CreateExpenseCategoryInput } from '../dto/create-expense-category.input';
import type { ExpenseFilterInput } from '../dto/expense-filter.input';
import type { UpdateExpenseInput } from '../dto/update-expense.input';
import type { UpdateExpenseCategoryInput } from '../dto/update-expense-category.input';

@Injectable()
export class ExpenseRepository {
  constructor(private readonly prisma: PrismaService) {}

  // ── Expense ──

  async findAllExpenses(pagination: { page: number; limit: number }, filter?: ExpenseFilterInput) {
    const where: Prisma.ExpenseWhereInput = {};

    if (filter?.clubId) where.clubId = filter.clubId;
    if (filter?.departmentId) where.departmentId = filter.departmentId;
    if (filter?.categoryId) where.categoryId = filter.categoryId;
    if (filter?.status) where.status = filter.status;

    const skip = (pagination.page - 1) * pagination.limit;
    const take = pagination.limit;

    const [items, total] = await Promise.all([
      this.prisma.expense.findMany({
        where,
        skip,
        take,
        orderBy: { date: 'desc' },
      }),
      this.prisma.expense.count({ where }),
    ]);

    return {
      items,
      total,
      page: pagination.page,
      limit: pagination.limit,
      totalPages: Math.ceil(total / pagination.limit),
    };
  }

  findExpenseById(id: string) {
    return this.prisma.expense.findUnique({ where: { id } });
  }

  createExpense(data: CreateExpenseInput) {
    return this.prisma.expense.create({ data });
  }

  updateExpense(id: string, data: UpdateExpenseInput) {
    return this.prisma.expense.update({ where: { id }, data });
  }

  deleteExpense(id: string) {
    return this.prisma.expense.delete({ where: { id } });
  }

  // ── ExpenseCategory ──

  findAllCategories() {
    return this.prisma.expenseCategory.findMany({
      orderBy: { name: 'asc' },
    });
  }

  findCategoryById(id: string) {
    return this.prisma.expenseCategory.findUnique({ where: { id } });
  }

  createCategory(data: CreateExpenseCategoryInput) {
    return this.prisma.expenseCategory.create({ data });
  }

  updateCategory(id: string, data: UpdateExpenseCategoryInput) {
    return this.prisma.expenseCategory.update({ where: { id }, data });
  }

  deleteCategory(id: string) {
    return this.prisma.expenseCategory.delete({ where: { id } });
  }

  findCategoryForExpense(categoryId: string) {
    return this.prisma.expenseCategory.findUnique({
      where: { id: categoryId },
    });
  }

  findUserById(userId: string) {
    return this.prisma.user.findUnique({
      where: { id: userId },
    });
  }

  findClubById(clubId: string) {
    return this.prisma.club.findUnique({
      where: { id: clubId },
    });
  }

  findDepartmentById(departmentId: string) {
    return this.prisma.department.findUnique({
      where: { id: departmentId },
    });
  }
}
