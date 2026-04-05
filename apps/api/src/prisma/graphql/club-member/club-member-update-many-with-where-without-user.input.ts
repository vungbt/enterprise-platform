import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubMemberScalarWhereInput } from './club-member-scalar-where.input';
import { Type } from 'class-transformer';
import { ClubMemberUpdateManyMutationInput } from './club-member-update-many-mutation.input';

@InputType()
export class ClubMemberUpdateManyWithWhereWithoutUserInput {

    @Field(() => ClubMemberScalarWhereInput, {nullable:false})
    @Type(() => ClubMemberScalarWhereInput)
    where!: ClubMemberScalarWhereInput;

    @Field(() => ClubMemberUpdateManyMutationInput, {nullable:false})
    @Type(() => ClubMemberUpdateManyMutationInput)
    data!: ClubMemberUpdateManyMutationInput;
}
