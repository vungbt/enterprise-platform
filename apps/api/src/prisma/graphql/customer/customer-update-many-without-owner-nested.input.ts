import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCreateWithoutOwnerInput } from './customer-create-without-owner.input';
import { Type } from 'class-transformer';
import { CustomerCreateOrConnectWithoutOwnerInput } from './customer-create-or-connect-without-owner.input';
import { CustomerUpsertWithWhereUniqueWithoutOwnerInput } from './customer-upsert-with-where-unique-without-owner.input';
import { CustomerCreateManyOwnerInputEnvelope } from './customer-create-many-owner-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';
import { CustomerUpdateWithWhereUniqueWithoutOwnerInput } from './customer-update-with-where-unique-without-owner.input';
import { CustomerUpdateManyWithWhereWithoutOwnerInput } from './customer-update-many-with-where-without-owner.input';
import { CustomerScalarWhereInput } from './customer-scalar-where.input';

@InputType()
export class CustomerUpdateManyWithoutOwnerNestedInput {

    @Field(() => [CustomerCreateWithoutOwnerInput], {nullable:true})
    @Type(() => CustomerCreateWithoutOwnerInput)
    create?: Array<CustomerCreateWithoutOwnerInput>;

    @Field(() => [CustomerCreateOrConnectWithoutOwnerInput], {nullable:true})
    @Type(() => CustomerCreateOrConnectWithoutOwnerInput)
    connectOrCreate?: Array<CustomerCreateOrConnectWithoutOwnerInput>;

    @Field(() => [CustomerUpsertWithWhereUniqueWithoutOwnerInput], {nullable:true})
    @Type(() => CustomerUpsertWithWhereUniqueWithoutOwnerInput)
    upsert?: Array<CustomerUpsertWithWhereUniqueWithoutOwnerInput>;

    @Field(() => CustomerCreateManyOwnerInputEnvelope, {nullable:true})
    @Type(() => CustomerCreateManyOwnerInputEnvelope)
    createMany?: CustomerCreateManyOwnerInputEnvelope;

    @Field(() => [CustomerWhereUniqueInput], {nullable:true})
    @Type(() => CustomerWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CustomerWhereUniqueInput, 'id'>>;

    @Field(() => [CustomerWhereUniqueInput], {nullable:true})
    @Type(() => CustomerWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CustomerWhereUniqueInput, 'id'>>;

    @Field(() => [CustomerWhereUniqueInput], {nullable:true})
    @Type(() => CustomerWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CustomerWhereUniqueInput, 'id'>>;

    @Field(() => [CustomerWhereUniqueInput], {nullable:true})
    @Type(() => CustomerWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CustomerWhereUniqueInput, 'id'>>;

    @Field(() => [CustomerUpdateWithWhereUniqueWithoutOwnerInput], {nullable:true})
    @Type(() => CustomerUpdateWithWhereUniqueWithoutOwnerInput)
    update?: Array<CustomerUpdateWithWhereUniqueWithoutOwnerInput>;

    @Field(() => [CustomerUpdateManyWithWhereWithoutOwnerInput], {nullable:true})
    @Type(() => CustomerUpdateManyWithWhereWithoutOwnerInput)
    updateMany?: Array<CustomerUpdateManyWithWhereWithoutOwnerInput>;

    @Field(() => [CustomerScalarWhereInput], {nullable:true})
    @Type(() => CustomerScalarWhereInput)
    deleteMany?: Array<CustomerScalarWhereInput>;
}
