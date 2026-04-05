import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubCreateManyCreatedByInput } from './club-create-many-created-by.input';
import { Type } from 'class-transformer';

@InputType()
export class ClubCreateManyCreatedByInputEnvelope {

    @Field(() => [ClubCreateManyCreatedByInput], {nullable:false})
    @Type(() => ClubCreateManyCreatedByInput)
    data!: Array<ClubCreateManyCreatedByInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
