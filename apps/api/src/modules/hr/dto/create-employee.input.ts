import { Field, InputType } from '@nestjs/graphql';
import { EmployeeStatus } from '../../../shared/graphql/enums';

@InputType()
export class CreateEmployeeInput {
  @Field()
  code!: string;

  @Field()
  name!: string;

  @Field()
  email!: string;

  @Field({ nullable: true })
  phone?: string;

  @Field()
  position!: string;

  @Field()
  hireDate!: Date;

  @Field(() => EmployeeStatus, { defaultValue: EmployeeStatus.active })
  status!: EmployeeStatus;

  @Field()
  departmentId!: string;

  @Field({ nullable: true })
  managerId?: string;

  @Field({ nullable: true })
  userId?: string;
}
