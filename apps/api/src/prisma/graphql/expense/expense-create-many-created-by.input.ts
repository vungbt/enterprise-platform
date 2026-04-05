import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { ExpenseStatus } from '../prisma/expense-status.enum';

@InputType()
export class ExpenseCreateManyCreatedByInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Float, {nullable:false})
    amount!: number;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:false})
    date!: Date | string;

    @Field(() => ExpenseStatus, {nullable:true})
    status?: `${ExpenseStatus}`;

    @Field(() => String, {nullable:false})
    categoryId!: string;

    @Field(() => String, {nullable:true})
    clubId?: string;

    @Field(() => String, {nullable:true})
    departmentId?: string;

    @Field(() => String, {nullable:true})
    fundId?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
}
