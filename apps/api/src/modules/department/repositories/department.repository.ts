import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../shared/database/prisma.service';
import type { CreateDepartmentInput } from '../dto/create-department.input';
import type { UpdateDepartmentInput } from '../dto/update-department.input';

@Injectable()
export class DepartmentRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(pagination: { page: number; limit: number }) {
    const skip = (pagination.page - 1) * pagination.limit;
    const take = pagination.limit;

    const [items, total] = await Promise.all([
      this.prisma.department.findMany({
        orderBy: { name: 'asc' },
        skip,
        take,
      }),
      this.prisma.department.count(),
    ]);

    return {
      items,
      total,
      page: pagination.page,
      limit: pagination.limit,
      totalPages: Math.ceil(total / pagination.limit),
    };
  }

  findById(id: string) {
    return this.prisma.department.findUnique({
      where: { id },
    });
  }

  create(data: CreateDepartmentInput) {
    return this.prisma.department.create({ data });
  }

  update(id: string, data: UpdateDepartmentInput) {
    return this.prisma.department.update({
      where: { id },
      data,
    });
  }

  delete(id: string) {
    return this.prisma.department.delete({
      where: { id },
    });
  }

  findChildrenByParentId(parentId: string) {
    return this.prisma.department.findMany({
      where: { parentId },
    });
  }

  findEmployeesByDepartmentId(departmentId: string) {
    return this.prisma.employee.findMany({
      where: { departmentId },
    });
  }
}
