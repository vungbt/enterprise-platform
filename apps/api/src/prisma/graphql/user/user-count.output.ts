import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserCount {

    @Field(() => Int, {nullable:false})
    roles?: number;

    @Field(() => Int, {nullable:false})
    employees?: number;

    @Field(() => Int, {nullable:false})
    ownedCustomers?: number;

    @Field(() => Int, {nullable:false})
    clubMemberships?: number;

    @Field(() => Int, {nullable:false})
    ownedClubs?: number;

    @Field(() => Int, {nullable:false})
    expenses?: number;

    @Field(() => Int, {nullable:false})
    fundContributions?: number;

    @Field(() => Int, {nullable:false})
    confirmedContributions?: number;

    @Field(() => Int, {nullable:false})
    fundTransactions?: number;
}
