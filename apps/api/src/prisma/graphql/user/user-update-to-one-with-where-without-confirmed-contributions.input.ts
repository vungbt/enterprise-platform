import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutConfirmedContributionsInput } from './user-update-without-confirmed-contributions.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutConfirmedContributionsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutConfirmedContributionsInput, {nullable:false})
    @Type(() => UserUpdateWithoutConfirmedContributionsInput)
    data!: UserUpdateWithoutConfirmedContributionsInput;
}
