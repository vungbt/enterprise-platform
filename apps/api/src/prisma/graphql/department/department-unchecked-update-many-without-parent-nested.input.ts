import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentCreateWithoutParentInput } from './department-create-without-parent.input';
import { Type } from 'class-transformer';
import { DepartmentCreateOrConnectWithoutParentInput } from './department-create-or-connect-without-parent.input';
import { DepartmentUpsertWithWhereUniqueWithoutParentInput } from './department-upsert-with-where-unique-without-parent.input';
import { DepartmentCreateManyParentInputEnvelope } from './department-create-many-parent-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';
import { DepartmentUpdateWithWhereUniqueWithoutParentInput } from './department-update-with-where-unique-without-parent.input';
import { DepartmentUpdateManyWithWhereWithoutParentInput } from './department-update-many-with-where-without-parent.input';
import { DepartmentScalarWhereInput } from './department-scalar-where.input';

@InputType()
export class DepartmentUncheckedUpdateManyWithoutParentNestedInput {

    @Field(() => [DepartmentCreateWithoutParentInput], {nullable:true})
    @Type(() => DepartmentCreateWithoutParentInput)
    create?: Array<DepartmentCreateWithoutParentInput>;

    @Field(() => [DepartmentCreateOrConnectWithoutParentInput], {nullable:true})
    @Type(() => DepartmentCreateOrConnectWithoutParentInput)
    connectOrCreate?: Array<DepartmentCreateOrConnectWithoutParentInput>;

    @Field(() => [DepartmentUpsertWithWhereUniqueWithoutParentInput], {nullable:true})
    @Type(() => DepartmentUpsertWithWhereUniqueWithoutParentInput)
    upsert?: Array<DepartmentUpsertWithWhereUniqueWithoutParentInput>;

    @Field(() => DepartmentCreateManyParentInputEnvelope, {nullable:true})
    @Type(() => DepartmentCreateManyParentInputEnvelope)
    createMany?: DepartmentCreateManyParentInputEnvelope;

    @Field(() => [DepartmentWhereUniqueInput], {nullable:true})
    @Type(() => DepartmentWhereUniqueInput)
    set?: Array<Prisma.AtLeast<DepartmentWhereUniqueInput, 'id' | 'name'>>;

    @Field(() => [DepartmentWhereUniqueInput], {nullable:true})
    @Type(() => DepartmentWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<DepartmentWhereUniqueInput, 'id' | 'name'>>;

    @Field(() => [DepartmentWhereUniqueInput], {nullable:true})
    @Type(() => DepartmentWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<DepartmentWhereUniqueInput, 'id' | 'name'>>;

    @Field(() => [DepartmentWhereUniqueInput], {nullable:true})
    @Type(() => DepartmentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DepartmentWhereUniqueInput, 'id' | 'name'>>;

    @Field(() => [DepartmentUpdateWithWhereUniqueWithoutParentInput], {nullable:true})
    @Type(() => DepartmentUpdateWithWhereUniqueWithoutParentInput)
    update?: Array<DepartmentUpdateWithWhereUniqueWithoutParentInput>;

    @Field(() => [DepartmentUpdateManyWithWhereWithoutParentInput], {nullable:true})
    @Type(() => DepartmentUpdateManyWithWhereWithoutParentInput)
    updateMany?: Array<DepartmentUpdateManyWithWhereWithoutParentInput>;

    @Field(() => [DepartmentScalarWhereInput], {nullable:true})
    @Type(() => DepartmentScalarWhereInput)
    deleteMany?: Array<DepartmentScalarWhereInput>;
}
