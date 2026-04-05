import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class RolePermissionScalarWhereWithAggregatesInput {

    @Field(() => [RolePermissionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<RolePermissionScalarWhereWithAggregatesInput>;

    @Field(() => [RolePermissionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<RolePermissionScalarWhereWithAggregatesInput>;

    @Field(() => [RolePermissionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<RolePermissionScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    roleId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    permission?: StringWithAggregatesFilter;
}
