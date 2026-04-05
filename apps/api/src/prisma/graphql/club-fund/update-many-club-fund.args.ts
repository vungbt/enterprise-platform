import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClubFundUpdateManyMutationInput } from './club-fund-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ClubFundWhereInput } from './club-fund-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyClubFundArgs {

    @Field(() => ClubFundUpdateManyMutationInput, {nullable:false})
    @Type(() => ClubFundUpdateManyMutationInput)
    data!: ClubFundUpdateManyMutationInput;

    @Field(() => ClubFundWhereInput, {nullable:true})
    @Type(() => ClubFundWhereInput)
    where?: ClubFundWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
