import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class InventoryItemEntity {
  @Field(() => ID)
  id!: string;

  @Field()
  sku!: string;

  @Field()
  name!: string;

  @Field(() => Int)
  stock!: number;
}
