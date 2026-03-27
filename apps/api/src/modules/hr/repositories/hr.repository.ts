import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../shared/database/prisma.service';
import { CreateEmployeeInput } from '../dto/create-employee.input';
import { UpdateEmployeeInput } from '../dto/update-employee.input';

@Injectable()
export class HrRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findEmployees(pagination: { page: number; limit: number }) {
    const skip = (pagination.page - 1) * pagination.limit;
    const take = pagination.limit;

    const [items, total] = await Promise.all([
      this.prisma.employee.findMany({
        orderBy: { createdAt: 'desc' },
        skip,
        take,
      }),
      this.prisma.employee.count(),
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
    return this.prisma.employee.findUnique({
      where: { id },
    });
  }

  create(data: CreateEmployeeInput) {
    return this.prisma.employee.create({ data });
  }

  update(id: string, data: UpdateEmployeeInput) {
    return this.prisma.employee.update({
      where: { id },
      data,
    });
  }

  delete(id: string) {
    return this.prisma.employee.delete({
      where: { id },
    });
  }

  findDepartmentById(departmentId: string) {
    return this.prisma.department.findUnique({
      where: { id: departmentId },
    });
  }

  findEmployeesByManagerId(managerId: string) {
    return this.prisma.employee.findMany({
      where: { managerId },
    });
  }
}
