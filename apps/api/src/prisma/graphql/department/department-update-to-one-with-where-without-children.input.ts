import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentWhereInput } from './department-where.input';
import { Type } from 'class-transformer';
import { DepartmentUpdateWithoutChildrenInput } from './department-update-without-children.input';

@InputType()
export class DepartmentUpdateToOneWithWhereWithoutChildrenInput {

    @Field(() => DepartmentWhereInput, {nullable:true})
    @Type(() => DepartmentWhereInput)
    where?: DepartmentWhereInput;

    @Field(() => DepartmentUpdateWithoutChildrenInput, {nullable:false})
    @Type(() => DepartmentUpdateWithoutChildrenInput)
    data!: DepartmentUpdateWithoutChildrenInput;
}
