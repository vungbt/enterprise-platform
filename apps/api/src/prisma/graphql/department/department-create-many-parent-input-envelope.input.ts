import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentCreateManyParentInput } from './department-create-many-parent.input';
import { Type } from 'class-transformer';

@InputType()
export class DepartmentCreateManyParentInputEnvelope {

    @Field(() => [DepartmentCreateManyParentInput], {nullable:false})
    @Type(() => DepartmentCreateManyParentInput)
    data!: Array<DepartmentCreateManyParentInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
