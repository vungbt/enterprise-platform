import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InvoiceStatus } from './invoice-status.enum';

@InputType()
export class EnumInvoiceStatusFieldUpdateOperationsInput {

    @Field(() => InvoiceStatus, {nullable:true})
    set?: `${InvoiceStatus}`;
}
