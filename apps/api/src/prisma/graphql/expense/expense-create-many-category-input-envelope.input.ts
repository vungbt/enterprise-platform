import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpenseCreateManyCategoryInput } from './expense-create-many-category.input';
import { Type } from 'class-transformer';

@InputType()
export class ExpenseCreateManyCategoryInputEnvelope {

    @Field(() => [ExpenseCreateManyCategoryInput], {nullable:false})
    @Type(() => ExpenseCreateManyCategoryInput)
    data!: Array<ExpenseCreateManyCategoryInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
