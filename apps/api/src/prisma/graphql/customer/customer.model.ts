import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { CustomerStatus } from '../prisma/customer-status.enum';
import { User } from '../user/user.model';
import { Invoice } from '../invoice/invoice.model';
import { CustomerCount } from './customer-count.output';

@ObjectType()
export class Customer {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    email!: string | null;

    @Field(() => String, {nullable:true})
    phone!: string | null;

    @Field(() => String, {nullable:true})
    company!: string | null;

    @Field(() => CustomerStatus, {defaultValue:'prospect',nullable:false})
    status!: `${CustomerStatus}`;

    @Field(() => String, {nullable:false})
    ownerId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => User, {nullable:false})
    owner?: User;

    @Field(() => [Invoice], {nullable:true})
    invoices?: Array<Invoice>;

    @Field(() => CustomerCount, {nullable:false})
    _count?: CustomerCount;
}
