import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ClubMemberStatus } from '@/prisma/graphql';

@InputType()
export class AddClubMemberInput {
  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  clubId!: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  userId?: string | null;

  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  displayName!: string;

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
