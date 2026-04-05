/**
 * Sports clubs GraphQL surface.
 * - Re-export generated Prisma→GraphQL types from `@/prisma/graphql`.
 * - Custom `@InputType` / `@ObjectType` for this module live here (single convention).
 */
import { Field, InputType } from '@nestjs/graphql';
import { ClubMemberRole } from '@/prisma/graphql/prisma/club-member-role.enum';
import { ClubMemberStatus } from '@/prisma/graphql/prisma/club-member-status.enum';

@InputType()
export class AddClubMemberInput {
  @Field(() => String)
  clubId!: string;

  @Field(() => String)
  userId!: string;

  @Field(() => String, { nullable: true })
  displayName?: string | null;

  @Field(() => String, { nullable: true })
  email?: string | null;

  @Field(() => String, { nullable: true })
  phone?: string | null;

  @Field(() => String, { nullable: true })
  note?: string | null;

  @Field(() => ClubMemberRole, { nullable: true })
  role?: `${ClubMemberRole}`;

  @Field(() => ClubMemberStatus, { nullable: true })
  status?: `${ClubMemberStatus}`;
}

export {
  Club,
  ClubMember,
  ClubUncheckedCreateInput,
  ClubUncheckedUpdateInput,
  Expense,
  User,
} from '@/prisma/graphql';
