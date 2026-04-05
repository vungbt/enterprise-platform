import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '@api/shared/database/prisma.service';
import type { PaginationInput } from '@api/shared/graphql/pagination.types';
import type { DepartmentUncheckedCreateInput, DepartmentUncheckedUpdateInput } from './department.types';

@Injectable()
export class DepartmentService {
  constructor(private readonly prisma: PrismaService) {}

  async getDepartments(pagination?: PaginationInput) {
    const page = Math.max(pagination?.page ?? 1, 1);
    const limit = Math.min(Math.max(pagination?.limit ?? 20, 1), 100);
    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
      this.prisma.department.findMany({
        orderBy: { name: 'asc' },
        skip,
        take: limit,
      }),
      this.prisma.department.count(),
    ]);

    return {
      items,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  async getDepartmentById(id: string) {
    const department = await this.prisma.department.findUnique({ where: { id } });
    if (!department) {
      throw new NotFoundException(`Department with id "${id}" not found`);
    }
    return department;
  }

  createDepartment(input: DepartmentUncheckedCreateInput) {
    return this.prisma.department.create({
      data: input as Prisma.DepartmentUncheckedCreateInput,
    });
  }

  async updateDepartment(id: string, input: DepartmentUncheckedUpdateInput) {
    await this.getDepartmentById(id);
    return this.prisma.department.update({
      where: { id },
      data: input as Prisma.DepartmentUncheckedUpdateInput,
    });
  }

  async deleteDepartment(id: string) {
    await this.getDepartmentById(id);
    await this.prisma.department.delete({ where: { id } });
    return true;
  }

  getParentDepartment(parentId: string) {
    return this.prisma.department.findUnique({ where: { id: parentId } });
  }

  getChildrenDepartments(parentId: string) {
    return this.prisma.department.findMany({ where: { parentId } });
  }

  getEmployeesByDepartmentId(departmentId: string) {
    return this.prisma.employee.findMany({ where: { departmentId } });
  }
}
