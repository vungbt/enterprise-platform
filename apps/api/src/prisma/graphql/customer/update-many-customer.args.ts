import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CustomerUpdateManyMutationInput } from './customer-update-many-mutation.input';
import { Type } from 'class-transformer';
import { CustomerWhereInput } from './customer-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyCustomerArgs {

    @Field(() => CustomerUpdateManyMutationInput, {nullable:false})
    @Type(() => CustomerUpdateManyMutationInput)
    data!: CustomerUpdateManyMutationInput;

    @Field(() => CustomerWhereInput, {nullable:true})
    @Type(() => CustomerWhereInput)
    where?: CustomerWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
