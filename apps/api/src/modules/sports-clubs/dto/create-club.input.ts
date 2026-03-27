import { Field, InputType } from '@nestjs/graphql';
import { ClubStatus } from '../../../shared/graphql/enums';

@InputType()
export class CreateClubInput {
  @Field()
  name!: string;

  @Field()
  sport!: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => ClubStatus, { defaultValue: ClubStatus.active })
  status!: ClubStatus;

  @Field({ nullable: true })
  foundedAt?: Date;
}
