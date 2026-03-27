import { Field, Float, InputType, Int } from '@nestjs/graphql';
import { InventoryItemStatus } from '../../../shared/graphql/enums';

@InputType()
export class CreateInventoryItemInput {
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

  @Field(() => InventoryItemStatus, { defaultValue: InventoryItemStatus.available })
  status!: InventoryItemStatus;
}
