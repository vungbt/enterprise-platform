import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class UserRoleScalarWhereWithAggregatesInput {

    @Field(() => [UserRoleScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserRoleScalarWhereWithAggregatesInput>;

    @Field(() => [UserRoleScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserRoleScalarWhereWithAggregatesInput>;

    @Field(() => [UserRoleScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserRoleScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    roleId?: StringWithAggregatesFilter;
}
