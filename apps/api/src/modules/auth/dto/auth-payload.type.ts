import { Field, ObjectType } from '@nestjs/graphql';
import { UserEntity } from '../../../shared/entities/user.entity';

@ObjectType()
export class AuthPayload {
  @Field()
  accessToken: string;

  @Field(() => UserEntity)
  user: UserEntity;
}
