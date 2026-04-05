import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FundContributionScalarWhereInput } from './fund-contribution-scalar-where.input';
import { Type } from 'class-transformer';
import { FundContributionUpdateManyMutationInput } from './fund-contribution-update-many-mutation.input';

@InputType()
export class FundContributionUpdateManyWithWhereWithoutConfirmedByUserInput {

    @Field(() => FundContributionScalarWhereInput, {nullable:false})
    @Type(() => FundContributionScalarWhereInput)
    where!: FundContributionScalarWhereInput;

    @Field(() => FundContributionUpdateManyMutationInput, {nullable:false})
    @Type(() => FundContributionUpdateManyMutationInput)
    data!: FundContributionUpdateManyMutationInput;
}
