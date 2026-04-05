import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutConfirmedContributionsInput } from './user-update-without-confirmed-contributions.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutConfirmedContributionsInput } from './user-create-without-confirmed-contributions.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutConfirmedContributionsInput {

    @Field(() => UserUpdateWithoutConfirmedContributionsInput, {nullable:false})
    @Type(() => UserUpdateWithoutConfirmedContributionsInput)
    update!: UserUpdateWithoutConfirmedContributionsInput;

    @Field(() => UserCreateWithoutConfirmedContributionsInput, {nullable:false})
    @Type(() => UserCreateWithoutConfirmedContributionsInput)
    create!: UserCreateWithoutConfirmedContributionsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
