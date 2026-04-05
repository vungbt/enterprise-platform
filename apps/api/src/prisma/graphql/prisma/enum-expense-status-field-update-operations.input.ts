import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpenseStatus } from './expense-status.enum';

@InputType()
export class EnumExpenseStatusFieldUpdateOperationsInput {

    @Field(() => ExpenseStatus, {nullable:true})
    set?: `${ExpenseStatus}`;
}
