import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ExpenseCategoryCount {

    @Field(() => Int, {nullable:false})
    expenses?: number;
}
