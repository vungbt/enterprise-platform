import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FundTransactionScalarWhereInput } from './fund-transaction-scalar-where.input';
import { Type } from 'class-transformer';
import { FundTransactionUpdateManyMutationInput } from './fund-transaction-update-many-mutation.input';

@InputType()
export class FundTransactionUpdateManyWithWhereWithoutCreatedByInput {

    @Field(() => FundTransactionScalarWhereInput, {nullable:false})
    @Type(() => FundTransactionScalarWhereInput)
    where!: FundTransactionScalarWhereInput;

    @Field(() => FundTransactionUpdateManyMutationInput, {nullable:false})
    @Type(() => FundTransactionUpdateManyMutationInput)
    data!: FundTransactionUpdateManyMutationInput;
}
