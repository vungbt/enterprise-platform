import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutFundContributionsInput } from './user-update-without-fund-contributions.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutFundContributionsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutFundContributionsInput, {nullable:false})
    @Type(() => UserUpdateWithoutFundContributionsInput)
    data!: UserUpdateWithoutFundContributionsInput;
}
