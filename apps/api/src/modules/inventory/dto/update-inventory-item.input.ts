import { Field, Float, InputType, Int } from '@nestjs/graphql';
import { InventoryItemStatus } from '../../../shared/graphql/enums';

@InputType()
export class UpdateInventoryItemInput {
  @Field({ nullable: true })
  sku?: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  category?: string;

  @Field(() => Int, { nullable: true })
  stock?: number;

  @Field(() => Int, { nullable: true })
  minStock?: number;

  @Field({ nullable: true })
  unit?: string;

  @Field(() => Float, { nullable: true })
  price?: number;

  @Field(() => InventoryItemStatus, { nullable: true })
  status?: InventoryItemStatus;
}
