import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutFundTransactionsInput } from './user-update-without-fund-transactions.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutFundTransactionsInput } from './user-create-without-fund-transactions.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutFundTransactionsInput {

    @Field(() => UserUpdateWithoutFundTransactionsInput, {nullable:false})
    @Type(() => UserUpdateWithoutFundTransactionsInput)
    update!: UserUpdateWithoutFundTransactionsInput;

    @Field(() => UserCreateWithoutFundTransactionsInput, {nullable:false})
    @Type(() => UserCreateWithoutFundTransactionsInput)
    create!: UserCreateWithoutFundTransactionsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
