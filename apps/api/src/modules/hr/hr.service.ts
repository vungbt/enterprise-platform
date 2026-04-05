import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '@api/shared/database/prisma.service';
import type { PaginationInput } from '@api/shared/graphql/pagination.types';
import type { EmployeeUncheckedCreateInput, EmployeeUncheckedUpdateInput } from './hr.types';

@Injectable()
export class HrService {
  constructor(private readonly prisma: PrismaService) {}

  async getEmployees(pagination?: PaginationInput) {
    const page = Math.max(pagination?.page ?? 1, 1);
    const limit = Math.min(Math.max(pagination?.limit ?? 20, 1), 100);
    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
      this.prisma.employee.findMany({
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
      }),
      this.prisma.employee.count(),
    ]);

    return {
      items,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  async getEmployeeById(id: string) {
    const employee = await this.prisma.employee.findUnique({ where: { id } });
    if (!employee) {
      throw new NotFoundException(`Employee with id "${id}" not found`);
    }
    return employee;
  }

  async createEmployee(input: EmployeeUncheckedCreateInput) {
    try {
      return await this.prisma.employee.create({
        data: input as Prisma.EmployeeUncheckedCreateInput,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
        const field = (error.meta?.target as string[])?.join(', ');
        throw new ConflictException(`Employee with duplicate ${field} already exists`);
      }
      throw error;
    }
  }

  async updateEmployee(id: string, input: EmployeeUncheckedUpdateInput) {
    await this.getEmployeeById(id);
    try {
      return await this.prisma.employee.update({
        where: { id },
        data: input as Prisma.EmployeeUncheckedUpdateInput,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
        const field = (error.meta?.target as string[])?.join(', ');
        throw new ConflictException(`Employee with duplicate ${field} already exists`);
      }
      throw error;
    }
  }

  async deleteEmployee(id: string) {
    await this.getEmployeeById(id);
    await this.prisma.employee.delete({ where: { id } });
    return true;
  }

  getDepartmentForEmployee(departmentId: string) {
    return this.prisma.department.findUnique({ where: { id: departmentId } });
  }

  getManagerById(managerId: string) {
    return this.prisma.employee.findUnique({ where: { id: managerId } });
  }

  getReportsByManagerId(managerId: string) {
    return this.prisma.employee.findMany({ where: { managerId } });
  }
}
