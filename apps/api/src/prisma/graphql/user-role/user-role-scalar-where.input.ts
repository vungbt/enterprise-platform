import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class UserRoleScalarWhereInput {

    @Field(() => [UserRoleScalarWhereInput], {nullable:true})
    AND?: Array<UserRoleScalarWhereInput>;

    @Field(() => [UserRoleScalarWhereInput], {nullable:true})
    OR?: Array<UserRoleScalarWhereInput>;

    @Field(() => [UserRoleScalarWhereInput], {nullable:true})
    NOT?: Array<UserRoleScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    roleId?: StringFilter;
}
