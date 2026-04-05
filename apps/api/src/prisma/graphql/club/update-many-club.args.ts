import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClubUpdateManyMutationInput } from './club-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ClubWhereInput } from './club-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyClubArgs {

    @Field(() => ClubUpdateManyMutationInput, {nullable:false})
    @Type(() => ClubUpdateManyMutationInput)
    data!: ClubUpdateManyMutationInput;

    @Field(() => ClubWhereInput, {nullable:true})
    @Type(() => ClubWhereInput)
    where?: ClubWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
