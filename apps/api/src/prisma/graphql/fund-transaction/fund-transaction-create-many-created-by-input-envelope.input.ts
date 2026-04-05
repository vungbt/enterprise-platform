import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FundTransactionCreateManyCreatedByInput } from './fund-transaction-create-many-created-by.input';
import { Type } from 'class-transformer';

@InputType()
export class FundTransactionCreateManyCreatedByInputEnvelope {

    @Field(() => [FundTransactionCreateManyCreatedByInput], {nullable:false})
    @Type(() => FundTransactionCreateManyCreatedByInput)
    data!: Array<FundTransactionCreateManyCreatedByInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
