import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { InvoiceStatus } from '../prisma/invoice-status.enum';
import { Customer } from '../customer/customer.model';

@ObjectType()
export class Invoice {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => Float, {nullable:false})
    amount!: number;

    @Field(() => Float, {defaultValue:0,nullable:false})
    tax!: number;

    @Field(() => Float, {nullable:false})
    total!: number;

    @Field(() => InvoiceStatus, {defaultValue:'draft',nullable:false})
    status!: `${InvoiceStatus}`;

    @Field(() => Date, {nullable:true})
    dueDate!: Date | null;

    @Field(() => Date, {nullable:true})
    issuedAt!: Date | null;

    @Field(() => String, {nullable:true})
    customerId!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Customer, {nullable:true})
    customer?: Customer | null;
}
