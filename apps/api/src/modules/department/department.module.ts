import { Module } from '@nestjs/common';
import { DepartmentResolver } from './department.resolver';
import { DepartmentRepository } from './repositories/department.repository';
import { DepartmentService } from './services/department.service';

@Module({
  providers: [DepartmentRepository, DepartmentService, DepartmentResolver],
})
export class DepartmentModule {}
