import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { RolePermission } from '../role-permission/role-permission.model';
import { UserRole } from '../user-role/user-role.model';
import { RoleCount } from './role-count.output';

@ObjectType()
export class Role {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    label!: string;

    @Field(() => [RolePermission], {nullable:true})
    permissions?: Array<RolePermission>;

    @Field(() => [UserRole], {nullable:true})
    users?: Array<UserRole>;

    @Field(() => RoleCount, {nullable:false})
    _count?: RoleCount;
}
