import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';
import { Type } from 'class-transformer';
import { DepartmentUpdateWithoutParentInput } from './department-update-without-parent.input';

@InputType()
export class DepartmentUpdateWithWhereUniqueWithoutParentInput {

    @Field(() => DepartmentWhereUniqueInput, {nullable:false})
    @Type(() => DepartmentWhereUniqueInput)
    where!: Prisma.AtLeast<DepartmentWhereUniqueInput, 'id' | 'name'>;

    @Field(() => DepartmentUpdateWithoutParentInput, {nullable:false})
    @Type(() => DepartmentUpdateWithoutParentInput)
    data!: DepartmentUpdateWithoutParentInput;
}
