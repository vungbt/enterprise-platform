import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateManyUserInput } from './employee-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class EmployeeCreateManyUserInputEnvelope {

    @Field(() => [EmployeeCreateManyUserInput], {nullable:false})
    @Type(() => EmployeeCreateManyUserInput)
    data!: Array<EmployeeCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
