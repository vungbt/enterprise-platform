import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { Type } from 'class-transformer';
import { EmployeeUpdateWithoutUserInput } from './employee-update-without-user.input';

@InputType()
export class EmployeeUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    @Type(() => EmployeeWhereUniqueInput)
    where!: Prisma.AtLeast<EmployeeWhereUniqueInput, 'id' | 'code' | 'email'>;

    @Field(() => EmployeeUpdateWithoutUserInput, {nullable:false})
    @Type(() => EmployeeUpdateWithoutUserInput)
    data!: EmployeeUpdateWithoutUserInput;
}
