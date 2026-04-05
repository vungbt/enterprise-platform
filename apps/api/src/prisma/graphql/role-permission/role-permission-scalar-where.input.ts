import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class RolePermissionScalarWhereInput {

    @Field(() => [RolePermissionScalarWhereInput], {nullable:true})
    AND?: Array<RolePermissionScalarWhereInput>;

    @Field(() => [RolePermissionScalarWhereInput], {nullable:true})
    OR?: Array<RolePermissionScalarWhereInput>;

    @Field(() => [RolePermissionScalarWhereInput], {nullable:true})
    NOT?: Array<RolePermissionScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    roleId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    permission?: StringFilter;
}
