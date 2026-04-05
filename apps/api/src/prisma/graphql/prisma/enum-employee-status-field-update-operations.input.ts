import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeStatus } from './employee-status.enum';

@InputType()
export class EnumEmployeeStatusFieldUpdateOperationsInput {

    @Field(() => EmployeeStatus, {nullable:true})
    set?: `${EmployeeStatus}`;
}
