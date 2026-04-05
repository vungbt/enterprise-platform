import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FundContributionStatus } from './fund-contribution-status.enum';

@InputType()
export class EnumFundContributionStatusFieldUpdateOperationsInput {

    @Field(() => FundContributionStatus, {nullable:true})
    set?: `${FundContributionStatus}`;
}
