import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutFundContributionsInput } from './user-update-without-fund-contributions.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutFundContributionsInput } from './user-create-without-fund-contributions.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutFundContributionsInput {

    @Field(() => UserUpdateWithoutFundContributionsInput, {nullable:false})
    @Type(() => UserUpdateWithoutFundContributionsInput)
    update!: UserUpdateWithoutFundContributionsInput;

    @Field(() => UserCreateWithoutFundContributionsInput, {nullable:false})
    @Type(() => UserCreateWithoutFundContributionsInput)
    create!: UserCreateWithoutFundContributionsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
