import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutManagerInput } from './employee-create-without-manager.input';
import { Type } from 'class-transformer';
import { EmployeeCreateOrConnectWithoutManagerInput } from './employee-create-or-connect-without-manager.input';
import { EmployeeCreateManyManagerInputEnvelope } from './employee-create-many-manager-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';

@InputType()
export class EmployeeUncheckedCreateNestedManyWithoutManagerInput {

    @Field(() => [EmployeeCreateWithoutManagerInput], {nullable:true})
    @Type(() => EmployeeCreateWithoutManagerInput)
    create?: Array<EmployeeCreateWithoutManagerInput>;

    @Field(() => [EmployeeCreateOrConnectWithoutManagerInput], {nullable:true})
    @Type(() => EmployeeCreateOrConnectWithoutManagerInput)
    connectOrCreate?: Array<EmployeeCreateOrConnectWithoutManagerInput>;

    @Field(() => EmployeeCreateManyManagerInputEnvelope, {nullable:true})
    @Type(() => EmployeeCreateManyManagerInputEnvelope)
    createMany?: EmployeeCreateManyManagerInputEnvelope;

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    @Type(() => EmployeeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<EmployeeWhereUniqueInput, 'id' | 'code' | 'email'>>;
}
