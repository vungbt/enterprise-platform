import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ClubMemberClubIdUserIdCompoundUniqueInput {

    @Field(() => String, {nullable:false})
    clubId!: string;

    @Field(() => String, {nullable:false})
    userId!: string;
}
