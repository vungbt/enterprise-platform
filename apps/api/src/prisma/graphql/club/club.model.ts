import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ClubStatus } from '../prisma/club-status.enum';
import { User } from '../user/user.model';
import { ClubMember } from '../club-member/club-member.model';
import { Expense } from '../expense/expense.model';
import { ClubFund } from '../club-fund/club-fund.model';
import { ClubCount } from './club-count.output';

@ObjectType()
export class Club {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    sport!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => ClubStatus, {defaultValue:'active',nullable:false})
    status!: `${ClubStatus}`;

    @Field(() => Date, {nullable:true})
    foundedAt!: Date | null;

    @Field(() => String, {nullable:false})
    createdById!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Date, {nullable:true})
    deletedAt!: Date | null;

    @Field(() => User, {nullable:false})
    createdBy?: User;

    @Field(() => [ClubMember], {nullable:true})
    members?: Array<ClubMember>;

    @Field(() => [Expense], {nullable:true})
    expenses?: Array<Expense>;

    @Field(() => ClubFund, {nullable:true})
    fund?: ClubFund | null;

    @Field(() => ClubCount, {nullable:false})
    _count?: ClubCount;
}
