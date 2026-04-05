import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';
import { Type } from 'class-transformer';
import { DepartmentCreateWithoutParentInput } from './department-create-without-parent.input';

@InputType()
export class DepartmentCreateOrConnectWithoutParentInput {

    @Field(() => DepartmentWhereUniqueInput, {nullable:false})
    @Type(() => DepartmentWhereUniqueInput)
    where!: Prisma.AtLeast<DepartmentWhereUniqueInput, 'id' | 'name'>;

    @Field(() => DepartmentCreateWithoutParentInput, {nullable:false})
    @Type(() => DepartmentCreateWithoutParentInput)
    create!: DepartmentCreateWithoutParentInput;
}
