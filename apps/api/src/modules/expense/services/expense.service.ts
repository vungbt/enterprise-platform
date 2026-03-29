import { Injectable, NotFoundException } from '@nestjs/common';
import type { PaginationInput } from '../../../shared/graphql/pagination.types';
import type { CreateExpenseInput } from '../dto/create-expense.input';
import type { CreateExpenseCategoryInput } from '../dto/create-expense-category.input';
import type { ExpenseFilterInput } from '../dto/expense-filter.input';
import type { UpdateExpenseInput } from '../dto/update-expense.input';
import type { UpdateExpenseCategoryInput } from '../dto/update-expense-category.input';
import { ExpenseRepository } from '../repositories/expense.repository';

@Injectable()
export class ExpenseService {
  constructor(private readonly expenseRepository: ExpenseRepository) {}

  // ── Expense ──

  getExpenses(pagination?: PaginationInput, filter?: ExpenseFilterInput) {
    const page = Math.max(pagination?.page ?? 1, 1);
    const limit = Math.min(Math.max(pagination?.limit ?? 20, 1), 100);
    return this.expenseRepository.findAllExpenses({ page, limit }, filter);
  }

  async getExpenseById(id: string) {
    const expense = await this.expenseRepository.findExpenseById(id);
    if (!expense) {
      throw new NotFoundException(`Expense with id "${id}" not found`);
    }
    return expense;
  }

  createExpense(input: CreateExpenseInput) {
    return this.expenseRepository.createExpense(input);
  }

  async updateExpense(id: string, input: UpdateExpenseInput) {
    const expense = await this.expenseRepository.findExpenseById(id);
    if (!expense) {
      throw new NotFoundException(`Expense with id "${id}" not found`);
    }
    return this.expenseRepository.updateExpense(id, input);
  }

  async deleteExpense(id: string) {
    const expense = await this.expenseRepository.findExpenseById(id);
    if (!expense) {
      throw new NotFoundException(`Expense with id "${id}" not found`);
    }
    await this.expenseRepository.deleteExpense(id);
    return true;
  }

  // ── ExpenseCategory ──

  getExpenseCategories() {
    return this.expenseRepository.findAllCategories();
  }

  async getExpenseCategoryById(id: string) {
    const category = await this.expenseRepository.findCategoryById(id);
    if (!category) {
      throw new NotFoundException(`ExpenseCategory with id "${id}" not found`);
    }
    return category;
  }

  createExpenseCategory(input: CreateExpenseCategoryInput) {
    return this.expenseRepository.createCategory(input);
  }

  async updateExpenseCategory(id: string, input: UpdateExpenseCategoryInput) {
    const category = await this.expenseRepository.findCategoryById(id);
    if (!category) {
      throw new NotFoundException(`ExpenseCategory with id "${id}" not found`);
    }
    return this.expenseRepository.updateCategory(id, input);
  }

  async deleteExpenseCategory(id: string) {
    const category = await this.expenseRepository.findCategoryById(id);
    if (!category) {
      throw new NotFoundException(`ExpenseCategory with id "${id}" not found`);
    }
    await this.expenseRepository.deleteCategory(id);
    return true;
  }

  getCategoryForExpense(categoryId: string) {
    return this.expenseRepository.findCategoryForExpense(categoryId);
  }

  getCreatedByForExpense(createdById: string) {
    return this.expenseRepository.findUserById(createdById);
  }

  getClubForExpense(clubId: string) {
    return this.expenseRepository.findClubById(clubId);
  }

  getDepartmentForExpense(departmentId: string) {
    return this.expenseRepository.findDepartmentById(departmentId);
  }
}
