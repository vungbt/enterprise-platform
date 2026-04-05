import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRoleScalarWhereInput } from './user-role-scalar-where.input';
import { Type } from 'class-transformer';
import { UserRoleUncheckedUpdateManyWithoutRoleInput } from './user-role-unchecked-update-many-without-role.input';

@InputType()
export class UserRoleUpdateManyWithWhereWithoutRoleInput {

    @Field(() => UserRoleScalarWhereInput, {nullable:false})
    @Type(() => UserRoleScalarWhereInput)
    where!: UserRoleScalarWhereInput;

    @Field(() => UserRoleUncheckedUpdateManyWithoutRoleInput, {nullable:false})
    @Type(() => UserRoleUncheckedUpdateManyWithoutRoleInput)
    data!: UserRoleUncheckedUpdateManyWithoutRoleInput;
}
