import { Field, InputType } from '@nestjs/graphql';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ClubStatus } from '../../../shared/graphql/enums';

@InputType()
export class CreateClubInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  name!: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  sport!: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  description?: string;

  @Field(() => ClubStatus, { defaultValue: ClubStatus.active })
  @IsEnum(ClubStatus)
  status!: ClubStatus;

  @Field({ nullable: true })
  @IsOptional()
  foundedAt?: Date;
}
