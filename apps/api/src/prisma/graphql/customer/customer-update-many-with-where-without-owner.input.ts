import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerScalarWhereInput } from './customer-scalar-where.input';
import { Type } from 'class-transformer';
import { CustomerUpdateManyMutationInput } from './customer-update-many-mutation.input';

@InputType()
export class CustomerUpdateManyWithWhereWithoutOwnerInput {

    @Field(() => CustomerScalarWhereInput, {nullable:false})
    @Type(() => CustomerScalarWhereInput)
    where!: CustomerScalarWhereInput;

    @Field(() => CustomerUpdateManyMutationInput, {nullable:false})
    @Type(() => CustomerUpdateManyMutationInput)
    data!: CustomerUpdateManyMutationInput;
}
