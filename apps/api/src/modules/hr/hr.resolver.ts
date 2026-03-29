import { UseGuards } from '@nestjs/common';
import { Args, Mutation, ObjectType, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { JwtAuthGuard } from '../../shared/auth/jwt-auth.guard';
import { Paginated, PaginationInput } from '../../shared/graphql/pagination.types';
import { CaslAbilityGuard } from '../../shared/permissions/casl-ability.guard';
import { CheckAbility } from '../../shared/permissions/check-ability.decorator';
import { DepartmentEntity } from '../department/entities/department.entity';
import { CreateEmployeeInput } from './dto/create-employee.input';
import { UpdateEmployeeInput } from './dto/update-employee.input';
import { EmployeeEntity } from './entities/employee.entity';
import { HrService } from './services/hr.service';

@ObjectType()
export class PaginatedEmployee extends Paginated(EmployeeEntity) {}

@Resolver(() => EmployeeEntity)
@UseGuards(JwtAuthGuard, CaslAbilityGuard)
export class HrResolver {
  constructor(private readonly hrService: HrService) {}

  @Query(() => PaginatedEmployee, { name: 'employees' })
  @CheckAbility({ action: 'read', subject: 'Employee' })
  employees(@Args('pagination', { nullable: true }) pagination?: PaginationInput) {
    return this.hrService.getEmployees(pagination);
  }

  @Query(() => EmployeeEntity, { name: 'employee' })
  @CheckAbility({ action: 'read', subject: 'Employee' })
  employee(@Args('id') id: string) {
    return this.hrService.getEmployeeById(id);
  }

  @Mutation(() => EmployeeEntity)
  @CheckAbility({ action: 'create', subject: 'Employee' })
  createEmployee(@Args('input') input: CreateEmployeeInput) {
    return this.hrService.createEmployee(input);
  }

  @Mutation(() => EmployeeEntity)
  @CheckAbility({ action: 'update', subject: 'Employee' })
  updateEmployee(@Args('id') id: string, @Args('input') input: UpdateEmployeeInput) {
    return this.hrService.updateEmployee(id, input);
  }

  @Mutation(() => Boolean)
  @CheckAbility({ action: 'delete', subject: 'Employee' })
  deleteEmployee(@Args('id') id: string) {
    return this.hrService.deleteEmployee(id);
  }

  @ResolveField(() => DepartmentEntity, { nullable: true })
  department(@Parent() employee: EmployeeEntity) {
    return this.hrService.getDepartmentForEmployee(employee.departmentId);
  }

  @ResolveField(() => EmployeeEntity, { nullable: true })
  manager(@Parent() employee: EmployeeEntity) {
    if (!employee.managerId) return null;
    return this.hrService.getEmployeeById(employee.managerId);
  }

  @ResolveField(() => [EmployeeEntity])
  reports(@Parent() employee: EmployeeEntity) {
    return this.hrService.getReportsByManagerId(employee.id);
  }
}
