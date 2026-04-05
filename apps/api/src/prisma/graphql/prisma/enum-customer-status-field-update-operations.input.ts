import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerStatus } from './customer-status.enum';

@InputType()
export class EnumCustomerStatusFieldUpdateOperationsInput {

    @Field(() => CustomerStatus, {nullable:true})
    set?: `${CustomerStatus}`;
}
