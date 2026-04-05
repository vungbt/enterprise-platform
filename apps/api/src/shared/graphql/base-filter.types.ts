import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, IsString } from 'class-validator';

@InputType({ isAbstract: true })
export class BaseFilterInput {
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  clubId?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  departmentId?: string;
}
