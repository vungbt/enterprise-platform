import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';
import { Type } from 'class-transformer';
import { CustomerUpdateWithoutOwnerInput } from './customer-update-without-owner.input';

@InputType()
export class CustomerUpdateWithWhereUniqueWithoutOwnerInput {

    @Field(() => CustomerWhereUniqueInput, {nullable:false})
    @Type(() => CustomerWhereUniqueInput)
    where!: Prisma.AtLeast<CustomerWhereUniqueInput, 'id'>;

    @Field(() => CustomerUpdateWithoutOwnerInput, {nullable:false})
    @Type(() => CustomerUpdateWithoutOwnerInput)
    data!: CustomerUpdateWithoutOwnerInput;
}
