import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FundFlow } from './fund-flow.enum';

@InputType()
export class EnumFundFlowFieldUpdateOperationsInput {

    @Field(() => FundFlow, {nullable:true})
    set?: `${FundFlow}`;
}
