import { Field, Float, ID, Int, ObjectType } from '@nestjs/graphql';
import { InventoryItemStatus } from '../../../shared/graphql/enums';

@ObjectType()
export class InventoryItemEntity {
  @Field(() => ID)
  id!: string;

  @Field()
  sku!: string;

  @Field()
  name!: string;

  @Field({ nullable: true })
  category?: string;

  @Field(() => Int)
  stock!: number;

  @Field(() => Int)
  minStock!: number;

  @Field()
  unit!: string;

  @Field(() => Float)
  price!: number;

  @Field(() => InventoryItemStatus)
  status!: InventoryItemStatus;

  @Field()
  createdAt!: Date;

  @Field()
  updatedAt!: Date;
}
