import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubFundCreateWithoutContributionsInput } from './club-fund-create-without-contributions.input';
import { Type } from 'class-transformer';
import { ClubFundCreateOrConnectWithoutContributionsInput } from './club-fund-create-or-connect-without-contributions.input';
import { Prisma } from '@prisma/client';
import { ClubFundWhereUniqueInput } from './club-fund-where-unique.input';

@InputType()
export class ClubFundCreateNestedOneWithoutContributionsInput {

    @Field(() => ClubFundCreateWithoutContributionsInput, {nullable:true})
    @Type(() => ClubFundCreateWithoutContributionsInput)
    create?: ClubFundCreateWithoutContributionsInput;

    @Field(() => ClubFundCreateOrConnectWithoutContributionsInput, {nullable:true})
    @Type(() => ClubFundCreateOrConnectWithoutContributionsInput)
    connectOrCreate?: ClubFundCreateOrConnectWithoutContributionsInput;

    @Field(() => ClubFundWhereUniqueInput, {nullable:true})
    @Type(() => ClubFundWhereUniqueInput)
    connect?: Prisma.AtLeast<ClubFundWhereUniqueInput, 'id' | 'clubId'>;
}
