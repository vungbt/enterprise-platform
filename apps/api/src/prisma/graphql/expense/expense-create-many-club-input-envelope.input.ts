import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpenseCreateManyClubInput } from './expense-create-many-club.input';
import { Type } from 'class-transformer';

@InputType()
export class ExpenseCreateManyClubInputEnvelope {

    @Field(() => [ExpenseCreateManyClubInput], {nullable:false})
    @Type(() => ExpenseCreateManyClubInput)
    data!: Array<ExpenseCreateManyClubInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
