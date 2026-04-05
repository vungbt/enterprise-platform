import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { FundContributionStatus } from '../prisma/fund-contribution-status.enum';
import { ClubFund } from '../club-fund/club-fund.model';
import { User } from '../user/user.model';
import { FundTransaction } from '../fund-transaction/fund-transaction.model';
import { FundContributionCount } from './fund-contribution-count.output';

@ObjectType()
export class FundContribution {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    fundId!: string;

    @Field(() => String, {nullable:false})
    memberId!: string;

    @Field(() => Int, {nullable:true})
    month!: number | null;

    @Field(() => Int, {nullable:true})
    year!: number | null;

    @Field(() => Float, {nullable:false})
    amount!: number;

    @Field(() => String, {nullable:true})
    note!: string | null;

    @Field(() => Date, {nullable:false})
    paidAt!: Date;

    @Field(() => FundContributionStatus, {defaultValue:'pending',nullable:false})
    status!: `${FundContributionStatus}`;

    @Field(() => String, {nullable:true})
    confirmedBy!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => ClubFund, {nullable:false})
    fund?: ClubFund;

    @Field(() => User, {nullable:false})
    member?: User;

    @Field(() => User, {nullable:true})
    confirmedByUser?: User | null;

    @Field(() => [FundTransaction], {nullable:true})
    transactions?: Array<FundTransaction>;

    @Field(() => FundContributionCount, {nullable:false})
    _count?: FundContributionCount;
}
