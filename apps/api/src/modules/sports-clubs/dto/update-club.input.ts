import { Field, InputType } from '@nestjs/graphql';
import { ClubStatus } from '../../../shared/graphql/enums';

@InputType()
export class UpdateClubInput {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  sport?: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => ClubStatus, { nullable: true })
  status?: ClubStatus;

  @Field({ nullable: true })
  foundedAt?: Date;
}
