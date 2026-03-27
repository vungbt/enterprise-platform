import { Field, ObjectType } from '@nestjs/graphql';
import { ClubMemberRole } from '../../../shared/graphql/enums';

@ObjectType()
export class ClubMemberEntity {
  @Field()
  clubId!: string;

  @Field()
  userId!: string;

  @Field(() => ClubMemberRole)
  role!: ClubMemberRole;

  @Field()
  joinedAt!: Date;
}
