import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { RolePermissionCountOrderByAggregateInput } from './role-permission-count-order-by-aggregate.input';
import { RolePermissionMaxOrderByAggregateInput } from './role-permission-max-order-by-aggregate.input';
import { RolePermissionMinOrderByAggregateInput } from './role-permission-min-order-by-aggregate.input';

@InputType()
export class RolePermissionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    roleId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    permission?: `${SortOrder}`;

    @Field(() => RolePermissionCountOrderByAggregateInput, {nullable:true})
    _count?: RolePermissionCountOrderByAggregateInput;

    @Field(() => RolePermissionMaxOrderByAggregateInput, {nullable:true})
    _max?: RolePermissionMaxOrderByAggregateInput;

    @Field(() => RolePermissionMinOrderByAggregateInput, {nullable:true})
    _min?: RolePermissionMinOrderByAggregateInput;
}
