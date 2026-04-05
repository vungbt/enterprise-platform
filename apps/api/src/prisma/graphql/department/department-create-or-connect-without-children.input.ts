import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';
import { Type } from 'class-transformer';
import { DepartmentCreateWithoutChildrenInput } from './department-create-without-children.input';

@InputType()
export class DepartmentCreateOrConnectWithoutChildrenInput {

    @Field(() => DepartmentWhereUniqueInput, {nullable:false})
    @Type(() => DepartmentWhereUniqueInput)
    where!: Prisma.AtLeast<DepartmentWhereUniqueInput, 'id' | 'name'>;

    @Field(() => DepartmentCreateWithoutChildrenInput, {nullable:false})
    @Type(() => DepartmentCreateWithoutChildrenInput)
    create!: DepartmentCreateWithoutChildrenInput;
}
