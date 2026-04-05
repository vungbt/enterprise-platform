import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { JwtAuthGuard } from '@api/shared/auth/jwt-auth.guard';
import { PaginatedEmployee } from '@api/shared/graphql/graphql-pagination';
import { PaginationInput } from '@api/shared/graphql/pagination.types';
import { CaslAbilityGuard } from '@api/shared/permissions/casl-ability.guard';
import { CheckAbility } from '@api/shared/permissions/check-ability.decorator';
import {
  Department,
  Employee,
  EmployeeUncheckedCreateInput,
  EmployeeUncheckedUpdateInput,
} from './hr.types';
import { HrService } from './hr.service';

@Resolver(() => Employee)
@UseGuards(JwtAuthGuard, CaslAbilityGuard)
export class HrResolver {
  constructor(private readonly hrService: HrService) {}

  @Query(() => PaginatedEmployee, { name: 'employees' })
  @CheckAbility({ action: 'read', subject: 'Employee' })
  employees(@Args('pagination', { nullable: true }) pagination?: PaginationInput) {
    return this.hrService.getEmployees(pagination);
  }

  @Query(() => Employee, { name: 'employee' })
  @CheckAbility({ action: 'read', subject: 'Employee' })
  employee(@Args('id') id: string) {
    return this.hrService.getEmployeeById(id);
  }

  @Mutation(() => Employee)
  @CheckAbility({ action: 'create', subject: 'Employee' })
  createEmployee(@Args('input') input: EmployeeUncheckedCreateInput) {
    return this.hrService.createEmployee(input);
  }

  @Mutation(() => Employee)
  @CheckAbility({ action: 'update', subject: 'Employee' })
  updateEmployee(
    @Args('id') id: string,
    @Args('input') input: EmployeeUncheckedUpdateInput,
  ) {
    return this.hrService.updateEmployee(id, input);
  }

  @Mutation(() => Boolean)
  @CheckAbility({ action: 'delete', subject: 'Employee' })
  deleteEmployee(@Args('id') id: string) {
    return this.hrService.deleteEmployee(id);
  }

  @ResolveField(() => Department, { nullable: true })
  department(@Parent() employee: Employee) {
    return this.hrService.getDepartmentForEmployee(employee.departmentId);
  }

  @ResolveField(() => Employee, { nullable: true })
  manager(@Parent() employee: Employee) {
    if (!employee.managerId) return null;
    return this.hrService.getManagerById(employee.managerId);
  }

  @ResolveField(() => [Employee])
  reports(@Parent() employee: Employee) {
    return this.hrService.getReportsByManagerId(employee.id);
  }
}
