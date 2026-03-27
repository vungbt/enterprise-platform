import { Injectable, NotFoundException } from '@nestjs/common';
import { DepartmentRepository } from '../repositories/department.repository';
import { CreateDepartmentInput } from '../dto/create-department.input';
import { UpdateDepartmentInput } from '../dto/update-department.input';
import { PaginationInput } from '../../../shared/graphql/pagination.types';

@Injectable()
export class DepartmentService {
  constructor(private readonly departmentRepository: DepartmentRepository) {}

  getDepartments(pagination?: PaginationInput) {
    const page = Math.max(pagination?.page ?? 1, 1);
    const limit = Math.min(Math.max(pagination?.limit ?? 20, 1), 100);
    return this.departmentRepository.findAll({ page, limit });
  }

  async getDepartmentById(id: string) {
    const department = await this.departmentRepository.findById(id);
    if (!department) {
      throw new NotFoundException(`Department with id "${id}" not found`);
    }
    return department;
  }

  createDepartment(input: CreateDepartmentInput) {
    return this.departmentRepository.create(input);
  }

  async updateDepartment(id: string, input: UpdateDepartmentInput) {
    await this.getDepartmentById(id);
    return this.departmentRepository.update(id, input);
  }

  async deleteDepartment(id: string) {
    await this.getDepartmentById(id);
    await this.departmentRepository.delete(id);
    return true;
  }

  getParentDepartment(parentId: string) {
    return this.departmentRepository.findById(parentId);
  }

  getChildrenDepartments(parentId: string) {
    return this.departmentRepository.findChildrenByParentId(parentId);
  }

  getEmployeesByDepartmentId(departmentId: string) {
    return this.departmentRepository.findEmployeesByDepartmentId(departmentId);
  }
}
