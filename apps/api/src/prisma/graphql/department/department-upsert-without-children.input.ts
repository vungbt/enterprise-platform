import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentUpdateWithoutChildrenInput } from './department-update-without-children.input';
import { Type } from 'class-transformer';
import { DepartmentCreateWithoutChildrenInput } from './department-create-without-children.input';
import { DepartmentWhereInput } from './department-where.input';

@InputType()
export class DepartmentUpsertWithoutChildrenInput {

    @Field(() => DepartmentUpdateWithoutChildrenInput, {nullable:false})
    @Type(() => DepartmentUpdateWithoutChildrenInput)
    update!: DepartmentUpdateWithoutChildrenInput;

    @Field(() => DepartmentCreateWithoutChildrenInput, {nullable:false})
    @Type(() => DepartmentCreateWithoutChildrenInput)
    create!: DepartmentCreateWithoutChildrenInput;

    @Field(() => DepartmentWhereInput, {nullable:true})
    @Type(() => DepartmentWhereInput)
    where?: DepartmentWhereInput;
}
