import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { ClubStatus } from '../../../shared/graphql/enums';

@ObjectType()
export class ClubEntity {
  @Field(() => ID)
  id!: string;

  @Field()
  name!: string;

  @Field()
  sport!: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => ClubStatus)
  status!: ClubStatus;

  @Field({ nullable: true })
  foundedAt?: Date;

  @Field()
  createdAt!: Date;

  @Field()
  updatedAt!: Date;

  // Resolved fields — populated via @ResolveField in resolver
  @Field(() => Int)
  membersCount!: number;

  @Field({ nullable: true })
  captainName?: string;

  @Field(() => Int)
  fundBalance!: number;
}
