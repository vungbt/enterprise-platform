import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ClubMemberCountOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    clubId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    role?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    joinedAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    leftAt?: `${SortOrder}`;
}
