import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutEmployeesInput } from './user-update-without-employees.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutEmployeesInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutEmployeesInput, {nullable:false})
    @Type(() => UserUpdateWithoutEmployeesInput)
    data!: UserUpdateWithoutEmployeesInput;
}
