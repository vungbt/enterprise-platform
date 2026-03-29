import { UseGuards } from '@nestjs/common';
import { Args, Mutation, ObjectType, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { JwtAuthGuard } from '../../shared/auth/jwt-auth.guard';
import { Paginated, PaginationInput } from '../../shared/graphql/pagination.types';
import { CaslAbilityGuard } from '../../shared/permissions/casl-ability.guard';
import { CheckAbility } from '../../shared/permissions/check-ability.decorator';
import { EmployeeEntity } from '../hr/entities/employee.entity';
import { CreateDepartmentInput } from './dto/create-department.input';
import { UpdateDepartmentInput } from './dto/update-department.input';
import { DepartmentEntity } from './entities/department.entity';
import { DepartmentService } from './services/department.service';

@ObjectType()
export class PaginatedDepartment extends Paginated(DepartmentEntity) {}

@Resolver(() => DepartmentEntity)
@UseGuards(JwtAuthGuard, CaslAbilityGuard)
export class DepartmentResolver {
  constructor(private readonly departmentService: DepartmentService) {}

  @Query(() => PaginatedDepartment, { name: 'departments' })
  @CheckAbility({ action: 'read', subject: 'Department' })
  departments(@Args('pagination', { nullable: true }) pagination?: PaginationInput) {
    return this.departmentService.getDepartments(pagination);
  }

  @Query(() => DepartmentEntity, { name: 'department' })
  @CheckAbility({ action: 'read', subject: 'Department' })
  department(@Args('id') id: string) {
    return this.departmentService.getDepartmentById(id);
  }

  @Mutation(() => DepartmentEntity)
  @CheckAbility({ action: 'create', subject: 'Department' })
  createDepartment(@Args('input') input: CreateDepartmentInput) {
    return this.departmentService.createDepartment(input);
  }

  @Mutation(() => DepartmentEntity)
  @CheckAbility({ action: 'update', subject: 'Department' })
  updateDepartment(@Args('id') id: string, @Args('input') input: UpdateDepartmentInput) {
    return this.departmentService.updateDepartment(id, input);
  }

  @Mutation(() => Boolean)
  @CheckAbility({ action: 'delete', subject: 'Department' })
  deleteDepartment(@Args('id') id: string) {
    return this.departmentService.deleteDepartment(id);
  }

  @ResolveField(() => DepartmentEntity, { nullable: true })
  parent(@Parent() department: DepartmentEntity) {
    if (!department.parentId) return null;
    return this.departmentService.getParentDepartment(department.parentId);
  }

  @ResolveField(() => [DepartmentEntity])
  children(@Parent() department: DepartmentEntity) {
    return this.departmentService.getChildrenDepartments(department.id);
  }

  @ResolveField(() => [EmployeeEntity])
  employees(@Parent() department: DepartmentEntity) {
    return this.departmentService.getEmployeesByDepartmentId(department.id);
  }
}
