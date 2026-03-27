import { Field, ID, ObjectType } from '@nestjs/graphql';
import { EmployeeStatus } from '../../../shared/graphql/enums';

@ObjectType()
export class EmployeeEntity {
  @Field(() => ID)
  id!: string;

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

  @Field(() => EmployeeStatus)
  status!: EmployeeStatus;

  @Field()
  departmentId!: string;

  @Field({ nullable: true })
  managerId?: string;

  @Field({ nullable: true })
  userId?: string;

  @Field()
  createdAt!: Date;

  @Field()
  updatedAt!: Date;
}
