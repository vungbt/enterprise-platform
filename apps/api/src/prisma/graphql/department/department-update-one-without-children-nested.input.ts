import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentCreateWithoutChildrenInput } from './department-create-without-children.input';
import { Type } from 'class-transformer';
import { DepartmentCreateOrConnectWithoutChildrenInput } from './department-create-or-connect-without-children.input';
import { DepartmentUpsertWithoutChildrenInput } from './department-upsert-without-children.input';
import { DepartmentWhereInput } from './department-where.input';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';
import { DepartmentUpdateToOneWithWhereWithoutChildrenInput } from './department-update-to-one-with-where-without-children.input';

@InputType()
export class DepartmentUpdateOneWithoutChildrenNestedInput {

    @Field(() => DepartmentCreateWithoutChildrenInput, {nullable:true})
    @Type(() => DepartmentCreateWithoutChildrenInput)
    create?: DepartmentCreateWithoutChildrenInput;

    @Field(() => DepartmentCreateOrConnectWithoutChildrenInput, {nullable:true})
    @Type(() => DepartmentCreateOrConnectWithoutChildrenInput)
    connectOrCreate?: DepartmentCreateOrConnectWithoutChildrenInput;

    @Field(() => DepartmentUpsertWithoutChildrenInput, {nullable:true})
    @Type(() => DepartmentUpsertWithoutChildrenInput)
    upsert?: DepartmentUpsertWithoutChildrenInput;

    @Field(() => DepartmentWhereInput, {nullable:true})
    @Type(() => DepartmentWhereInput)
    disconnect?: DepartmentWhereInput;

    @Field(() => DepartmentWhereInput, {nullable:true})
    @Type(() => DepartmentWhereInput)
    delete?: DepartmentWhereInput;

    @Field(() => DepartmentWhereUniqueInput, {nullable:true})
    @Type(() => DepartmentWhereUniqueInput)
    connect?: Prisma.AtLeast<DepartmentWhereUniqueInput, 'id' | 'name'>;

    @Field(() => DepartmentUpdateToOneWithWhereWithoutChildrenInput, {nullable:true})
    @Type(() => DepartmentUpdateToOneWithWhereWithoutChildrenInput)
    update?: DepartmentUpdateToOneWithWhereWithoutChildrenInput;
}
