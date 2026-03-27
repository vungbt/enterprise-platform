import { Field, InputType } from '@nestjs/graphql';
import { ClubMemberRole } from '../../../shared/graphql/enums';

@InputType()
export class AddClubMemberInput {
  @Field()
  clubId!: string;

  @Field()
  userId!: string;

  @Field(() => ClubMemberRole, { defaultValue: ClubMemberRole.member })
  role!: ClubMemberRole;
}
