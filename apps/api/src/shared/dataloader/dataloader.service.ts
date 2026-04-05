import { Injectable } from '@nestjs/common';
import type {
  Club,
  ClubMember,
  Customer,
  Department,
  Employee,
  Expense,
  ExpenseCategory,
  Invoice,
  User,
} from '@prisma/client';
import DataLoader from 'dataloader';
import { PrismaService } from '@api/shared/database/prisma.service';

@Injectable()
export class DataLoaderService {
  constructor(private readonly prisma: PrismaService) {}

  createLoaders() {
    return {
      department: this.createDepartmentLoader(),
      employee: this.createEmployeeLoader(),
      user: this.createUserLoader(),
      customer: this.createCustomerLoader(),
      club: this.createClubLoader(),
      expenseCategory: this.createExpenseCategoryLoader(),
      invoicesByCustomerId: this.createInvoicesByCustomerIdLoader(),
      employeesByManagerId: this.createEmployeesByManagerIdLoader(),
      employeesByDepartmentId: this.createEmployeesByDepartmentIdLoader(),
      membersByClubId: this.createMembersByClubIdLoader(),
      expensesByClubId: this.createExpensesByClubIdLoader(),
      childrenByParentId: this.createChildrenByParentIdLoader(),
    };
  }

  private createDepartmentLoader() {
    return new DataLoader<string, Department | null>(async (ids) => {
      const rows = await this.prisma.department.findMany({ where: { id: { in: [...ids] } } });
      const map = new Map(rows.map((r) => [r.id, r]));
      return ids.map((id) => map.get(id) ?? null);
    });
  }

  private createEmployeeLoader() {
    return new DataLoader<string, Employee | null>(async (ids) => {
      const rows = await this.prisma.employee.findMany({ where: { id: { in: [...ids] } } });
      const map = new Map(rows.map((r) => [r.id, r]));
      return ids.map((id) => map.get(id) ?? null);
    });
  }

  private createUserLoader() {
    return new DataLoader<string, User | null>(async (ids) => {
      const rows = await this.prisma.user.findMany({ where: { id: { in: [...ids] } } });
      const map = new Map(rows.map((r) => [r.id, r]));
      return ids.map((id) => map.get(id) ?? null);
    });
  }

  private createCustomerLoader() {
    return new DataLoader<string, Customer | null>(async (ids) => {
      const rows = await this.prisma.customer.findMany({ where: { id: { in: [...ids] } } });
      const map = new Map(rows.map((r) => [r.id, r]));
      return ids.map((id) => map.get(id) ?? null);
    });
  }

  private createClubLoader() {
    return new DataLoader<string, Club | null>(async (ids) => {
      const rows = await this.prisma.club.findMany({ where: { id: { in: [...ids] } } });
      const map = new Map(rows.map((r) => [r.id, r]));
      return ids.map((id) => map.get(id) ?? null);
    });
  }

  private createExpenseCategoryLoader() {
    return new DataLoader<string, ExpenseCategory | null>(async (ids) => {
      const rows = await this.prisma.expenseCategory.findMany({ where: { id: { in: [...ids] } } });
      const map = new Map(rows.map((r) => [r.id, r]));
      return ids.map((id) => map.get(id) ?? null);
    });
  }

  private createInvoicesByCustomerIdLoader() {
    return new DataLoader<string, Invoice[]>(async (customerIds) => {
      const rows = await this.prisma.invoice.findMany({
        where: { customerId: { in: [...customerIds] } },
      });
      const map = new Map<string, Invoice[]>();
      for (const r of rows) {
        if (!r.customerId) continue;
        const list = map.get(r.customerId) ?? [];
        list.push(r);
        map.set(r.customerId, list);
      }
      return customerIds.map((id) => map.get(id) ?? []);
    });
  }

  private createEmployeesByManagerIdLoader() {
    return new DataLoader<string, Employee[]>(async (managerIds) => {
      const rows = await this.prisma.employee.findMany({
        where: { managerId: { in: [...managerIds] } },
      });
      const map = new Map<string, Employee[]>();
      for (const r of rows) {
        if (!r.managerId) continue;
        const list = map.get(r.managerId) ?? [];
        list.push(r);
        map.set(r.managerId, list);
      }
      return managerIds.map((id) => map.get(id) ?? []);
    });
  }

  private createEmployeesByDepartmentIdLoader() {
    return new DataLoader<string, Employee[]>(async (departmentIds) => {
      const rows = await this.prisma.employee.findMany({
        where: { departmentId: { in: [...departmentIds] } },
      });
      const map = new Map<string, Employee[]>();
      for (const r of rows) {
        const list = map.get(r.departmentId) ?? [];
        list.push(r);
        map.set(r.departmentId, list);
      }
      return departmentIds.map((id) => map.get(id) ?? []);
    });
  }

  private createMembersByClubIdLoader() {
    return new DataLoader<string, ClubMember[]>(async (clubIds) => {
      const rows = await this.prisma.clubMember.findMany({
        where: { clubId: { in: [...clubIds] } },
      });
      const map = new Map<string, ClubMember[]>();
      for (const r of rows) {
        const list = map.get(r.clubId) ?? [];
        list.push(r);
        map.set(r.clubId, list);
      }
      return clubIds.map((id) => map.get(id) ?? []);
    });
  }

  private createExpensesByClubIdLoader() {
    return new DataLoader<string, Expense[]>(async (clubIds) => {
      const rows = await this.prisma.expense.findMany({
        where: { clubId: { in: [...clubIds] } },
      });
      const map = new Map<string, Expense[]>();
      for (const r of rows) {
        if (!r.clubId) continue;
        const list = map.get(r.clubId) ?? [];
        list.push(r);
        map.set(r.clubId, list);
      }
      return clubIds.map((id) => map.get(id) ?? []);
    });
  }

  private createChildrenByParentIdLoader() {
    return new DataLoader<string, Department[]>(async (parentIds) => {
      const rows = await this.prisma.department.findMany({
        where: { parentId: { in: [...parentIds] } },
      });
      const map = new Map<string, Department[]>();
      for (const r of rows) {
        if (!r.parentId) continue;
        const list = map.get(r.parentId) ?? [];
        list.push(r);
        map.set(r.parentId, list);
      }
      return parentIds.map((id) => map.get(id) ?? []);
    });
  }
}

export type DataLoaders = ReturnType<DataLoaderService['createLoaders']>;
