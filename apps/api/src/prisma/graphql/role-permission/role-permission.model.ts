import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Role } from '../role/role.model';

@ObjectType()
export class RolePermission {

    @Field(() => String, {nullable:false})
    roleId!: string;

    @Field(() => String, {nullable:false})
    permission!: string;

    @Field(() => Role, {nullable:false})
    role?: Role;
}
