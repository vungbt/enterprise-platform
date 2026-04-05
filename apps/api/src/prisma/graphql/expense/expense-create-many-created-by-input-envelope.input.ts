import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpenseCreateManyCreatedByInput } from './expense-create-many-created-by.input';
import { Type } from 'class-transformer';

@InputType()
export class ExpenseCreateManyCreatedByInputEnvelope {

    @Field(() => [ExpenseCreateManyCreatedByInput], {nullable:false})
    @Type(() => ExpenseCreateManyCreatedByInput)
    data!: Array<ExpenseCreateManyCreatedByInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
