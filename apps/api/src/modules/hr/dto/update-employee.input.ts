import { Field, InputType } from '@nestjs/graphql';
import { EmployeeStatus } from '../../../shared/graphql/enums';

@InputType()
export class UpdateEmployeeInput {
  @Field({ nullable: true })
  code?: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  position?: string;

  @Field({ nullable: true })
  hireDate?: Date;

  @Field(() => EmployeeStatus, { nullable: true })
  status?: EmployeeStatus;

  @Field({ nullable: true })
  departmentId?: string;

  @Field({ nullable: true })
  managerId?: string;

  @Field({ nullable: true })
  userId?: string;
}
