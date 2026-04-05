import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input';
import { RoleScalarRelationFilter } from '../role/role-scalar-relation-filter.input';

@InputType()
export class UserRoleWhereInput {

    @Field(() => [UserRoleWhereInput], {nullable:true})
    AND?: Array<UserRoleWhereInput>;

    @Field(() => [UserRoleWhereInput], {nullable:true})
    OR?: Array<UserRoleWhereInput>;

    @Field(() => [UserRoleWhereInput], {nullable:true})
    NOT?: Array<UserRoleWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    roleId?: StringFilter;

    @Field(() => UserScalarRelationFilter, {nullable:true})
    user?: UserScalarRelationFilter;

    @Field(() => RoleScalarRelationFilter, {nullable:true})
    role?: RoleScalarRelationFilter;
}
