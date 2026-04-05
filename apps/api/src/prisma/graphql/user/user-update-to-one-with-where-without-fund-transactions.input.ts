import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutFundTransactionsInput } from './user-update-without-fund-transactions.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutFundTransactionsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutFundTransactionsInput, {nullable:false})
    @Type(() => UserUpdateWithoutFundTransactionsInput)
    data!: UserUpdateWithoutFundTransactionsInput;
}
