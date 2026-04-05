import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCreateManyOwnerInput } from './customer-create-many-owner.input';
import { Type } from 'class-transformer';

@InputType()
export class CustomerCreateManyOwnerInputEnvelope {

    @Field(() => [CustomerCreateManyOwnerInput], {nullable:false})
    @Type(() => CustomerCreateManyOwnerInput)
    data!: Array<CustomerCreateManyOwnerInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
