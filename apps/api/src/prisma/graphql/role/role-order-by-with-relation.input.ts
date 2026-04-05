import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { RolePermissionOrderByRelationAggregateInput } from '../role-permission/role-permission-order-by-relation-aggregate.input';
import { UserRoleOrderByRelationAggregateInput } from '../user-role/user-role-order-by-relation-aggregate.input';

@InputType()
export class RoleOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    label?: `${SortOrder}`;

    @Field(() => RolePermissionOrderByRelationAggregateInput, {nullable:true})
    permissions?: RolePermissionOrderByRelationAggregateInput;

    @Field(() => UserRoleOrderByRelationAggregateInput, {nullable:true})
    users?: UserRoleOrderByRelationAggregateInput;
}
