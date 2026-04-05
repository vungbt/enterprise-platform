import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ClubStatus } from '../prisma/club-status.enum';
import { ClubCountAggregate } from './club-count-aggregate.output';
import { ClubMinAggregate } from './club-min-aggregate.output';
import { ClubMaxAggregate } from './club-max-aggregate.output';

@ObjectType()
export class ClubGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    sport!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => ClubStatus, {nullable:false})
    status!: `${ClubStatus}`;

    @Field(() => Date, {nullable:true})
    foundedAt?: Date | string;

    @Field(() => String, {nullable:false})
    createdById!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => ClubCountAggregate, {nullable:true})
    _count?: ClubCountAggregate;

    @Field(() => ClubMinAggregate, {nullable:true})
    _min?: ClubMinAggregate;

    @Field(() => ClubMaxAggregate, {nullable:true})
    _max?: ClubMaxAggregate;
}
