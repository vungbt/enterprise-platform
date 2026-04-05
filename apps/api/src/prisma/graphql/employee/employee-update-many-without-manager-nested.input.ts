import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutManagerInput } from './employee-create-without-manager.input';
import { Type } from 'class-transformer';
import { EmployeeCreateOrConnectWithoutManagerInput } from './employee-create-or-connect-without-manager.input';
import { EmployeeUpsertWithWhereUniqueWithoutManagerInput } from './employee-upsert-with-where-unique-without-manager.input';
import { EmployeeCreateManyManagerInputEnvelope } from './employee-create-many-manager-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeUpdateWithWhereUniqueWithoutManagerInput } from './employee-update-with-where-unique-without-manager.input';
import { EmployeeUpdateManyWithWhereWithoutManagerInput } from './employee-update-many-with-where-without-manager.input';
import { EmployeeScalarWhereInput } from './employee-scalar-where.input';

@InputType()
export class EmployeeUpdateManyWithoutManagerNestedInput {

    @Field(() => [EmployeeCreateWithoutManagerInput], {nullable:true})
    @Type(() => EmployeeCreateWithoutManagerInput)
    create?: Array<EmployeeCreateWithoutManagerInput>;

    @Field(() => [EmployeeCreateOrConnectWithoutManagerInput], {nullable:true})
    @Type(() => EmployeeCreateOrConnectWithoutManagerInput)
    connectOrCreate?: Array<EmployeeCreateOrConnectWithoutManagerInput>;

    @Field(() => [EmployeeUpsertWithWhereUniqueWithoutManagerInput], {nullable:true})
    @Type(() => EmployeeUpsertWithWhereUniqueWithoutManagerInput)
    upsert?: Array<EmployeeUpsertWithWhereUniqueWithoutManagerInput>;

    @Field(() => EmployeeCreateManyManagerInputEnvelope, {nullable:true})
    @Type(() => EmployeeCreateManyManagerInputEnvelope)
    createMany?: EmployeeCreateManyManagerInputEnvelope;

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

    @Field(() => [EmployeeUpdateWithWhereUniqueWithoutManagerInput], {nullable:true})
    @Type(() => EmployeeUpdateWithWhereUniqueWithoutManagerInput)
    update?: Array<EmployeeUpdateWithWhereUniqueWithoutManagerInput>;

    @Field(() => [EmployeeUpdateManyWithWhereWithoutManagerInput], {nullable:true})
    @Type(() => EmployeeUpdateManyWithWhereWithoutManagerInput)
    updateMany?: Array<EmployeeUpdateManyWithWhereWithoutManagerInput>;

    @Field(() => [EmployeeScalarWhereInput], {nullable:true})
    @Type(() => EmployeeScalarWhereInput)
    deleteMany?: Array<EmployeeScalarWhereInput>;
}
