import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ClubFundWhereUniqueInput } from './club-fund-where-unique.input';
import { Type } from 'class-transformer';
import { ClubFundCreateWithoutContributionsInput } from './club-fund-create-without-contributions.input';

@InputType()
export class ClubFundCreateOrConnectWithoutContributionsInput {

    @Field(() => ClubFundWhereUniqueInput, {nullable:false})
    @Type(() => ClubFundWhereUniqueInput)
    where!: Prisma.AtLeast<ClubFundWhereUniqueInput, 'id' | 'clubId'>;

    @Field(() => ClubFundCreateWithoutContributionsInput, {nullable:false})
    @Type(() => ClubFundCreateWithoutContributionsInput)
    create!: ClubFundCreateWithoutContributionsInput;
}
