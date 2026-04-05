import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';
import { Type } from 'class-transformer';
import { CustomerCreateWithoutOwnerInput } from './customer-create-without-owner.input';

@InputType()
export class CustomerCreateOrConnectWithoutOwnerInput {

    @Field(() => CustomerWhereUniqueInput, {nullable:false})
    @Type(() => CustomerWhereUniqueInput)
    where!: Prisma.AtLeast<CustomerWhereUniqueInput, 'id'>;

    @Field(() => CustomerCreateWithoutOwnerInput, {nullable:false})
    @Type(() => CustomerCreateWithoutOwnerInput)
    create!: CustomerCreateWithoutOwnerInput;
}
