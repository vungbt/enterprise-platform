import { Field, InputType } from '@nestjs/graphql';
import { IsDate, IsEnum, IsOptional, IsString, MinLength } from 'class-validator';
import { ClubStatus } from '../../../shared/graphql/enums';

@InputType()
export class UpdateClubInput {
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  @MinLength(1)
  name?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  @MinLength(1)
  sport?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  description?: string;

  @Field(() => ClubStatus, { nullable: true })
  @IsOptional()
  @IsEnum(ClubStatus)
  status?: ClubStatus;

  @Field({ nullable: true })
  @IsOptional()
  @IsDate()
  foundedAt?: Date;
}
