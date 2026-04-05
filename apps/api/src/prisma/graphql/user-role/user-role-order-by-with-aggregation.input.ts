import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserRoleCountOrderByAggregateInput } from './user-role-count-order-by-aggregate.input';
import { UserRoleMaxOrderByAggregateInput } from './user-role-max-order-by-aggregate.input';
import { UserRoleMinOrderByAggregateInput } from './user-role-min-order-by-aggregate.input';

@InputType()
export class UserRoleOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    roleId?: `${SortOrder}`;

    @Field(() => UserRoleCountOrderByAggregateInput, {nullable:true})
    _count?: UserRoleCountOrderByAggregateInput;

    @Field(() => UserRoleMaxOrderByAggregateInput, {nullable:true})
    _max?: UserRoleMaxOrderByAggregateInput;

    @Field(() => UserRoleMinOrderByAggregateInput, {nullable:true})
    _min?: UserRoleMinOrderByAggregateInput;
}
