import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { ExpenseStatus } from '../prisma/expense-status.enum';
import { ExpenseCountAggregate } from './expense-count-aggregate.output';
import { ExpenseAvgAggregate } from './expense-avg-aggregate.output';
import { ExpenseSumAggregate } from './expense-sum-aggregate.output';
import { ExpenseMinAggregate } from './expense-min-aggregate.output';
import { ExpenseMaxAggregate } from './expense-max-aggregate.output';

@ObjectType()
export class ExpenseGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Float, {nullable:false})
    amount!: number;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:false})
    date!: Date | string;

    @Field(() => ExpenseStatus, {nullable:false})
    status!: `${ExpenseStatus}`;

    @Field(() => String, {nullable:false})
    categoryId!: string;

    @Field(() => String, {nullable:false})
    createdById!: string;

    @Field(() => String, {nullable:true})
    clubId?: string;

    @Field(() => String, {nullable:true})
    departmentId?: string;

    @Field(() => String, {nullable:true})
    fundId?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => ExpenseCountAggregate, {nullable:true})
    _count?: ExpenseCountAggregate;

    @Field(() => ExpenseAvgAggregate, {nullable:true})
    _avg?: ExpenseAvgAggregate;

    @Field(() => ExpenseSumAggregate, {nullable:true})
    _sum?: ExpenseSumAggregate;

    @Field(() => ExpenseMinAggregate, {nullable:true})
    _min?: ExpenseMinAggregate;

    @Field(() => ExpenseMaxAggregate, {nullable:true})
    _max?: ExpenseMaxAggregate;
}
