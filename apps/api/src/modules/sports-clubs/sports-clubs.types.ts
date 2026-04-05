import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ClubMemberRole } from '@/prisma/graphql/prisma/club-member-role.enum';
import { ClubMemberStatus } from '@/prisma/graphql/prisma/club-member-status.enum';

@InputType()
export class AddClubMemberInput {
  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  clubId!: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  userId!: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  displayName?: string | null;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsEmail()
  email?: string | null;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  phone?: string | null;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  note?: string | null;

  @Field(() => ClubMemberRole, { nullable: true })
  @IsOptional()
  @IsEnum(ClubMemberRole)
  role?: `${ClubMemberRole}`;

  @Field(() => ClubMemberStatus, { nullable: true })
  @IsOptional()
  @IsEnum(ClubMemberStatus)
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
