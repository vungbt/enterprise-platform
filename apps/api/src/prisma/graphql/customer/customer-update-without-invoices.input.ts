import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerStatus } from '../prisma/customer-status.enum';
import { UserUpdateOneRequiredWithoutOwnedCustomersNestedInput } from '../user/user-update-one-required-without-owned-customers-nested.input';

@InputType()
export class CustomerUpdateWithoutInvoicesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    phone?: string;

    @Field(() => String, {nullable:true})
    company?: string;

    @Field(() => CustomerStatus, {nullable:true})
    status?: `${CustomerStatus}`;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserUpdateOneRequiredWithoutOwnedCustomersNestedInput, {nullable:true})
    owner?: UserUpdateOneRequiredWithoutOwnedCustomersNestedInput;
}
