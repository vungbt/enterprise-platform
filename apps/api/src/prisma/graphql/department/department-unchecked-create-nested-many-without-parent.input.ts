import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentCreateWithoutParentInput } from './department-create-without-parent.input';
import { Type } from 'class-transformer';
import { DepartmentCreateOrConnectWithoutParentInput } from './department-create-or-connect-without-parent.input';
import { DepartmentCreateManyParentInputEnvelope } from './department-create-many-parent-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';

@InputType()
export class DepartmentUncheckedCreateNestedManyWithoutParentInput {

    @Field(() => [DepartmentCreateWithoutParentInput], {nullable:true})
    @Type(() => DepartmentCreateWithoutParentInput)
    create?: Array<DepartmentCreateWithoutParentInput>;

    @Field(() => [DepartmentCreateOrConnectWithoutParentInput], {nullable:true})
    @Type(() => DepartmentCreateOrConnectWithoutParentInput)
    connectOrCreate?: Array<DepartmentCreateOrConnectWithoutParentInput>;

    @Field(() => DepartmentCreateManyParentInputEnvelope, {nullable:true})
    @Type(() => DepartmentCreateManyParentInputEnvelope)
    createMany?: DepartmentCreateManyParentInputEnvelope;

    @Field(() => [DepartmentWhereUniqueInput], {nullable:true})
    @Type(() => DepartmentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DepartmentWhereUniqueInput, 'id' | 'name'>>;
}
