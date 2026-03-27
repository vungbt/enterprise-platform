import { Query, Resolver } from '@nestjs/graphql';
import { HrService } from './services/hr.service';
import { EmployeeEntity } from './entities/employee.entity';

@Resolver(() => EmployeeEntity)
export class HrResolver {
  constructor(private readonly hrService: HrService) {}

  @Query(() => [EmployeeEntity], { name: 'employees' })
  employees() {
    return this.hrService.getEmployees();
  }
}
