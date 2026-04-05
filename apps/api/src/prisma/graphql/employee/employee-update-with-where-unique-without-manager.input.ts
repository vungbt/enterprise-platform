import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { Type } from 'class-transformer';
import { EmployeeUpdateWithoutManagerInput } from './employee-update-without-manager.input';

@InputType()
export class EmployeeUpdateWithWhereUniqueWithoutManagerInput {

    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    @Type(() => EmployeeWhereUniqueInput)
    where!: Prisma.AtLeast<EmployeeWhereUniqueInput, 'id' | 'code' | 'email'>;

    @Field(() => EmployeeUpdateWithoutManagerInput, {nullable:false})
    @Type(() => EmployeeUpdateWithoutManagerInput)
    data!: EmployeeUpdateWithoutManagerInput;
}
