import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRoleScalarWhereInput } from './user-role-scalar-where.input';
import { Type } from 'class-transformer';
import { UserRoleUncheckedUpdateManyWithoutUserInput } from './user-role-unchecked-update-many-without-user.input';

@InputType()
export class UserRoleUpdateManyWithWhereWithoutUserInput {

    @Field(() => UserRoleScalarWhereInput, {nullable:false})
    @Type(() => UserRoleScalarWhereInput)
    where!: UserRoleScalarWhereInput;

    @Field(() => UserRoleUncheckedUpdateManyWithoutUserInput, {nullable:false})
    @Type(() => UserRoleUncheckedUpdateManyWithoutUserInput)
    data!: UserRoleUncheckedUpdateManyWithoutUserInput;
}
