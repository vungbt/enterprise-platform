import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { JwtAuthGuard } from '@api/shared/auth/jwt-auth.guard';
import type { DataLoaders } from '@api/shared/dataloader/dataloader.service';
import { PaginatedDepartment } from '@api/shared/graphql/graphql-pagination';
import { PaginationInput } from '@api/shared/graphql/pagination.types';
import { CaslAbilityGuard } from '@api/shared/permissions/casl-ability.guard';
import { CheckAbility } from '@api/shared/permissions/check-ability.decorator';
import {
  Department,
  DepartmentUncheckedCreateInput,
  DepartmentUncheckedUpdateInput,
  Employee,
} from './department.types';
import { DepartmentService } from './department.service';

@Resolver(() => Department)
@UseGuards(JwtAuthGuard, CaslAbilityGuard)
export class DepartmentResolver {
  constructor(private readonly departmentService: DepartmentService) {}

  @Query(() => PaginatedDepartment, { name: 'departments' })
  @CheckAbility({ action: 'read', subject: 'Department' })
  departments(@Args('pagination', { nullable: true }) pagination?: PaginationInput) {
    return this.departmentService.getDepartments(pagination);
  }

  @Query(() => Department, { name: 'department' })
  @CheckAbility({ action: 'read', subject: 'Department' })
  department(@Args('id') id: string) {
    return this.departmentService.getDepartmentById(id);
  }

  @Mutation(() => Department)
  @CheckAbility({ action: 'create', subject: 'Department' })
  createDepartment(@Args('input') input: DepartmentUncheckedCreateInput) {
    return this.departmentService.createDepartment(input);
  }

  @Mutation(() => Department)
  @CheckAbility({ action: 'update', subject: 'Department' })
  updateDepartment(@Args('id') id: string, @Args('input') input: DepartmentUncheckedUpdateInput) {
    return this.departmentService.updateDepartment(id, input);
  }

  @Mutation(() => Boolean)
  @CheckAbility({ action: 'delete', subject: 'Department' })
  deleteDepartment(@Args('id') id: string) {
    return this.departmentService.deleteDepartment(id);
  }

  @ResolveField(() => Department, { nullable: true })
  parent(@Parent() department: Department, @Context('loaders') loaders: DataLoaders) {
    if (!department.parentId) return null;
    return loaders.department.load(department.parentId);
  }

  @ResolveField(() => [Department])
  children(@Parent() department: Department, @Context('loaders') loaders: DataLoaders) {
    return loaders.childrenByParentId.load(department.id);
  }

  @ResolveField(() => [Employee])
  employees(@Parent() department: Department, @Context('loaders') loaders: DataLoaders) {
    return loaders.employeesByDepartmentId.load(department.id);
  }
}
