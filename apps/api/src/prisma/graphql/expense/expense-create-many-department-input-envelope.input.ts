import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpenseCreateManyDepartmentInput } from './expense-create-many-department.input';
import { Type } from 'class-transformer';

@InputType()
export class ExpenseCreateManyDepartmentInputEnvelope {

    @Field(() => [ExpenseCreateManyDepartmentInput], {nullable:false})
    @Type(() => ExpenseCreateManyDepartmentInput)
    data!: Array<ExpenseCreateManyDepartmentInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
