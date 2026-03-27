import { Module } from '@nestjs/common';
import { DepartmentRepository } from './repositories/department.repository';
import { DepartmentService } from './services/department.service';
import { DepartmentResolver } from './department.resolver';

@Module({
  providers: [DepartmentRepository, DepartmentService, DepartmentResolver],
})
export class DepartmentModule {}
