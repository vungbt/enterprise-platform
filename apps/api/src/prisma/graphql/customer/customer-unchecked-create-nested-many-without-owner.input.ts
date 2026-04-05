import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCreateWithoutOwnerInput } from './customer-create-without-owner.input';
import { Type } from 'class-transformer';
import { CustomerCreateOrConnectWithoutOwnerInput } from './customer-create-or-connect-without-owner.input';
import { CustomerCreateManyOwnerInputEnvelope } from './customer-create-many-owner-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';

@InputType()
export class CustomerUncheckedCreateNestedManyWithoutOwnerInput {

    @Field(() => [CustomerCreateWithoutOwnerInput], {nullable:true})
    @Type(() => CustomerCreateWithoutOwnerInput)
    create?: Array<CustomerCreateWithoutOwnerInput>;

    @Field(() => [CustomerCreateOrConnectWithoutOwnerInput], {nullable:true})
    @Type(() => CustomerCreateOrConnectWithoutOwnerInput)
    connectOrCreate?: Array<CustomerCreateOrConnectWithoutOwnerInput>;

    @Field(() => CustomerCreateManyOwnerInputEnvelope, {nullable:true})
    @Type(() => CustomerCreateManyOwnerInputEnvelope)
    createMany?: CustomerCreateManyOwnerInputEnvelope;

    @Field(() => [CustomerWhereUniqueInput], {nullable:true})
    @Type(() => CustomerWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CustomerWhereUniqueInput, 'id'>>;
}
