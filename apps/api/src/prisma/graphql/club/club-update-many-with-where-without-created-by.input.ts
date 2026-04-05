import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubScalarWhereInput } from './club-scalar-where.input';
import { Type } from 'class-transformer';
import { ClubUpdateManyMutationInput } from './club-update-many-mutation.input';

@InputType()
export class ClubUpdateManyWithWhereWithoutCreatedByInput {

    @Field(() => ClubScalarWhereInput, {nullable:false})
    @Type(() => ClubScalarWhereInput)
    where!: ClubScalarWhereInput;

    @Field(() => ClubUpdateManyMutationInput, {nullable:false})
    @Type(() => ClubUpdateManyMutationInput)
    data!: ClubUpdateManyMutationInput;
}
