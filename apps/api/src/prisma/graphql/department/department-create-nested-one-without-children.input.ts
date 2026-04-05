import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentCreateWithoutChildrenInput } from './department-create-without-children.input';
import { Type } from 'class-transformer';
import { DepartmentCreateOrConnectWithoutChildrenInput } from './department-create-or-connect-without-children.input';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';

@InputType()
export class DepartmentCreateNestedOneWithoutChildrenInput {

    @Field(() => DepartmentCreateWithoutChildrenInput, {nullable:true})
    @Type(() => DepartmentCreateWithoutChildrenInput)
    create?: DepartmentCreateWithoutChildrenInput;

    @Field(() => DepartmentCreateOrConnectWithoutChildrenInput, {nullable:true})
    @Type(() => DepartmentCreateOrConnectWithoutChildrenInput)
    connectOrCreate?: DepartmentCreateOrConnectWithoutChildrenInput;

    @Field(() => DepartmentWhereUniqueInput, {nullable:true})
    @Type(() => DepartmentWhereUniqueInput)
    connect?: Prisma.AtLeast<DepartmentWhereUniqueInput, 'id' | 'name'>;
}
