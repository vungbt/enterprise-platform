import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import type { PaginationInput } from '../../../shared/graphql/pagination.types';
import type { CreateEmployeeInput } from '../dto/create-employee.input';
import type { UpdateEmployeeInput } from '../dto/update-employee.input';
import { HrRepository } from '../repositories/hr.repository';

@Injectable()
export class HrService {
  constructor(private readonly hrRepository: HrRepository) {}

  getEmployees(pagination?: PaginationInput) {
    const page = Math.max(pagination?.page ?? 1, 1);
    const limit = Math.min(Math.max(pagination?.limit ?? 20, 1), 100);
    return this.hrRepository.findEmployees({ page, limit });
  }

  async getEmployeeById(id: string) {
    const employee = await this.hrRepository.findById(id);
    if (!employee) {
      throw new NotFoundException(`Employee with id "${id}" not found`);
    }
    return employee;
  }

  async createEmployee(input: CreateEmployeeInput) {
    try {
      return await this.hrRepository.create(input);
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
        const field = (error.meta?.target as string[])?.join(', ');
        throw new ConflictException(`Employee with duplicate ${field} already exists`);
      }
      throw error;
    }
  }

  async updateEmployee(id: string, input: UpdateEmployeeInput) {
    await this.getEmployeeById(id);
    try {
      return await this.hrRepository.update(id, input);
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
    await this.hrRepository.delete(id);
    return true;
  }

  getDepartmentForEmployee(departmentId: string) {
    return this.hrRepository.findDepartmentById(departmentId);
  }

  getReportsByManagerId(managerId: string) {
    return this.hrRepository.findEmployeesByManagerId(managerId);
  }
}
