import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Club } from '../club/club.model';
import { FundContribution } from '../fund-contribution/fund-contribution.model';
import { Expense } from '../expense/expense.model';
import { FundTransaction } from '../fund-transaction/fund-transaction.model';
import { ClubFundCount } from './club-fund-count.output';

@ObjectType()
export class ClubFund {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    clubId!: string;

    @Field(() => String, {defaultValue:'Quy cau lac bo',nullable:false})
    name!: string;

    @Field(() => Float, {defaultValue:0,nullable:false})
    initialBalance!: number;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Date, {nullable:true})
    deletedAt!: Date | null;

    @Field(() => Club, {nullable:false})
    club?: Club;

    @Field(() => [FundContribution], {nullable:true})
    contributions?: Array<FundContribution>;

    @Field(() => [Expense], {nullable:true})
    expenses?: Array<Expense>;

    @Field(() => [FundTransaction], {nullable:true})
    transactions?: Array<FundTransaction>;

    @Field(() => ClubFundCount, {nullable:false})
    _count?: ClubFundCount;
}
