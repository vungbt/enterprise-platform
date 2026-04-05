import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutUserInput } from './employee-create-without-user.input';
import { Type } from 'class-transformer';
import { EmployeeCreateOrConnectWithoutUserInput } from './employee-create-or-connect-without-user.input';
import { EmployeeUpsertWithWhereUniqueWithoutUserInput } from './employee-upsert-with-where-unique-without-user.input';
import { EmployeeCreateManyUserInputEnvelope } from './employee-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeUpdateWithWhereUniqueWithoutUserInput } from './employee-update-with-where-unique-without-user.input';
import { EmployeeUpdateManyWithWhereWithoutUserInput } from './employee-update-many-with-where-without-user.input';
import { EmployeeScalarWhereInput } from './employee-scalar-where.input';

@InputType()
export class EmployeeUpdateManyWithoutUserNestedInput {

    @Field(() => [EmployeeCreateWithoutUserInput], {nullable:true})
    @Type(() => EmployeeCreateWithoutUserInput)
    create?: Array<EmployeeCreateWithoutUserInput>;

    @Field(() => [EmployeeCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => EmployeeCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<EmployeeCreateOrConnectWithoutUserInput>;

    @Field(() => [EmployeeUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => EmployeeUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<EmployeeUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => EmployeeCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => EmployeeCreateManyUserInputEnvelope)
    createMany?: EmployeeCreateManyUserInputEnvelope;

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    @Type(() => EmployeeWhereUniqueInput)
    set?: Array<Prisma.AtLeast<EmployeeWhereUniqueInput, 'id' | 'code' | 'email'>>;

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    @Type(() => EmployeeWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<EmployeeWhereUniqueInput, 'id' | 'code' | 'email'>>;

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    @Type(() => EmployeeWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<EmployeeWhereUniqueInput, 'id' | 'code' | 'email'>>;

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    @Type(() => EmployeeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<EmployeeWhereUniqueInput, 'id' | 'code' | 'email'>>;

    @Field(() => [EmployeeUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => EmployeeUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<EmployeeUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [EmployeeUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => EmployeeUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<EmployeeUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [EmployeeScalarWhereInput], {nullable:true})
    @Type(() => EmployeeScalarWhereInput)
    deleteMany?: Array<EmployeeScalarWhereInput>;
}
