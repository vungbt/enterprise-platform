import { Module } from '@nestjs/common';
import { DepartmentResolver } from './department.resolver';
import { DepartmentService } from './department.service';

@Module({
  providers: [DepartmentService, DepartmentResolver],
})
export class DepartmentModule {}
