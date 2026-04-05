import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateManyManagerInput } from './employee-create-many-manager.input';
import { Type } from 'class-transformer';

@InputType()
export class EmployeeCreateManyManagerInputEnvelope {

    @Field(() => [EmployeeCreateManyManagerInput], {nullable:false})
    @Type(() => EmployeeCreateManyManagerInput)
    data!: Array<EmployeeCreateManyManagerInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
