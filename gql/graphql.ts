/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: string; output: string; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: Record<string, unknown>; output: Record<string, unknown>; }
};

export type AddClubMemberInput = {
  clubId: Scalars['String']['input'];
  displayName: Scalars['String']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ClubMemberStatus>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  accessToken: Scalars['String']['output'];
  user: User;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type Club = {
  __typename?: 'Club';
  _count: ClubCount;
  captainName?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy: User;
  createdById: Scalars['String']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  expenses?: Maybe<Array<Expense>>;
  foundedAt?: Maybe<Scalars['DateTime']['output']>;
  fund?: Maybe<ClubFund>;
  fundBalance: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  members?: Maybe<Array<ClubMember>>;
  membersCount: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  sport: Scalars['String']['output'];
  status: ClubStatus;
  updatedAt: Scalars['DateTime']['output'];
};

export type ClubCount = {
  __typename?: 'ClubCount';
  expenses: Scalars['Int']['output'];
  members: Scalars['Int']['output'];
};

export type ClubCountAggregate = {
  __typename?: 'ClubCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  createdById: Scalars['Int']['output'];
  deletedAt: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  foundedAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  sport: Scalars['Int']['output'];
  status: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type ClubCreateManyCreatedByInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  foundedAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  sport: Scalars['String']['input'];
  status?: InputMaybe<ClubStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ClubCreateManyCreatedByInputEnvelope = {
  data: Array<ClubCreateManyCreatedByInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ClubCreateNestedManyWithoutCreatedByInput = {
  connect?: InputMaybe<Array<ClubWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubCreateOrConnectWithoutCreatedByInput>>;
  create?: InputMaybe<Array<ClubCreateWithoutCreatedByInput>>;
  createMany?: InputMaybe<ClubCreateManyCreatedByInputEnvelope>;
};

export type ClubCreateNestedOneWithoutExpensesInput = {
  connect?: InputMaybe<ClubWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubCreateOrConnectWithoutExpensesInput>;
  create?: InputMaybe<ClubCreateWithoutExpensesInput>;
};

export type ClubCreateNestedOneWithoutFundInput = {
  connect?: InputMaybe<ClubWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubCreateOrConnectWithoutFundInput>;
  create?: InputMaybe<ClubCreateWithoutFundInput>;
};

export type ClubCreateNestedOneWithoutMembersInput = {
  connect?: InputMaybe<ClubWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubCreateOrConnectWithoutMembersInput>;
  create?: InputMaybe<ClubCreateWithoutMembersInput>;
};

export type ClubCreateOrConnectWithoutCreatedByInput = {
  create: ClubCreateWithoutCreatedByInput;
  where: ClubWhereUniqueInput;
};

export type ClubCreateOrConnectWithoutExpensesInput = {
  create: ClubCreateWithoutExpensesInput;
  where: ClubWhereUniqueInput;
};

export type ClubCreateOrConnectWithoutFundInput = {
  create: ClubCreateWithoutFundInput;
  where: ClubWhereUniqueInput;
};

export type ClubCreateOrConnectWithoutMembersInput = {
  create: ClubCreateWithoutMembersInput;
  where: ClubWhereUniqueInput;
};

export type ClubCreateWithoutCreatedByInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  expenses?: InputMaybe<ExpenseCreateNestedManyWithoutClubInput>;
  foundedAt?: InputMaybe<Scalars['DateTime']['input']>;
  fund?: InputMaybe<ClubFundCreateNestedOneWithoutClubInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  members?: InputMaybe<ClubMemberCreateNestedManyWithoutClubInput>;
  name: Scalars['String']['input'];
  sport: Scalars['String']['input'];
  status?: InputMaybe<ClubStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ClubCreateWithoutExpensesInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy: UserCreateNestedOneWithoutOwnedClubsInput;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  foundedAt?: InputMaybe<Scalars['DateTime']['input']>;
  fund?: InputMaybe<ClubFundCreateNestedOneWithoutClubInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  members?: InputMaybe<ClubMemberCreateNestedManyWithoutClubInput>;
  name: Scalars['String']['input'];
  sport: Scalars['String']['input'];
  status?: InputMaybe<ClubStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ClubCreateWithoutFundInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy: UserCreateNestedOneWithoutOwnedClubsInput;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  expenses?: InputMaybe<ExpenseCreateNestedManyWithoutClubInput>;
  foundedAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  members?: InputMaybe<ClubMemberCreateNestedManyWithoutClubInput>;
  name: Scalars['String']['input'];
  sport: Scalars['String']['input'];
  status?: InputMaybe<ClubStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ClubCreateWithoutMembersInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy: UserCreateNestedOneWithoutOwnedClubsInput;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  expenses?: InputMaybe<ExpenseCreateNestedManyWithoutClubInput>;
  foundedAt?: InputMaybe<Scalars['DateTime']['input']>;
  fund?: InputMaybe<ClubFundCreateNestedOneWithoutClubInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  sport: Scalars['String']['input'];
  status?: InputMaybe<ClubStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ClubFund = {
  __typename?: 'ClubFund';
  _count: ClubFundCount;
  club: Club;
  clubId: Scalars['String']['output'];
  contributions?: Maybe<Array<FundContribution>>;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  expenses?: Maybe<Array<Expense>>;
  id: Scalars['ID']['output'];
  initialBalance: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  transactions?: Maybe<Array<FundTransaction>>;
  updatedAt: Scalars['DateTime']['output'];
};

export type ClubFundAvgAggregate = {
  __typename?: 'ClubFundAvgAggregate';
  initialBalance?: Maybe<Scalars['Float']['output']>;
};

export type ClubFundCount = {
  __typename?: 'ClubFundCount';
  contributions: Scalars['Int']['output'];
  expenses: Scalars['Int']['output'];
  transactions: Scalars['Int']['output'];
};

export type ClubFundCountAggregate = {
  __typename?: 'ClubFundCountAggregate';
  _all: Scalars['Int']['output'];
  clubId: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  deletedAt: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  initialBalance: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type ClubFundCreateNestedOneWithoutClubInput = {
  connect?: InputMaybe<ClubFundWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubFundCreateOrConnectWithoutClubInput>;
  create?: InputMaybe<ClubFundCreateWithoutClubInput>;
};

export type ClubFundCreateNestedOneWithoutContributionsInput = {
  connect?: InputMaybe<ClubFundWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubFundCreateOrConnectWithoutContributionsInput>;
  create?: InputMaybe<ClubFundCreateWithoutContributionsInput>;
};

export type ClubFundCreateNestedOneWithoutExpensesInput = {
  connect?: InputMaybe<ClubFundWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubFundCreateOrConnectWithoutExpensesInput>;
  create?: InputMaybe<ClubFundCreateWithoutExpensesInput>;
};

export type ClubFundCreateNestedOneWithoutTransactionsInput = {
  connect?: InputMaybe<ClubFundWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubFundCreateOrConnectWithoutTransactionsInput>;
  create?: InputMaybe<ClubFundCreateWithoutTransactionsInput>;
};

export type ClubFundCreateOrConnectWithoutClubInput = {
  create: ClubFundCreateWithoutClubInput;
  where: ClubFundWhereUniqueInput;
};

export type ClubFundCreateOrConnectWithoutContributionsInput = {
  create: ClubFundCreateWithoutContributionsInput;
  where: ClubFundWhereUniqueInput;
};

export type ClubFundCreateOrConnectWithoutExpensesInput = {
  create: ClubFundCreateWithoutExpensesInput;
  where: ClubFundWhereUniqueInput;
};

export type ClubFundCreateOrConnectWithoutTransactionsInput = {
  create: ClubFundCreateWithoutTransactionsInput;
  where: ClubFundWhereUniqueInput;
};

export type ClubFundCreateWithoutClubInput = {
  contributions?: InputMaybe<FundContributionCreateNestedManyWithoutFundInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  expenses?: InputMaybe<ExpenseCreateNestedManyWithoutFundInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  initialBalance?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  transactions?: InputMaybe<FundTransactionCreateNestedManyWithoutFundInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ClubFundCreateWithoutContributionsInput = {
  club: ClubCreateNestedOneWithoutFundInput;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  expenses?: InputMaybe<ExpenseCreateNestedManyWithoutFundInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  initialBalance?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  transactions?: InputMaybe<FundTransactionCreateNestedManyWithoutFundInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ClubFundCreateWithoutExpensesInput = {
  club: ClubCreateNestedOneWithoutFundInput;
  contributions?: InputMaybe<FundContributionCreateNestedManyWithoutFundInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  initialBalance?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  transactions?: InputMaybe<FundTransactionCreateNestedManyWithoutFundInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ClubFundCreateWithoutTransactionsInput = {
  club: ClubCreateNestedOneWithoutFundInput;
  contributions?: InputMaybe<FundContributionCreateNestedManyWithoutFundInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  expenses?: InputMaybe<ExpenseCreateNestedManyWithoutFundInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  initialBalance?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ClubFundMaxAggregate = {
  __typename?: 'ClubFundMaxAggregate';
  clubId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  initialBalance?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ClubFundMinAggregate = {
  __typename?: 'ClubFundMinAggregate';
  clubId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  initialBalance?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ClubFundNullableScalarRelationFilter = {
  is?: InputMaybe<ClubFundWhereInput>;
  isNot?: InputMaybe<ClubFundWhereInput>;
};

export type ClubFundScalarRelationFilter = {
  is?: InputMaybe<ClubFundWhereInput>;
  isNot?: InputMaybe<ClubFundWhereInput>;
};

export type ClubFundSumAggregate = {
  __typename?: 'ClubFundSumAggregate';
  initialBalance?: Maybe<Scalars['Float']['output']>;
};

export type ClubFundUncheckedCreateNestedOneWithoutClubInput = {
  connect?: InputMaybe<ClubFundWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubFundCreateOrConnectWithoutClubInput>;
  create?: InputMaybe<ClubFundCreateWithoutClubInput>;
};

export type ClubFundUncheckedUpdateOneWithoutClubNestedInput = {
  connect?: InputMaybe<ClubFundWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubFundCreateOrConnectWithoutClubInput>;
  create?: InputMaybe<ClubFundCreateWithoutClubInput>;
  delete?: InputMaybe<ClubFundWhereInput>;
  disconnect?: InputMaybe<ClubFundWhereInput>;
  update?: InputMaybe<ClubFundUpdateToOneWithWhereWithoutClubInput>;
  upsert?: InputMaybe<ClubFundUpsertWithoutClubInput>;
};

export type ClubFundUpdateOneRequiredWithoutContributionsNestedInput = {
  connect?: InputMaybe<ClubFundWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubFundCreateOrConnectWithoutContributionsInput>;
  create?: InputMaybe<ClubFundCreateWithoutContributionsInput>;
  update?: InputMaybe<ClubFundUpdateToOneWithWhereWithoutContributionsInput>;
  upsert?: InputMaybe<ClubFundUpsertWithoutContributionsInput>;
};

export type ClubFundUpdateOneRequiredWithoutTransactionsNestedInput = {
  connect?: InputMaybe<ClubFundWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubFundCreateOrConnectWithoutTransactionsInput>;
  create?: InputMaybe<ClubFundCreateWithoutTransactionsInput>;
  update?: InputMaybe<ClubFundUpdateToOneWithWhereWithoutTransactionsInput>;
  upsert?: InputMaybe<ClubFundUpsertWithoutTransactionsInput>;
};

export type ClubFundUpdateOneWithoutClubNestedInput = {
  connect?: InputMaybe<ClubFundWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubFundCreateOrConnectWithoutClubInput>;
  create?: InputMaybe<ClubFundCreateWithoutClubInput>;
  delete?: InputMaybe<ClubFundWhereInput>;
  disconnect?: InputMaybe<ClubFundWhereInput>;
  update?: InputMaybe<ClubFundUpdateToOneWithWhereWithoutClubInput>;
  upsert?: InputMaybe<ClubFundUpsertWithoutClubInput>;
};

export type ClubFundUpdateOneWithoutExpensesNestedInput = {
  connect?: InputMaybe<ClubFundWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubFundCreateOrConnectWithoutExpensesInput>;
  create?: InputMaybe<ClubFundCreateWithoutExpensesInput>;
  delete?: InputMaybe<ClubFundWhereInput>;
  disconnect?: InputMaybe<ClubFundWhereInput>;
  update?: InputMaybe<ClubFundUpdateToOneWithWhereWithoutExpensesInput>;
  upsert?: InputMaybe<ClubFundUpsertWithoutExpensesInput>;
};

export type ClubFundUpdateToOneWithWhereWithoutClubInput = {
  data: ClubFundUpdateWithoutClubInput;
  where?: InputMaybe<ClubFundWhereInput>;
};

export type ClubFundUpdateToOneWithWhereWithoutContributionsInput = {
  data: ClubFundUpdateWithoutContributionsInput;
  where?: InputMaybe<ClubFundWhereInput>;
};

export type ClubFundUpdateToOneWithWhereWithoutExpensesInput = {
  data: ClubFundUpdateWithoutExpensesInput;
  where?: InputMaybe<ClubFundWhereInput>;
};

export type ClubFundUpdateToOneWithWhereWithoutTransactionsInput = {
  data: ClubFundUpdateWithoutTransactionsInput;
  where?: InputMaybe<ClubFundWhereInput>;
};

export type ClubFundUpdateWithoutClubInput = {
  contributions?: InputMaybe<FundContributionUpdateManyWithoutFundNestedInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  expenses?: InputMaybe<ExpenseUpdateManyWithoutFundNestedInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  initialBalance?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  transactions?: InputMaybe<FundTransactionUpdateManyWithoutFundNestedInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ClubFundUpdateWithoutContributionsInput = {
  club?: InputMaybe<ClubUpdateOneRequiredWithoutFundNestedInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  expenses?: InputMaybe<ExpenseUpdateManyWithoutFundNestedInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  initialBalance?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  transactions?: InputMaybe<FundTransactionUpdateManyWithoutFundNestedInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ClubFundUpdateWithoutExpensesInput = {
  club?: InputMaybe<ClubUpdateOneRequiredWithoutFundNestedInput>;
  contributions?: InputMaybe<FundContributionUpdateManyWithoutFundNestedInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  initialBalance?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  transactions?: InputMaybe<FundTransactionUpdateManyWithoutFundNestedInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ClubFundUpdateWithoutTransactionsInput = {
  club?: InputMaybe<ClubUpdateOneRequiredWithoutFundNestedInput>;
  contributions?: InputMaybe<FundContributionUpdateManyWithoutFundNestedInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  expenses?: InputMaybe<ExpenseUpdateManyWithoutFundNestedInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  initialBalance?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ClubFundUpsertWithoutClubInput = {
  create: ClubFundCreateWithoutClubInput;
  update: ClubFundUpdateWithoutClubInput;
  where?: InputMaybe<ClubFundWhereInput>;
};

export type ClubFundUpsertWithoutContributionsInput = {
  create: ClubFundCreateWithoutContributionsInput;
  update: ClubFundUpdateWithoutContributionsInput;
  where?: InputMaybe<ClubFundWhereInput>;
};

export type ClubFundUpsertWithoutExpensesInput = {
  create: ClubFundCreateWithoutExpensesInput;
  update: ClubFundUpdateWithoutExpensesInput;
  where?: InputMaybe<ClubFundWhereInput>;
};

export type ClubFundUpsertWithoutTransactionsInput = {
  create: ClubFundCreateWithoutTransactionsInput;
  update: ClubFundUpdateWithoutTransactionsInput;
  where?: InputMaybe<ClubFundWhereInput>;
};

export type ClubFundWhereInput = {
  AND?: InputMaybe<Array<ClubFundWhereInput>>;
  NOT?: InputMaybe<Array<ClubFundWhereInput>>;
  OR?: InputMaybe<Array<ClubFundWhereInput>>;
  club?: InputMaybe<ClubScalarRelationFilter>;
  clubId?: InputMaybe<StringFilter>;
  contributions?: InputMaybe<FundContributionListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  expenses?: InputMaybe<ExpenseListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  initialBalance?: InputMaybe<FloatFilter>;
  name?: InputMaybe<StringFilter>;
  transactions?: InputMaybe<FundTransactionListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ClubFundWhereUniqueInput = {
  AND?: InputMaybe<Array<ClubFundWhereInput>>;
  NOT?: InputMaybe<Array<ClubFundWhereInput>>;
  OR?: InputMaybe<Array<ClubFundWhereInput>>;
  club?: InputMaybe<ClubScalarRelationFilter>;
  clubId?: InputMaybe<Scalars['String']['input']>;
  contributions?: InputMaybe<FundContributionListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  expenses?: InputMaybe<ExpenseListRelationFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  initialBalance?: InputMaybe<FloatFilter>;
  name?: InputMaybe<StringFilter>;
  transactions?: InputMaybe<FundTransactionListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ClubListRelationFilter = {
  every?: InputMaybe<ClubWhereInput>;
  none?: InputMaybe<ClubWhereInput>;
  some?: InputMaybe<ClubWhereInput>;
};

export type ClubMaxAggregate = {
  __typename?: 'ClubMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdById?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  foundedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  sport?: Maybe<Scalars['String']['output']>;
  status?: Maybe<ClubStatus>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ClubMember = {
  __typename?: 'ClubMember';
  _count: ClubMemberCount;
  club: Club;
  clubId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  displayName: Scalars['String']['output'];
  email?: Maybe<Scalars['String']['output']>;
  fundContributions?: Maybe<Array<FundContribution>>;
  id: Scalars['ID']['output'];
  note?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  status: ClubMemberStatus;
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type ClubMemberClubIdUserIdCompoundUniqueInput = {
  clubId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type ClubMemberCount = {
  __typename?: 'ClubMemberCount';
  fundContributions: Scalars['Int']['output'];
};

export type ClubMemberCountAggregate = {
  __typename?: 'ClubMemberCountAggregate';
  _all: Scalars['Int']['output'];
  clubId: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  displayName: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  note: Scalars['Int']['output'];
  phone: Scalars['Int']['output'];
  status: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type ClubMemberCreateManyClubInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  displayName: Scalars['String']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ClubMemberStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type ClubMemberCreateManyClubInputEnvelope = {
  data: Array<ClubMemberCreateManyClubInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ClubMemberCreateManyUserInput = {
  clubId: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  displayName: Scalars['String']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ClubMemberStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ClubMemberCreateManyUserInputEnvelope = {
  data: Array<ClubMemberCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ClubMemberCreateNestedManyWithoutClubInput = {
  connect?: InputMaybe<Array<ClubMemberWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubMemberCreateOrConnectWithoutClubInput>>;
  create?: InputMaybe<Array<ClubMemberCreateWithoutClubInput>>;
  createMany?: InputMaybe<ClubMemberCreateManyClubInputEnvelope>;
};

export type ClubMemberCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<ClubMemberWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubMemberCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ClubMemberCreateWithoutUserInput>>;
  createMany?: InputMaybe<ClubMemberCreateManyUserInputEnvelope>;
};

export type ClubMemberCreateNestedOneWithoutFundContributionsInput = {
  connect?: InputMaybe<ClubMemberWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubMemberCreateOrConnectWithoutFundContributionsInput>;
  create?: InputMaybe<ClubMemberCreateWithoutFundContributionsInput>;
};

export type ClubMemberCreateOrConnectWithoutClubInput = {
  create: ClubMemberCreateWithoutClubInput;
  where: ClubMemberWhereUniqueInput;
};

export type ClubMemberCreateOrConnectWithoutFundContributionsInput = {
  create: ClubMemberCreateWithoutFundContributionsInput;
  where: ClubMemberWhereUniqueInput;
};

export type ClubMemberCreateOrConnectWithoutUserInput = {
  create: ClubMemberCreateWithoutUserInput;
  where: ClubMemberWhereUniqueInput;
};

export type ClubMemberCreateWithoutClubInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  displayName: Scalars['String']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  fundContributions?: InputMaybe<FundContributionCreateNestedManyWithoutClubMemberInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ClubMemberStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<UserCreateNestedOneWithoutClubMembershipsInput>;
};

export type ClubMemberCreateWithoutFundContributionsInput = {
  club: ClubCreateNestedOneWithoutMembersInput;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  displayName: Scalars['String']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ClubMemberStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<UserCreateNestedOneWithoutClubMembershipsInput>;
};

export type ClubMemberCreateWithoutUserInput = {
  club: ClubCreateNestedOneWithoutMembersInput;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  displayName: Scalars['String']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  fundContributions?: InputMaybe<FundContributionCreateNestedManyWithoutClubMemberInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ClubMemberStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ClubMemberListRelationFilter = {
  every?: InputMaybe<ClubMemberWhereInput>;
  none?: InputMaybe<ClubMemberWhereInput>;
  some?: InputMaybe<ClubMemberWhereInput>;
};

export type ClubMemberMaxAggregate = {
  __typename?: 'ClubMemberMaxAggregate';
  clubId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  status?: Maybe<ClubMemberStatus>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type ClubMemberMinAggregate = {
  __typename?: 'ClubMemberMinAggregate';
  clubId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  status?: Maybe<ClubMemberStatus>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type ClubMemberScalarRelationFilter = {
  is?: InputMaybe<ClubMemberWhereInput>;
  isNot?: InputMaybe<ClubMemberWhereInput>;
};

export type ClubMemberScalarWhereInput = {
  AND?: InputMaybe<Array<ClubMemberScalarWhereInput>>;
  NOT?: InputMaybe<Array<ClubMemberScalarWhereInput>>;
  OR?: InputMaybe<Array<ClubMemberScalarWhereInput>>;
  clubId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  displayName?: InputMaybe<StringFilter>;
  email?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  note?: InputMaybe<StringNullableFilter>;
  phone?: InputMaybe<StringNullableFilter>;
  status?: InputMaybe<EnumClubMemberStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringNullableFilter>;
};

export enum ClubMemberStatus {
  Active = 'active',
  Banned = 'banned',
  Left = 'left'
}

export type ClubMemberUncheckedCreateNestedManyWithoutClubInput = {
  connect?: InputMaybe<Array<ClubMemberWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubMemberCreateOrConnectWithoutClubInput>>;
  create?: InputMaybe<Array<ClubMemberCreateWithoutClubInput>>;
  createMany?: InputMaybe<ClubMemberCreateManyClubInputEnvelope>;
};

export type ClubMemberUncheckedUpdateManyWithoutClubNestedInput = {
  connect?: InputMaybe<Array<ClubMemberWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubMemberCreateOrConnectWithoutClubInput>>;
  create?: InputMaybe<Array<ClubMemberCreateWithoutClubInput>>;
  createMany?: InputMaybe<ClubMemberCreateManyClubInputEnvelope>;
  delete?: InputMaybe<Array<ClubMemberWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ClubMemberScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ClubMemberWhereUniqueInput>>;
  set?: InputMaybe<Array<ClubMemberWhereUniqueInput>>;
  update?: InputMaybe<Array<ClubMemberUpdateWithWhereUniqueWithoutClubInput>>;
  updateMany?: InputMaybe<Array<ClubMemberUpdateManyWithWhereWithoutClubInput>>;
  upsert?: InputMaybe<Array<ClubMemberUpsertWithWhereUniqueWithoutClubInput>>;
};

export type ClubMemberUpdateManyMutationInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ClubMemberStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ClubMemberUpdateManyWithWhereWithoutClubInput = {
  data: ClubMemberUpdateManyMutationInput;
  where: ClubMemberScalarWhereInput;
};

export type ClubMemberUpdateManyWithWhereWithoutUserInput = {
  data: ClubMemberUpdateManyMutationInput;
  where: ClubMemberScalarWhereInput;
};

export type ClubMemberUpdateManyWithoutClubNestedInput = {
  connect?: InputMaybe<Array<ClubMemberWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubMemberCreateOrConnectWithoutClubInput>>;
  create?: InputMaybe<Array<ClubMemberCreateWithoutClubInput>>;
  createMany?: InputMaybe<ClubMemberCreateManyClubInputEnvelope>;
  delete?: InputMaybe<Array<ClubMemberWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ClubMemberScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ClubMemberWhereUniqueInput>>;
  set?: InputMaybe<Array<ClubMemberWhereUniqueInput>>;
  update?: InputMaybe<Array<ClubMemberUpdateWithWhereUniqueWithoutClubInput>>;
  updateMany?: InputMaybe<Array<ClubMemberUpdateManyWithWhereWithoutClubInput>>;
  upsert?: InputMaybe<Array<ClubMemberUpsertWithWhereUniqueWithoutClubInput>>;
};

export type ClubMemberUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<ClubMemberWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubMemberCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ClubMemberCreateWithoutUserInput>>;
  createMany?: InputMaybe<ClubMemberCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<ClubMemberWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ClubMemberScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ClubMemberWhereUniqueInput>>;
  set?: InputMaybe<Array<ClubMemberWhereUniqueInput>>;
  update?: InputMaybe<Array<ClubMemberUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<ClubMemberUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<ClubMemberUpsertWithWhereUniqueWithoutUserInput>>;
};

export type ClubMemberUpdateOneRequiredWithoutFundContributionsNestedInput = {
  connect?: InputMaybe<ClubMemberWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubMemberCreateOrConnectWithoutFundContributionsInput>;
  create?: InputMaybe<ClubMemberCreateWithoutFundContributionsInput>;
  update?: InputMaybe<ClubMemberUpdateToOneWithWhereWithoutFundContributionsInput>;
  upsert?: InputMaybe<ClubMemberUpsertWithoutFundContributionsInput>;
};

export type ClubMemberUpdateToOneWithWhereWithoutFundContributionsInput = {
  data: ClubMemberUpdateWithoutFundContributionsInput;
  where?: InputMaybe<ClubMemberWhereInput>;
};

export type ClubMemberUpdateWithWhereUniqueWithoutClubInput = {
  data: ClubMemberUpdateWithoutClubInput;
  where: ClubMemberWhereUniqueInput;
};

export type ClubMemberUpdateWithWhereUniqueWithoutUserInput = {
  data: ClubMemberUpdateWithoutUserInput;
  where: ClubMemberWhereUniqueInput;
};

export type ClubMemberUpdateWithoutClubInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  fundContributions?: InputMaybe<FundContributionUpdateManyWithoutClubMemberNestedInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ClubMemberStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<UserUpdateOneWithoutClubMembershipsNestedInput>;
};

export type ClubMemberUpdateWithoutFundContributionsInput = {
  club?: InputMaybe<ClubUpdateOneRequiredWithoutMembersNestedInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ClubMemberStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<UserUpdateOneWithoutClubMembershipsNestedInput>;
};

export type ClubMemberUpdateWithoutUserInput = {
  club?: InputMaybe<ClubUpdateOneRequiredWithoutMembersNestedInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  fundContributions?: InputMaybe<FundContributionUpdateManyWithoutClubMemberNestedInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ClubMemberStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ClubMemberUpsertWithWhereUniqueWithoutClubInput = {
  create: ClubMemberCreateWithoutClubInput;
  update: ClubMemberUpdateWithoutClubInput;
  where: ClubMemberWhereUniqueInput;
};

export type ClubMemberUpsertWithWhereUniqueWithoutUserInput = {
  create: ClubMemberCreateWithoutUserInput;
  update: ClubMemberUpdateWithoutUserInput;
  where: ClubMemberWhereUniqueInput;
};

export type ClubMemberUpsertWithoutFundContributionsInput = {
  create: ClubMemberCreateWithoutFundContributionsInput;
  update: ClubMemberUpdateWithoutFundContributionsInput;
  where?: InputMaybe<ClubMemberWhereInput>;
};

export type ClubMemberWhereInput = {
  AND?: InputMaybe<Array<ClubMemberWhereInput>>;
  NOT?: InputMaybe<Array<ClubMemberWhereInput>>;
  OR?: InputMaybe<Array<ClubMemberWhereInput>>;
  club?: InputMaybe<ClubScalarRelationFilter>;
  clubId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  displayName?: InputMaybe<StringFilter>;
  email?: InputMaybe<StringNullableFilter>;
  fundContributions?: InputMaybe<FundContributionListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  note?: InputMaybe<StringNullableFilter>;
  phone?: InputMaybe<StringNullableFilter>;
  status?: InputMaybe<EnumClubMemberStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserNullableScalarRelationFilter>;
  userId?: InputMaybe<StringNullableFilter>;
};

export type ClubMemberWhereUniqueInput = {
  AND?: InputMaybe<Array<ClubMemberWhereInput>>;
  NOT?: InputMaybe<Array<ClubMemberWhereInput>>;
  OR?: InputMaybe<Array<ClubMemberWhereInput>>;
  club?: InputMaybe<ClubScalarRelationFilter>;
  clubId?: InputMaybe<StringFilter>;
  clubId_userId?: InputMaybe<ClubMemberClubIdUserIdCompoundUniqueInput>;
  createdAt?: InputMaybe<DateTimeFilter>;
  displayName?: InputMaybe<StringFilter>;
  email?: InputMaybe<StringNullableFilter>;
  fundContributions?: InputMaybe<FundContributionListRelationFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<StringNullableFilter>;
  phone?: InputMaybe<StringNullableFilter>;
  status?: InputMaybe<EnumClubMemberStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserNullableScalarRelationFilter>;
  userId?: InputMaybe<StringNullableFilter>;
};

export type ClubMinAggregate = {
  __typename?: 'ClubMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdById?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  foundedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  sport?: Maybe<Scalars['String']['output']>;
  status?: Maybe<ClubStatus>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ClubNullableScalarRelationFilter = {
  is?: InputMaybe<ClubWhereInput>;
  isNot?: InputMaybe<ClubWhereInput>;
};

export type ClubScalarRelationFilter = {
  is?: InputMaybe<ClubWhereInput>;
  isNot?: InputMaybe<ClubWhereInput>;
};

export type ClubScalarWhereInput = {
  AND?: InputMaybe<Array<ClubScalarWhereInput>>;
  NOT?: InputMaybe<Array<ClubScalarWhereInput>>;
  OR?: InputMaybe<Array<ClubScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<StringFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  foundedAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  sport?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumClubStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export enum ClubStatus {
  Active = 'active',
  Inactive = 'inactive'
}

export type ClubUncheckedCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdById: Scalars['String']['input'];
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  expenses?: InputMaybe<ExpenseUncheckedCreateNestedManyWithoutClubInput>;
  foundedAt?: InputMaybe<Scalars['DateTime']['input']>;
  fund?: InputMaybe<ClubFundUncheckedCreateNestedOneWithoutClubInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  members?: InputMaybe<ClubMemberUncheckedCreateNestedManyWithoutClubInput>;
  name: Scalars['String']['input'];
  sport: Scalars['String']['input'];
  status?: InputMaybe<ClubStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ClubUncheckedUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdById?: InputMaybe<Scalars['String']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  expenses?: InputMaybe<ExpenseUncheckedUpdateManyWithoutClubNestedInput>;
  foundedAt?: InputMaybe<Scalars['DateTime']['input']>;
  fund?: InputMaybe<ClubFundUncheckedUpdateOneWithoutClubNestedInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  members?: InputMaybe<ClubMemberUncheckedUpdateManyWithoutClubNestedInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  sport?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ClubStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ClubUpdateManyMutationInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  foundedAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sport?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ClubStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ClubUpdateManyWithWhereWithoutCreatedByInput = {
  data: ClubUpdateManyMutationInput;
  where: ClubScalarWhereInput;
};

export type ClubUpdateManyWithoutCreatedByNestedInput = {
  connect?: InputMaybe<Array<ClubWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubCreateOrConnectWithoutCreatedByInput>>;
  create?: InputMaybe<Array<ClubCreateWithoutCreatedByInput>>;
  createMany?: InputMaybe<ClubCreateManyCreatedByInputEnvelope>;
  delete?: InputMaybe<Array<ClubWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ClubScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ClubWhereUniqueInput>>;
  set?: InputMaybe<Array<ClubWhereUniqueInput>>;
  update?: InputMaybe<Array<ClubUpdateWithWhereUniqueWithoutCreatedByInput>>;
  updateMany?: InputMaybe<Array<ClubUpdateManyWithWhereWithoutCreatedByInput>>;
  upsert?: InputMaybe<Array<ClubUpsertWithWhereUniqueWithoutCreatedByInput>>;
};

export type ClubUpdateOneRequiredWithoutFundNestedInput = {
  connect?: InputMaybe<ClubWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubCreateOrConnectWithoutFundInput>;
  create?: InputMaybe<ClubCreateWithoutFundInput>;
  update?: InputMaybe<ClubUpdateToOneWithWhereWithoutFundInput>;
  upsert?: InputMaybe<ClubUpsertWithoutFundInput>;
};

export type ClubUpdateOneRequiredWithoutMembersNestedInput = {
  connect?: InputMaybe<ClubWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubCreateOrConnectWithoutMembersInput>;
  create?: InputMaybe<ClubCreateWithoutMembersInput>;
  update?: InputMaybe<ClubUpdateToOneWithWhereWithoutMembersInput>;
  upsert?: InputMaybe<ClubUpsertWithoutMembersInput>;
};

export type ClubUpdateOneWithoutExpensesNestedInput = {
  connect?: InputMaybe<ClubWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubCreateOrConnectWithoutExpensesInput>;
  create?: InputMaybe<ClubCreateWithoutExpensesInput>;
  delete?: InputMaybe<ClubWhereInput>;
  disconnect?: InputMaybe<ClubWhereInput>;
  update?: InputMaybe<ClubUpdateToOneWithWhereWithoutExpensesInput>;
  upsert?: InputMaybe<ClubUpsertWithoutExpensesInput>;
};

export type ClubUpdateToOneWithWhereWithoutExpensesInput = {
  data: ClubUpdateWithoutExpensesInput;
  where?: InputMaybe<ClubWhereInput>;
};

export type ClubUpdateToOneWithWhereWithoutFundInput = {
  data: ClubUpdateWithoutFundInput;
  where?: InputMaybe<ClubWhereInput>;
};

export type ClubUpdateToOneWithWhereWithoutMembersInput = {
  data: ClubUpdateWithoutMembersInput;
  where?: InputMaybe<ClubWhereInput>;
};

export type ClubUpdateWithWhereUniqueWithoutCreatedByInput = {
  data: ClubUpdateWithoutCreatedByInput;
  where: ClubWhereUniqueInput;
};

export type ClubUpdateWithoutCreatedByInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  expenses?: InputMaybe<ExpenseUpdateManyWithoutClubNestedInput>;
  foundedAt?: InputMaybe<Scalars['DateTime']['input']>;
  fund?: InputMaybe<ClubFundUpdateOneWithoutClubNestedInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  members?: InputMaybe<ClubMemberUpdateManyWithoutClubNestedInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  sport?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ClubStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ClubUpdateWithoutExpensesInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<UserUpdateOneRequiredWithoutOwnedClubsNestedInput>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  foundedAt?: InputMaybe<Scalars['DateTime']['input']>;
  fund?: InputMaybe<ClubFundUpdateOneWithoutClubNestedInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  members?: InputMaybe<ClubMemberUpdateManyWithoutClubNestedInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  sport?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ClubStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ClubUpdateWithoutFundInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<UserUpdateOneRequiredWithoutOwnedClubsNestedInput>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  expenses?: InputMaybe<ExpenseUpdateManyWithoutClubNestedInput>;
  foundedAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  members?: InputMaybe<ClubMemberUpdateManyWithoutClubNestedInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  sport?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ClubStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ClubUpdateWithoutMembersInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<UserUpdateOneRequiredWithoutOwnedClubsNestedInput>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  expenses?: InputMaybe<ExpenseUpdateManyWithoutClubNestedInput>;
  foundedAt?: InputMaybe<Scalars['DateTime']['input']>;
  fund?: InputMaybe<ClubFundUpdateOneWithoutClubNestedInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sport?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ClubStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ClubUpsertWithWhereUniqueWithoutCreatedByInput = {
  create: ClubCreateWithoutCreatedByInput;
  update: ClubUpdateWithoutCreatedByInput;
  where: ClubWhereUniqueInput;
};

export type ClubUpsertWithoutExpensesInput = {
  create: ClubCreateWithoutExpensesInput;
  update: ClubUpdateWithoutExpensesInput;
  where?: InputMaybe<ClubWhereInput>;
};

export type ClubUpsertWithoutFundInput = {
  create: ClubCreateWithoutFundInput;
  update: ClubUpdateWithoutFundInput;
  where?: InputMaybe<ClubWhereInput>;
};

export type ClubUpsertWithoutMembersInput = {
  create: ClubCreateWithoutMembersInput;
  update: ClubUpdateWithoutMembersInput;
  where?: InputMaybe<ClubWhereInput>;
};

export type ClubWhereInput = {
  AND?: InputMaybe<Array<ClubWhereInput>>;
  NOT?: InputMaybe<Array<ClubWhereInput>>;
  OR?: InputMaybe<Array<ClubWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<UserScalarRelationFilter>;
  createdById?: InputMaybe<StringFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  expenses?: InputMaybe<ExpenseListRelationFilter>;
  foundedAt?: InputMaybe<DateTimeNullableFilter>;
  fund?: InputMaybe<ClubFundNullableScalarRelationFilter>;
  id?: InputMaybe<StringFilter>;
  members?: InputMaybe<ClubMemberListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  sport?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumClubStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ClubWhereUniqueInput = {
  AND?: InputMaybe<Array<ClubWhereInput>>;
  NOT?: InputMaybe<Array<ClubWhereInput>>;
  OR?: InputMaybe<Array<ClubWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<UserScalarRelationFilter>;
  createdById?: InputMaybe<StringFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  expenses?: InputMaybe<ExpenseListRelationFilter>;
  foundedAt?: InputMaybe<DateTimeNullableFilter>;
  fund?: InputMaybe<ClubFundNullableScalarRelationFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  members?: InputMaybe<ClubMemberListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  sport?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumClubStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type Customer = {
  __typename?: 'Customer';
  _count: CustomerCount;
  company?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  invoices?: Maybe<Array<Invoice>>;
  name: Scalars['String']['output'];
  owner: User;
  ownerId: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  status: CustomerStatus;
  updatedAt: Scalars['DateTime']['output'];
};

export type CustomerCount = {
  __typename?: 'CustomerCount';
  invoices: Scalars['Int']['output'];
};

export type CustomerCountAggregate = {
  __typename?: 'CustomerCountAggregate';
  _all: Scalars['Int']['output'];
  company: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  ownerId: Scalars['Int']['output'];
  phone: Scalars['Int']['output'];
  status: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type CustomerCreateManyOwnerInput = {
  company?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<CustomerStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CustomerCreateManyOwnerInputEnvelope = {
  data: Array<CustomerCreateManyOwnerInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CustomerCreateNestedManyWithoutOwnerInput = {
  connect?: InputMaybe<Array<CustomerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CustomerCreateOrConnectWithoutOwnerInput>>;
  create?: InputMaybe<Array<CustomerCreateWithoutOwnerInput>>;
  createMany?: InputMaybe<CustomerCreateManyOwnerInputEnvelope>;
};

export type CustomerCreateOrConnectWithoutOwnerInput = {
  create: CustomerCreateWithoutOwnerInput;
  where: CustomerWhereUniqueInput;
};

export type CustomerCreateWithoutOwnerInput = {
  company?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  invoices?: InputMaybe<InvoiceCreateNestedManyWithoutCustomerInput>;
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<CustomerStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CustomerListRelationFilter = {
  every?: InputMaybe<CustomerWhereInput>;
  none?: InputMaybe<CustomerWhereInput>;
  some?: InputMaybe<CustomerWhereInput>;
};

export type CustomerMaxAggregate = {
  __typename?: 'CustomerMaxAggregate';
  company?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  ownerId?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  status?: Maybe<CustomerStatus>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CustomerMinAggregate = {
  __typename?: 'CustomerMinAggregate';
  company?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  ownerId?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  status?: Maybe<CustomerStatus>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CustomerNullableScalarRelationFilter = {
  is?: InputMaybe<CustomerWhereInput>;
  isNot?: InputMaybe<CustomerWhereInput>;
};

export type CustomerScalarWhereInput = {
  AND?: InputMaybe<Array<CustomerScalarWhereInput>>;
  NOT?: InputMaybe<Array<CustomerScalarWhereInput>>;
  OR?: InputMaybe<Array<CustomerScalarWhereInput>>;
  company?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  ownerId?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringNullableFilter>;
  status?: InputMaybe<EnumCustomerStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export enum CustomerStatus {
  Active = 'active',
  Churned = 'churned',
  Inactive = 'inactive',
  Prospect = 'prospect'
}

export type CustomerUncheckedCreateInput = {
  company?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  invoices?: InputMaybe<InvoiceUncheckedCreateNestedManyWithoutCustomerInput>;
  name: Scalars['String']['input'];
  ownerId: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<CustomerStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CustomerUncheckedUpdateInput = {
  company?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  invoices?: InputMaybe<InvoiceUncheckedUpdateManyWithoutCustomerNestedInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<CustomerStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CustomerUpdateManyMutationInput = {
  company?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<CustomerStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CustomerUpdateManyWithWhereWithoutOwnerInput = {
  data: CustomerUpdateManyMutationInput;
  where: CustomerScalarWhereInput;
};

export type CustomerUpdateManyWithoutOwnerNestedInput = {
  connect?: InputMaybe<Array<CustomerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CustomerCreateOrConnectWithoutOwnerInput>>;
  create?: InputMaybe<Array<CustomerCreateWithoutOwnerInput>>;
  createMany?: InputMaybe<CustomerCreateManyOwnerInputEnvelope>;
  delete?: InputMaybe<Array<CustomerWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CustomerScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CustomerWhereUniqueInput>>;
  set?: InputMaybe<Array<CustomerWhereUniqueInput>>;
  update?: InputMaybe<Array<CustomerUpdateWithWhereUniqueWithoutOwnerInput>>;
  updateMany?: InputMaybe<Array<CustomerUpdateManyWithWhereWithoutOwnerInput>>;
  upsert?: InputMaybe<Array<CustomerUpsertWithWhereUniqueWithoutOwnerInput>>;
};

export type CustomerUpdateWithWhereUniqueWithoutOwnerInput = {
  data: CustomerUpdateWithoutOwnerInput;
  where: CustomerWhereUniqueInput;
};

export type CustomerUpdateWithoutOwnerInput = {
  company?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  invoices?: InputMaybe<InvoiceUpdateManyWithoutCustomerNestedInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<CustomerStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CustomerUpsertWithWhereUniqueWithoutOwnerInput = {
  create: CustomerCreateWithoutOwnerInput;
  update: CustomerUpdateWithoutOwnerInput;
  where: CustomerWhereUniqueInput;
};

export type CustomerWhereInput = {
  AND?: InputMaybe<Array<CustomerWhereInput>>;
  NOT?: InputMaybe<Array<CustomerWhereInput>>;
  OR?: InputMaybe<Array<CustomerWhereInput>>;
  company?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  invoices?: InputMaybe<InvoiceListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  owner?: InputMaybe<UserScalarRelationFilter>;
  ownerId?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringNullableFilter>;
  status?: InputMaybe<EnumCustomerStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CustomerWhereUniqueInput = {
  AND?: InputMaybe<Array<CustomerWhereInput>>;
  NOT?: InputMaybe<Array<CustomerWhereInput>>;
  OR?: InputMaybe<Array<CustomerWhereInput>>;
  company?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  invoices?: InputMaybe<InvoiceListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  owner?: InputMaybe<UserScalarRelationFilter>;
  ownerId?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringNullableFilter>;
  status?: InputMaybe<EnumCustomerStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type Department = {
  __typename?: 'Department';
  _count: DepartmentCount;
  children?: Maybe<Array<Department>>;
  employees?: Maybe<Array<Employee>>;
  expenses?: Maybe<Array<Expense>>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  parent?: Maybe<Department>;
  parentId?: Maybe<Scalars['String']['output']>;
};

export type DepartmentCount = {
  __typename?: 'DepartmentCount';
  children: Scalars['Int']['output'];
  employees: Scalars['Int']['output'];
  expenses: Scalars['Int']['output'];
};

export type DepartmentCountAggregate = {
  __typename?: 'DepartmentCountAggregate';
  _all: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  parentId: Scalars['Int']['output'];
};

export type DepartmentCreateManyParentInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type DepartmentCreateManyParentInputEnvelope = {
  data: Array<DepartmentCreateManyParentInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DepartmentCreateNestedManyWithoutParentInput = {
  connect?: InputMaybe<Array<DepartmentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<DepartmentCreateOrConnectWithoutParentInput>>;
  create?: InputMaybe<Array<DepartmentCreateWithoutParentInput>>;
  createMany?: InputMaybe<DepartmentCreateManyParentInputEnvelope>;
};

export type DepartmentCreateNestedOneWithoutChildrenInput = {
  connect?: InputMaybe<DepartmentWhereUniqueInput>;
  connectOrCreate?: InputMaybe<DepartmentCreateOrConnectWithoutChildrenInput>;
  create?: InputMaybe<DepartmentCreateWithoutChildrenInput>;
};

export type DepartmentCreateNestedOneWithoutEmployeesInput = {
  connect?: InputMaybe<DepartmentWhereUniqueInput>;
  connectOrCreate?: InputMaybe<DepartmentCreateOrConnectWithoutEmployeesInput>;
  create?: InputMaybe<DepartmentCreateWithoutEmployeesInput>;
};

export type DepartmentCreateNestedOneWithoutExpensesInput = {
  connect?: InputMaybe<DepartmentWhereUniqueInput>;
  connectOrCreate?: InputMaybe<DepartmentCreateOrConnectWithoutExpensesInput>;
  create?: InputMaybe<DepartmentCreateWithoutExpensesInput>;
};

export type DepartmentCreateOrConnectWithoutChildrenInput = {
  create: DepartmentCreateWithoutChildrenInput;
  where: DepartmentWhereUniqueInput;
};

export type DepartmentCreateOrConnectWithoutEmployeesInput = {
  create: DepartmentCreateWithoutEmployeesInput;
  where: DepartmentWhereUniqueInput;
};

export type DepartmentCreateOrConnectWithoutExpensesInput = {
  create: DepartmentCreateWithoutExpensesInput;
  where: DepartmentWhereUniqueInput;
};

export type DepartmentCreateOrConnectWithoutParentInput = {
  create: DepartmentCreateWithoutParentInput;
  where: DepartmentWhereUniqueInput;
};

export type DepartmentCreateWithoutChildrenInput = {
  employees?: InputMaybe<EmployeeCreateNestedManyWithoutDepartmentInput>;
  expenses?: InputMaybe<ExpenseCreateNestedManyWithoutDepartmentInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  parent?: InputMaybe<DepartmentCreateNestedOneWithoutChildrenInput>;
};

export type DepartmentCreateWithoutEmployeesInput = {
  children?: InputMaybe<DepartmentCreateNestedManyWithoutParentInput>;
  expenses?: InputMaybe<ExpenseCreateNestedManyWithoutDepartmentInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  parent?: InputMaybe<DepartmentCreateNestedOneWithoutChildrenInput>;
};

export type DepartmentCreateWithoutExpensesInput = {
  children?: InputMaybe<DepartmentCreateNestedManyWithoutParentInput>;
  employees?: InputMaybe<EmployeeCreateNestedManyWithoutDepartmentInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  parent?: InputMaybe<DepartmentCreateNestedOneWithoutChildrenInput>;
};

export type DepartmentCreateWithoutParentInput = {
  children?: InputMaybe<DepartmentCreateNestedManyWithoutParentInput>;
  employees?: InputMaybe<EmployeeCreateNestedManyWithoutDepartmentInput>;
  expenses?: InputMaybe<ExpenseCreateNestedManyWithoutDepartmentInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type DepartmentListRelationFilter = {
  every?: InputMaybe<DepartmentWhereInput>;
  none?: InputMaybe<DepartmentWhereInput>;
  some?: InputMaybe<DepartmentWhereInput>;
};

export type DepartmentMaxAggregate = {
  __typename?: 'DepartmentMaxAggregate';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parentId?: Maybe<Scalars['String']['output']>;
};

export type DepartmentMinAggregate = {
  __typename?: 'DepartmentMinAggregate';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parentId?: Maybe<Scalars['String']['output']>;
};

export type DepartmentNullableScalarRelationFilter = {
  is?: InputMaybe<DepartmentWhereInput>;
  isNot?: InputMaybe<DepartmentWhereInput>;
};

export type DepartmentScalarRelationFilter = {
  is?: InputMaybe<DepartmentWhereInput>;
  isNot?: InputMaybe<DepartmentWhereInput>;
};

export type DepartmentScalarWhereInput = {
  AND?: InputMaybe<Array<DepartmentScalarWhereInput>>;
  NOT?: InputMaybe<Array<DepartmentScalarWhereInput>>;
  OR?: InputMaybe<Array<DepartmentScalarWhereInput>>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  parentId?: InputMaybe<StringNullableFilter>;
};

export type DepartmentUncheckedCreateInput = {
  children?: InputMaybe<DepartmentUncheckedCreateNestedManyWithoutParentInput>;
  employees?: InputMaybe<EmployeeUncheckedCreateNestedManyWithoutDepartmentInput>;
  expenses?: InputMaybe<ExpenseUncheckedCreateNestedManyWithoutDepartmentInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  parentId?: InputMaybe<Scalars['String']['input']>;
};

export type DepartmentUncheckedCreateNestedManyWithoutParentInput = {
  connect?: InputMaybe<Array<DepartmentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<DepartmentCreateOrConnectWithoutParentInput>>;
  create?: InputMaybe<Array<DepartmentCreateWithoutParentInput>>;
  createMany?: InputMaybe<DepartmentCreateManyParentInputEnvelope>;
};

export type DepartmentUncheckedUpdateInput = {
  children?: InputMaybe<DepartmentUncheckedUpdateManyWithoutParentNestedInput>;
  employees?: InputMaybe<EmployeeUncheckedUpdateManyWithoutDepartmentNestedInput>;
  expenses?: InputMaybe<ExpenseUncheckedUpdateManyWithoutDepartmentNestedInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parentId?: InputMaybe<Scalars['String']['input']>;
};

export type DepartmentUncheckedUpdateManyWithoutParentNestedInput = {
  connect?: InputMaybe<Array<DepartmentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<DepartmentCreateOrConnectWithoutParentInput>>;
  create?: InputMaybe<Array<DepartmentCreateWithoutParentInput>>;
  createMany?: InputMaybe<DepartmentCreateManyParentInputEnvelope>;
  delete?: InputMaybe<Array<DepartmentWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<DepartmentScalarWhereInput>>;
  disconnect?: InputMaybe<Array<DepartmentWhereUniqueInput>>;
  set?: InputMaybe<Array<DepartmentWhereUniqueInput>>;
  update?: InputMaybe<Array<DepartmentUpdateWithWhereUniqueWithoutParentInput>>;
  updateMany?: InputMaybe<Array<DepartmentUpdateManyWithWhereWithoutParentInput>>;
  upsert?: InputMaybe<Array<DepartmentUpsertWithWhereUniqueWithoutParentInput>>;
};

export type DepartmentUpdateManyMutationInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type DepartmentUpdateManyWithWhereWithoutParentInput = {
  data: DepartmentUpdateManyMutationInput;
  where: DepartmentScalarWhereInput;
};

export type DepartmentUpdateManyWithoutParentNestedInput = {
  connect?: InputMaybe<Array<DepartmentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<DepartmentCreateOrConnectWithoutParentInput>>;
  create?: InputMaybe<Array<DepartmentCreateWithoutParentInput>>;
  createMany?: InputMaybe<DepartmentCreateManyParentInputEnvelope>;
  delete?: InputMaybe<Array<DepartmentWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<DepartmentScalarWhereInput>>;
  disconnect?: InputMaybe<Array<DepartmentWhereUniqueInput>>;
  set?: InputMaybe<Array<DepartmentWhereUniqueInput>>;
  update?: InputMaybe<Array<DepartmentUpdateWithWhereUniqueWithoutParentInput>>;
  updateMany?: InputMaybe<Array<DepartmentUpdateManyWithWhereWithoutParentInput>>;
  upsert?: InputMaybe<Array<DepartmentUpsertWithWhereUniqueWithoutParentInput>>;
};

export type DepartmentUpdateOneRequiredWithoutEmployeesNestedInput = {
  connect?: InputMaybe<DepartmentWhereUniqueInput>;
  connectOrCreate?: InputMaybe<DepartmentCreateOrConnectWithoutEmployeesInput>;
  create?: InputMaybe<DepartmentCreateWithoutEmployeesInput>;
  update?: InputMaybe<DepartmentUpdateToOneWithWhereWithoutEmployeesInput>;
  upsert?: InputMaybe<DepartmentUpsertWithoutEmployeesInput>;
};

export type DepartmentUpdateOneWithoutChildrenNestedInput = {
  connect?: InputMaybe<DepartmentWhereUniqueInput>;
  connectOrCreate?: InputMaybe<DepartmentCreateOrConnectWithoutChildrenInput>;
  create?: InputMaybe<DepartmentCreateWithoutChildrenInput>;
  delete?: InputMaybe<DepartmentWhereInput>;
  disconnect?: InputMaybe<DepartmentWhereInput>;
  update?: InputMaybe<DepartmentUpdateToOneWithWhereWithoutChildrenInput>;
  upsert?: InputMaybe<DepartmentUpsertWithoutChildrenInput>;
};

export type DepartmentUpdateOneWithoutExpensesNestedInput = {
  connect?: InputMaybe<DepartmentWhereUniqueInput>;
  connectOrCreate?: InputMaybe<DepartmentCreateOrConnectWithoutExpensesInput>;
  create?: InputMaybe<DepartmentCreateWithoutExpensesInput>;
  delete?: InputMaybe<DepartmentWhereInput>;
  disconnect?: InputMaybe<DepartmentWhereInput>;
  update?: InputMaybe<DepartmentUpdateToOneWithWhereWithoutExpensesInput>;
  upsert?: InputMaybe<DepartmentUpsertWithoutExpensesInput>;
};

export type DepartmentUpdateToOneWithWhereWithoutChildrenInput = {
  data: DepartmentUpdateWithoutChildrenInput;
  where?: InputMaybe<DepartmentWhereInput>;
};

export type DepartmentUpdateToOneWithWhereWithoutEmployeesInput = {
  data: DepartmentUpdateWithoutEmployeesInput;
  where?: InputMaybe<DepartmentWhereInput>;
};

export type DepartmentUpdateToOneWithWhereWithoutExpensesInput = {
  data: DepartmentUpdateWithoutExpensesInput;
  where?: InputMaybe<DepartmentWhereInput>;
};

export type DepartmentUpdateWithWhereUniqueWithoutParentInput = {
  data: DepartmentUpdateWithoutParentInput;
  where: DepartmentWhereUniqueInput;
};

export type DepartmentUpdateWithoutChildrenInput = {
  employees?: InputMaybe<EmployeeUpdateManyWithoutDepartmentNestedInput>;
  expenses?: InputMaybe<ExpenseUpdateManyWithoutDepartmentNestedInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<DepartmentUpdateOneWithoutChildrenNestedInput>;
};

export type DepartmentUpdateWithoutEmployeesInput = {
  children?: InputMaybe<DepartmentUpdateManyWithoutParentNestedInput>;
  expenses?: InputMaybe<ExpenseUpdateManyWithoutDepartmentNestedInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<DepartmentUpdateOneWithoutChildrenNestedInput>;
};

export type DepartmentUpdateWithoutExpensesInput = {
  children?: InputMaybe<DepartmentUpdateManyWithoutParentNestedInput>;
  employees?: InputMaybe<EmployeeUpdateManyWithoutDepartmentNestedInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<DepartmentUpdateOneWithoutChildrenNestedInput>;
};

export type DepartmentUpdateWithoutParentInput = {
  children?: InputMaybe<DepartmentUpdateManyWithoutParentNestedInput>;
  employees?: InputMaybe<EmployeeUpdateManyWithoutDepartmentNestedInput>;
  expenses?: InputMaybe<ExpenseUpdateManyWithoutDepartmentNestedInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type DepartmentUpsertWithWhereUniqueWithoutParentInput = {
  create: DepartmentCreateWithoutParentInput;
  update: DepartmentUpdateWithoutParentInput;
  where: DepartmentWhereUniqueInput;
};

export type DepartmentUpsertWithoutChildrenInput = {
  create: DepartmentCreateWithoutChildrenInput;
  update: DepartmentUpdateWithoutChildrenInput;
  where?: InputMaybe<DepartmentWhereInput>;
};

export type DepartmentUpsertWithoutEmployeesInput = {
  create: DepartmentCreateWithoutEmployeesInput;
  update: DepartmentUpdateWithoutEmployeesInput;
  where?: InputMaybe<DepartmentWhereInput>;
};

export type DepartmentUpsertWithoutExpensesInput = {
  create: DepartmentCreateWithoutExpensesInput;
  update: DepartmentUpdateWithoutExpensesInput;
  where?: InputMaybe<DepartmentWhereInput>;
};

export type DepartmentWhereInput = {
  AND?: InputMaybe<Array<DepartmentWhereInput>>;
  NOT?: InputMaybe<Array<DepartmentWhereInput>>;
  OR?: InputMaybe<Array<DepartmentWhereInput>>;
  children?: InputMaybe<DepartmentListRelationFilter>;
  employees?: InputMaybe<EmployeeListRelationFilter>;
  expenses?: InputMaybe<ExpenseListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  parent?: InputMaybe<DepartmentNullableScalarRelationFilter>;
  parentId?: InputMaybe<StringNullableFilter>;
};

export type DepartmentWhereUniqueInput = {
  AND?: InputMaybe<Array<DepartmentWhereInput>>;
  NOT?: InputMaybe<Array<DepartmentWhereInput>>;
  OR?: InputMaybe<Array<DepartmentWhereInput>>;
  children?: InputMaybe<DepartmentListRelationFilter>;
  employees?: InputMaybe<EmployeeListRelationFilter>;
  expenses?: InputMaybe<ExpenseListRelationFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<DepartmentNullableScalarRelationFilter>;
  parentId?: InputMaybe<StringNullableFilter>;
};

export type Employee = {
  __typename?: 'Employee';
  _count: EmployeeCount;
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  department: Department;
  departmentId: Scalars['String']['output'];
  email: Scalars['String']['output'];
  hireDate: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  manager?: Maybe<Employee>;
  managerId?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  position: Scalars['String']['output'];
  reports?: Maybe<Array<Employee>>;
  status: EmployeeStatus;
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type EmployeeCount = {
  __typename?: 'EmployeeCount';
  reports: Scalars['Int']['output'];
};

export type EmployeeCountAggregate = {
  __typename?: 'EmployeeCountAggregate';
  _all: Scalars['Int']['output'];
  code: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  departmentId: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  hireDate: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  managerId: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  phone: Scalars['Int']['output'];
  position: Scalars['Int']['output'];
  status: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type EmployeeCreateManyDepartmentInput = {
  code: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  hireDate: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  managerId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  position: Scalars['String']['input'];
  status?: InputMaybe<EmployeeStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type EmployeeCreateManyDepartmentInputEnvelope = {
  data: Array<EmployeeCreateManyDepartmentInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EmployeeCreateManyManagerInput = {
  code: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  departmentId: Scalars['String']['input'];
  email: Scalars['String']['input'];
  hireDate: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  position: Scalars['String']['input'];
  status?: InputMaybe<EmployeeStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type EmployeeCreateManyManagerInputEnvelope = {
  data: Array<EmployeeCreateManyManagerInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EmployeeCreateManyUserInput = {
  code: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  departmentId: Scalars['String']['input'];
  email: Scalars['String']['input'];
  hireDate: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  managerId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  position: Scalars['String']['input'];
  status?: InputMaybe<EmployeeStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EmployeeCreateManyUserInputEnvelope = {
  data: Array<EmployeeCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EmployeeCreateNestedManyWithoutDepartmentInput = {
  connect?: InputMaybe<Array<EmployeeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EmployeeCreateOrConnectWithoutDepartmentInput>>;
  create?: InputMaybe<Array<EmployeeCreateWithoutDepartmentInput>>;
  createMany?: InputMaybe<EmployeeCreateManyDepartmentInputEnvelope>;
};

export type EmployeeCreateNestedManyWithoutManagerInput = {
  connect?: InputMaybe<Array<EmployeeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EmployeeCreateOrConnectWithoutManagerInput>>;
  create?: InputMaybe<Array<EmployeeCreateWithoutManagerInput>>;
  createMany?: InputMaybe<EmployeeCreateManyManagerInputEnvelope>;
};

export type EmployeeCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<EmployeeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EmployeeCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<EmployeeCreateWithoutUserInput>>;
  createMany?: InputMaybe<EmployeeCreateManyUserInputEnvelope>;
};

export type EmployeeCreateNestedOneWithoutReportsInput = {
  connect?: InputMaybe<EmployeeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EmployeeCreateOrConnectWithoutReportsInput>;
  create?: InputMaybe<EmployeeCreateWithoutReportsInput>;
};

export type EmployeeCreateOrConnectWithoutDepartmentInput = {
  create: EmployeeCreateWithoutDepartmentInput;
  where: EmployeeWhereUniqueInput;
};

export type EmployeeCreateOrConnectWithoutManagerInput = {
  create: EmployeeCreateWithoutManagerInput;
  where: EmployeeWhereUniqueInput;
};

export type EmployeeCreateOrConnectWithoutReportsInput = {
  create: EmployeeCreateWithoutReportsInput;
  where: EmployeeWhereUniqueInput;
};

export type EmployeeCreateOrConnectWithoutUserInput = {
  create: EmployeeCreateWithoutUserInput;
  where: EmployeeWhereUniqueInput;
};

export type EmployeeCreateWithoutDepartmentInput = {
  code: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  hireDate: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  manager?: InputMaybe<EmployeeCreateNestedOneWithoutReportsInput>;
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  position: Scalars['String']['input'];
  reports?: InputMaybe<EmployeeCreateNestedManyWithoutManagerInput>;
  status?: InputMaybe<EmployeeStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<UserCreateNestedOneWithoutEmployeesInput>;
};

export type EmployeeCreateWithoutManagerInput = {
  code: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  department: DepartmentCreateNestedOneWithoutEmployeesInput;
  email: Scalars['String']['input'];
  hireDate: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  position: Scalars['String']['input'];
  reports?: InputMaybe<EmployeeCreateNestedManyWithoutManagerInput>;
  status?: InputMaybe<EmployeeStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<UserCreateNestedOneWithoutEmployeesInput>;
};

export type EmployeeCreateWithoutReportsInput = {
  code: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  department: DepartmentCreateNestedOneWithoutEmployeesInput;
  email: Scalars['String']['input'];
  hireDate: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  manager?: InputMaybe<EmployeeCreateNestedOneWithoutReportsInput>;
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  position: Scalars['String']['input'];
  status?: InputMaybe<EmployeeStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<UserCreateNestedOneWithoutEmployeesInput>;
};

export type EmployeeCreateWithoutUserInput = {
  code: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  department: DepartmentCreateNestedOneWithoutEmployeesInput;
  email: Scalars['String']['input'];
  hireDate: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  manager?: InputMaybe<EmployeeCreateNestedOneWithoutReportsInput>;
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  position: Scalars['String']['input'];
  reports?: InputMaybe<EmployeeCreateNestedManyWithoutManagerInput>;
  status?: InputMaybe<EmployeeStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EmployeeListRelationFilter = {
  every?: InputMaybe<EmployeeWhereInput>;
  none?: InputMaybe<EmployeeWhereInput>;
  some?: InputMaybe<EmployeeWhereInput>;
};

export type EmployeeMaxAggregate = {
  __typename?: 'EmployeeMaxAggregate';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  departmentId?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  hireDate?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  managerId?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['String']['output']>;
  status?: Maybe<EmployeeStatus>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type EmployeeMinAggregate = {
  __typename?: 'EmployeeMinAggregate';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  departmentId?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  hireDate?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  managerId?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['String']['output']>;
  status?: Maybe<EmployeeStatus>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type EmployeeNullableScalarRelationFilter = {
  is?: InputMaybe<EmployeeWhereInput>;
  isNot?: InputMaybe<EmployeeWhereInput>;
};

export type EmployeeScalarWhereInput = {
  AND?: InputMaybe<Array<EmployeeScalarWhereInput>>;
  NOT?: InputMaybe<Array<EmployeeScalarWhereInput>>;
  OR?: InputMaybe<Array<EmployeeScalarWhereInput>>;
  code?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  departmentId?: InputMaybe<StringFilter>;
  email?: InputMaybe<StringFilter>;
  hireDate?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  managerId?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringNullableFilter>;
  position?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumEmployeeStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringNullableFilter>;
};

export enum EmployeeStatus {
  Active = 'active',
  OnLeave = 'on_leave',
  Resigned = 'resigned',
  Terminated = 'terminated'
}

export type EmployeeUncheckedCreateInput = {
  code: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  departmentId: Scalars['String']['input'];
  email: Scalars['String']['input'];
  hireDate: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  managerId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  position: Scalars['String']['input'];
  reports?: InputMaybe<EmployeeUncheckedCreateNestedManyWithoutManagerInput>;
  status?: InputMaybe<EmployeeStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type EmployeeUncheckedCreateNestedManyWithoutDepartmentInput = {
  connect?: InputMaybe<Array<EmployeeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EmployeeCreateOrConnectWithoutDepartmentInput>>;
  create?: InputMaybe<Array<EmployeeCreateWithoutDepartmentInput>>;
  createMany?: InputMaybe<EmployeeCreateManyDepartmentInputEnvelope>;
};

export type EmployeeUncheckedCreateNestedManyWithoutManagerInput = {
  connect?: InputMaybe<Array<EmployeeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EmployeeCreateOrConnectWithoutManagerInput>>;
  create?: InputMaybe<Array<EmployeeCreateWithoutManagerInput>>;
  createMany?: InputMaybe<EmployeeCreateManyManagerInputEnvelope>;
};

export type EmployeeUncheckedUpdateInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  departmentId?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  hireDate?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  managerId?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  reports?: InputMaybe<EmployeeUncheckedUpdateManyWithoutManagerNestedInput>;
  status?: InputMaybe<EmployeeStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type EmployeeUncheckedUpdateManyWithoutDepartmentNestedInput = {
  connect?: InputMaybe<Array<EmployeeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EmployeeCreateOrConnectWithoutDepartmentInput>>;
  create?: InputMaybe<Array<EmployeeCreateWithoutDepartmentInput>>;
  createMany?: InputMaybe<EmployeeCreateManyDepartmentInputEnvelope>;
  delete?: InputMaybe<Array<EmployeeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<EmployeeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<EmployeeWhereUniqueInput>>;
  set?: InputMaybe<Array<EmployeeWhereUniqueInput>>;
  update?: InputMaybe<Array<EmployeeUpdateWithWhereUniqueWithoutDepartmentInput>>;
  updateMany?: InputMaybe<Array<EmployeeUpdateManyWithWhereWithoutDepartmentInput>>;
  upsert?: InputMaybe<Array<EmployeeUpsertWithWhereUniqueWithoutDepartmentInput>>;
};

export type EmployeeUncheckedUpdateManyWithoutManagerNestedInput = {
  connect?: InputMaybe<Array<EmployeeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EmployeeCreateOrConnectWithoutManagerInput>>;
  create?: InputMaybe<Array<EmployeeCreateWithoutManagerInput>>;
  createMany?: InputMaybe<EmployeeCreateManyManagerInputEnvelope>;
  delete?: InputMaybe<Array<EmployeeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<EmployeeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<EmployeeWhereUniqueInput>>;
  set?: InputMaybe<Array<EmployeeWhereUniqueInput>>;
  update?: InputMaybe<Array<EmployeeUpdateWithWhereUniqueWithoutManagerInput>>;
  updateMany?: InputMaybe<Array<EmployeeUpdateManyWithWhereWithoutManagerInput>>;
  upsert?: InputMaybe<Array<EmployeeUpsertWithWhereUniqueWithoutManagerInput>>;
};

export type EmployeeUpdateManyMutationInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  hireDate?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<EmployeeStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EmployeeUpdateManyWithWhereWithoutDepartmentInput = {
  data: EmployeeUpdateManyMutationInput;
  where: EmployeeScalarWhereInput;
};

export type EmployeeUpdateManyWithWhereWithoutManagerInput = {
  data: EmployeeUpdateManyMutationInput;
  where: EmployeeScalarWhereInput;
};

export type EmployeeUpdateManyWithWhereWithoutUserInput = {
  data: EmployeeUpdateManyMutationInput;
  where: EmployeeScalarWhereInput;
};

export type EmployeeUpdateManyWithoutDepartmentNestedInput = {
  connect?: InputMaybe<Array<EmployeeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EmployeeCreateOrConnectWithoutDepartmentInput>>;
  create?: InputMaybe<Array<EmployeeCreateWithoutDepartmentInput>>;
  createMany?: InputMaybe<EmployeeCreateManyDepartmentInputEnvelope>;
  delete?: InputMaybe<Array<EmployeeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<EmployeeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<EmployeeWhereUniqueInput>>;
  set?: InputMaybe<Array<EmployeeWhereUniqueInput>>;
  update?: InputMaybe<Array<EmployeeUpdateWithWhereUniqueWithoutDepartmentInput>>;
  updateMany?: InputMaybe<Array<EmployeeUpdateManyWithWhereWithoutDepartmentInput>>;
  upsert?: InputMaybe<Array<EmployeeUpsertWithWhereUniqueWithoutDepartmentInput>>;
};

export type EmployeeUpdateManyWithoutManagerNestedInput = {
  connect?: InputMaybe<Array<EmployeeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EmployeeCreateOrConnectWithoutManagerInput>>;
  create?: InputMaybe<Array<EmployeeCreateWithoutManagerInput>>;
  createMany?: InputMaybe<EmployeeCreateManyManagerInputEnvelope>;
  delete?: InputMaybe<Array<EmployeeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<EmployeeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<EmployeeWhereUniqueInput>>;
  set?: InputMaybe<Array<EmployeeWhereUniqueInput>>;
  update?: InputMaybe<Array<EmployeeUpdateWithWhereUniqueWithoutManagerInput>>;
  updateMany?: InputMaybe<Array<EmployeeUpdateManyWithWhereWithoutManagerInput>>;
  upsert?: InputMaybe<Array<EmployeeUpsertWithWhereUniqueWithoutManagerInput>>;
};

export type EmployeeUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<EmployeeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EmployeeCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<EmployeeCreateWithoutUserInput>>;
  createMany?: InputMaybe<EmployeeCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<EmployeeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<EmployeeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<EmployeeWhereUniqueInput>>;
  set?: InputMaybe<Array<EmployeeWhereUniqueInput>>;
  update?: InputMaybe<Array<EmployeeUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<EmployeeUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<EmployeeUpsertWithWhereUniqueWithoutUserInput>>;
};

export type EmployeeUpdateOneWithoutReportsNestedInput = {
  connect?: InputMaybe<EmployeeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EmployeeCreateOrConnectWithoutReportsInput>;
  create?: InputMaybe<EmployeeCreateWithoutReportsInput>;
  delete?: InputMaybe<EmployeeWhereInput>;
  disconnect?: InputMaybe<EmployeeWhereInput>;
  update?: InputMaybe<EmployeeUpdateToOneWithWhereWithoutReportsInput>;
  upsert?: InputMaybe<EmployeeUpsertWithoutReportsInput>;
};

export type EmployeeUpdateToOneWithWhereWithoutReportsInput = {
  data: EmployeeUpdateWithoutReportsInput;
  where?: InputMaybe<EmployeeWhereInput>;
};

export type EmployeeUpdateWithWhereUniqueWithoutDepartmentInput = {
  data: EmployeeUpdateWithoutDepartmentInput;
  where: EmployeeWhereUniqueInput;
};

export type EmployeeUpdateWithWhereUniqueWithoutManagerInput = {
  data: EmployeeUpdateWithoutManagerInput;
  where: EmployeeWhereUniqueInput;
};

export type EmployeeUpdateWithWhereUniqueWithoutUserInput = {
  data: EmployeeUpdateWithoutUserInput;
  where: EmployeeWhereUniqueInput;
};

export type EmployeeUpdateWithoutDepartmentInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  hireDate?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  manager?: InputMaybe<EmployeeUpdateOneWithoutReportsNestedInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  reports?: InputMaybe<EmployeeUpdateManyWithoutManagerNestedInput>;
  status?: InputMaybe<EmployeeStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<UserUpdateOneWithoutEmployeesNestedInput>;
};

export type EmployeeUpdateWithoutManagerInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  department?: InputMaybe<DepartmentUpdateOneRequiredWithoutEmployeesNestedInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  hireDate?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  reports?: InputMaybe<EmployeeUpdateManyWithoutManagerNestedInput>;
  status?: InputMaybe<EmployeeStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<UserUpdateOneWithoutEmployeesNestedInput>;
};

export type EmployeeUpdateWithoutReportsInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  department?: InputMaybe<DepartmentUpdateOneRequiredWithoutEmployeesNestedInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  hireDate?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  manager?: InputMaybe<EmployeeUpdateOneWithoutReportsNestedInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<EmployeeStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<UserUpdateOneWithoutEmployeesNestedInput>;
};

export type EmployeeUpdateWithoutUserInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  department?: InputMaybe<DepartmentUpdateOneRequiredWithoutEmployeesNestedInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  hireDate?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  manager?: InputMaybe<EmployeeUpdateOneWithoutReportsNestedInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  reports?: InputMaybe<EmployeeUpdateManyWithoutManagerNestedInput>;
  status?: InputMaybe<EmployeeStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EmployeeUpsertWithWhereUniqueWithoutDepartmentInput = {
  create: EmployeeCreateWithoutDepartmentInput;
  update: EmployeeUpdateWithoutDepartmentInput;
  where: EmployeeWhereUniqueInput;
};

export type EmployeeUpsertWithWhereUniqueWithoutManagerInput = {
  create: EmployeeCreateWithoutManagerInput;
  update: EmployeeUpdateWithoutManagerInput;
  where: EmployeeWhereUniqueInput;
};

export type EmployeeUpsertWithWhereUniqueWithoutUserInput = {
  create: EmployeeCreateWithoutUserInput;
  update: EmployeeUpdateWithoutUserInput;
  where: EmployeeWhereUniqueInput;
};

export type EmployeeUpsertWithoutReportsInput = {
  create: EmployeeCreateWithoutReportsInput;
  update: EmployeeUpdateWithoutReportsInput;
  where?: InputMaybe<EmployeeWhereInput>;
};

export type EmployeeWhereInput = {
  AND?: InputMaybe<Array<EmployeeWhereInput>>;
  NOT?: InputMaybe<Array<EmployeeWhereInput>>;
  OR?: InputMaybe<Array<EmployeeWhereInput>>;
  code?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  department?: InputMaybe<DepartmentScalarRelationFilter>;
  departmentId?: InputMaybe<StringFilter>;
  email?: InputMaybe<StringFilter>;
  hireDate?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  manager?: InputMaybe<EmployeeNullableScalarRelationFilter>;
  managerId?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringNullableFilter>;
  position?: InputMaybe<StringFilter>;
  reports?: InputMaybe<EmployeeListRelationFilter>;
  status?: InputMaybe<EnumEmployeeStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserNullableScalarRelationFilter>;
  userId?: InputMaybe<StringNullableFilter>;
};

export type EmployeeWhereUniqueInput = {
  AND?: InputMaybe<Array<EmployeeWhereInput>>;
  NOT?: InputMaybe<Array<EmployeeWhereInput>>;
  OR?: InputMaybe<Array<EmployeeWhereInput>>;
  code?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimeFilter>;
  department?: InputMaybe<DepartmentScalarRelationFilter>;
  departmentId?: InputMaybe<StringFilter>;
  email?: InputMaybe<Scalars['String']['input']>;
  hireDate?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  manager?: InputMaybe<EmployeeNullableScalarRelationFilter>;
  managerId?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringNullableFilter>;
  position?: InputMaybe<StringFilter>;
  reports?: InputMaybe<EmployeeListRelationFilter>;
  status?: InputMaybe<EnumEmployeeStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserNullableScalarRelationFilter>;
  userId?: InputMaybe<StringNullableFilter>;
};

export type EnumClubMemberStatusFilter = {
  equals?: InputMaybe<ClubMemberStatus>;
  in?: InputMaybe<Array<ClubMemberStatus>>;
  not?: InputMaybe<NestedEnumClubMemberStatusFilter>;
  notIn?: InputMaybe<Array<ClubMemberStatus>>;
};

export type EnumClubStatusFilter = {
  equals?: InputMaybe<ClubStatus>;
  in?: InputMaybe<Array<ClubStatus>>;
  not?: InputMaybe<NestedEnumClubStatusFilter>;
  notIn?: InputMaybe<Array<ClubStatus>>;
};

export type EnumCustomerStatusFilter = {
  equals?: InputMaybe<CustomerStatus>;
  in?: InputMaybe<Array<CustomerStatus>>;
  not?: InputMaybe<NestedEnumCustomerStatusFilter>;
  notIn?: InputMaybe<Array<CustomerStatus>>;
};

export type EnumEmployeeStatusFilter = {
  equals?: InputMaybe<EmployeeStatus>;
  in?: InputMaybe<Array<EmployeeStatus>>;
  not?: InputMaybe<NestedEnumEmployeeStatusFilter>;
  notIn?: InputMaybe<Array<EmployeeStatus>>;
};

export type EnumExpenseStatusFilter = {
  equals?: InputMaybe<ExpenseStatus>;
  in?: InputMaybe<Array<ExpenseStatus>>;
  not?: InputMaybe<NestedEnumExpenseStatusFilter>;
  notIn?: InputMaybe<Array<ExpenseStatus>>;
};

export type EnumFundContributionStatusFilter = {
  equals?: InputMaybe<FundContributionStatus>;
  in?: InputMaybe<Array<FundContributionStatus>>;
  not?: InputMaybe<NestedEnumFundContributionStatusFilter>;
  notIn?: InputMaybe<Array<FundContributionStatus>>;
};

export type EnumFundFlowFilter = {
  equals?: InputMaybe<FundFlow>;
  in?: InputMaybe<Array<FundFlow>>;
  not?: InputMaybe<NestedEnumFundFlowFilter>;
  notIn?: InputMaybe<Array<FundFlow>>;
};

export type EnumFundTransactionTypeFilter = {
  equals?: InputMaybe<FundTransactionType>;
  in?: InputMaybe<Array<FundTransactionType>>;
  not?: InputMaybe<NestedEnumFundTransactionTypeFilter>;
  notIn?: InputMaybe<Array<FundTransactionType>>;
};

export type EnumInvoiceStatusFilter = {
  equals?: InputMaybe<InvoiceStatus>;
  in?: InputMaybe<Array<InvoiceStatus>>;
  not?: InputMaybe<NestedEnumInvoiceStatusFilter>;
  notIn?: InputMaybe<Array<InvoiceStatus>>;
};

export type Expense = {
  __typename?: 'Expense';
  _count: ExpenseCount;
  amount: Scalars['Float']['output'];
  category: ExpenseCategory;
  categoryId: Scalars['String']['output'];
  club?: Maybe<Club>;
  clubId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy: User;
  createdById: Scalars['String']['output'];
  date: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  department?: Maybe<Department>;
  departmentId?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  fund?: Maybe<ClubFund>;
  fundId?: Maybe<Scalars['String']['output']>;
  fundTransactions?: Maybe<Array<FundTransaction>>;
  id: Scalars['ID']['output'];
  status: ExpenseStatus;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ExpenseAvgAggregate = {
  __typename?: 'ExpenseAvgAggregate';
  amount?: Maybe<Scalars['Float']['output']>;
};

export type ExpenseCategory = {
  __typename?: 'ExpenseCategory';
  _count: ExpenseCategoryCount;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  expenses?: Maybe<Array<Expense>>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ExpenseCategoryCount = {
  __typename?: 'ExpenseCategoryCount';
  expenses: Scalars['Int']['output'];
};

export type ExpenseCategoryCountAggregate = {
  __typename?: 'ExpenseCategoryCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type ExpenseCategoryCreateNestedOneWithoutExpensesInput = {
  connect?: InputMaybe<ExpenseCategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ExpenseCategoryCreateOrConnectWithoutExpensesInput>;
  create?: InputMaybe<ExpenseCategoryCreateWithoutExpensesInput>;
};

export type ExpenseCategoryCreateOrConnectWithoutExpensesInput = {
  create: ExpenseCategoryCreateWithoutExpensesInput;
  where: ExpenseCategoryWhereUniqueInput;
};

export type ExpenseCategoryCreateWithoutExpensesInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ExpenseCategoryMaxAggregate = {
  __typename?: 'ExpenseCategoryMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ExpenseCategoryMinAggregate = {
  __typename?: 'ExpenseCategoryMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ExpenseCategoryScalarRelationFilter = {
  is?: InputMaybe<ExpenseCategoryWhereInput>;
  isNot?: InputMaybe<ExpenseCategoryWhereInput>;
};

export type ExpenseCategoryUncheckedCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  expenses?: InputMaybe<ExpenseUncheckedCreateNestedManyWithoutCategoryInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ExpenseCategoryUncheckedUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  expenses?: InputMaybe<ExpenseUncheckedUpdateManyWithoutCategoryNestedInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ExpenseCategoryUpdateOneRequiredWithoutExpensesNestedInput = {
  connect?: InputMaybe<ExpenseCategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ExpenseCategoryCreateOrConnectWithoutExpensesInput>;
  create?: InputMaybe<ExpenseCategoryCreateWithoutExpensesInput>;
  update?: InputMaybe<ExpenseCategoryUpdateToOneWithWhereWithoutExpensesInput>;
  upsert?: InputMaybe<ExpenseCategoryUpsertWithoutExpensesInput>;
};

export type ExpenseCategoryUpdateToOneWithWhereWithoutExpensesInput = {
  data: ExpenseCategoryUpdateWithoutExpensesInput;
  where?: InputMaybe<ExpenseCategoryWhereInput>;
};

export type ExpenseCategoryUpdateWithoutExpensesInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ExpenseCategoryUpsertWithoutExpensesInput = {
  create: ExpenseCategoryCreateWithoutExpensesInput;
  update: ExpenseCategoryUpdateWithoutExpensesInput;
  where?: InputMaybe<ExpenseCategoryWhereInput>;
};

export type ExpenseCategoryWhereInput = {
  AND?: InputMaybe<Array<ExpenseCategoryWhereInput>>;
  NOT?: InputMaybe<Array<ExpenseCategoryWhereInput>>;
  OR?: InputMaybe<Array<ExpenseCategoryWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  expenses?: InputMaybe<ExpenseListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ExpenseCategoryWhereUniqueInput = {
  AND?: InputMaybe<Array<ExpenseCategoryWhereInput>>;
  NOT?: InputMaybe<Array<ExpenseCategoryWhereInput>>;
  OR?: InputMaybe<Array<ExpenseCategoryWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  expenses?: InputMaybe<ExpenseListRelationFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ExpenseCount = {
  __typename?: 'ExpenseCount';
  fundTransactions: Scalars['Int']['output'];
};

export type ExpenseCountAggregate = {
  __typename?: 'ExpenseCountAggregate';
  _all: Scalars['Int']['output'];
  amount: Scalars['Int']['output'];
  categoryId: Scalars['Int']['output'];
  clubId: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  createdById: Scalars['Int']['output'];
  date: Scalars['Int']['output'];
  deletedAt: Scalars['Int']['output'];
  departmentId: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  fundId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  status: Scalars['Int']['output'];
  title: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type ExpenseCreateManyCategoryInput = {
  amount: Scalars['Float']['input'];
  clubId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdById: Scalars['String']['input'];
  date: Scalars['DateTime']['input'];
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  departmentId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fundId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ExpenseStatus>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ExpenseCreateManyCategoryInputEnvelope = {
  data: Array<ExpenseCreateManyCategoryInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ExpenseCreateManyClubInput = {
  amount: Scalars['Float']['input'];
  categoryId: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdById: Scalars['String']['input'];
  date: Scalars['DateTime']['input'];
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  departmentId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fundId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ExpenseStatus>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ExpenseCreateManyClubInputEnvelope = {
  data: Array<ExpenseCreateManyClubInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ExpenseCreateManyCreatedByInput = {
  amount: Scalars['Float']['input'];
  categoryId: Scalars['String']['input'];
  clubId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  date: Scalars['DateTime']['input'];
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  departmentId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fundId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ExpenseStatus>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ExpenseCreateManyCreatedByInputEnvelope = {
  data: Array<ExpenseCreateManyCreatedByInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ExpenseCreateManyDepartmentInput = {
  amount: Scalars['Float']['input'];
  categoryId: Scalars['String']['input'];
  clubId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdById: Scalars['String']['input'];
  date: Scalars['DateTime']['input'];
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fundId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ExpenseStatus>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ExpenseCreateManyDepartmentInputEnvelope = {
  data: Array<ExpenseCreateManyDepartmentInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ExpenseCreateManyFundInput = {
  amount: Scalars['Float']['input'];
  categoryId: Scalars['String']['input'];
  clubId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdById: Scalars['String']['input'];
  date: Scalars['DateTime']['input'];
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  departmentId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ExpenseStatus>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ExpenseCreateManyFundInputEnvelope = {
  data: Array<ExpenseCreateManyFundInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ExpenseCreateNestedManyWithoutClubInput = {
  connect?: InputMaybe<Array<ExpenseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ExpenseCreateOrConnectWithoutClubInput>>;
  create?: InputMaybe<Array<ExpenseCreateWithoutClubInput>>;
  createMany?: InputMaybe<ExpenseCreateManyClubInputEnvelope>;
};

export type ExpenseCreateNestedManyWithoutCreatedByInput = {
  connect?: InputMaybe<Array<ExpenseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ExpenseCreateOrConnectWithoutCreatedByInput>>;
  create?: InputMaybe<Array<ExpenseCreateWithoutCreatedByInput>>;
  createMany?: InputMaybe<ExpenseCreateManyCreatedByInputEnvelope>;
};

export type ExpenseCreateNestedManyWithoutDepartmentInput = {
  connect?: InputMaybe<Array<ExpenseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ExpenseCreateOrConnectWithoutDepartmentInput>>;
  create?: InputMaybe<Array<ExpenseCreateWithoutDepartmentInput>>;
  createMany?: InputMaybe<ExpenseCreateManyDepartmentInputEnvelope>;
};

export type ExpenseCreateNestedManyWithoutFundInput = {
  connect?: InputMaybe<Array<ExpenseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ExpenseCreateOrConnectWithoutFundInput>>;
  create?: InputMaybe<Array<ExpenseCreateWithoutFundInput>>;
  createMany?: InputMaybe<ExpenseCreateManyFundInputEnvelope>;
};

export type ExpenseCreateNestedOneWithoutFundTransactionsInput = {
  connect?: InputMaybe<ExpenseWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ExpenseCreateOrConnectWithoutFundTransactionsInput>;
  create?: InputMaybe<ExpenseCreateWithoutFundTransactionsInput>;
};

export type ExpenseCreateOrConnectWithoutCategoryInput = {
  create: ExpenseCreateWithoutCategoryInput;
  where: ExpenseWhereUniqueInput;
};

export type ExpenseCreateOrConnectWithoutClubInput = {
  create: ExpenseCreateWithoutClubInput;
  where: ExpenseWhereUniqueInput;
};

export type ExpenseCreateOrConnectWithoutCreatedByInput = {
  create: ExpenseCreateWithoutCreatedByInput;
  where: ExpenseWhereUniqueInput;
};

export type ExpenseCreateOrConnectWithoutDepartmentInput = {
  create: ExpenseCreateWithoutDepartmentInput;
  where: ExpenseWhereUniqueInput;
};

export type ExpenseCreateOrConnectWithoutFundInput = {
  create: ExpenseCreateWithoutFundInput;
  where: ExpenseWhereUniqueInput;
};

export type ExpenseCreateOrConnectWithoutFundTransactionsInput = {
  create: ExpenseCreateWithoutFundTransactionsInput;
  where: ExpenseWhereUniqueInput;
};

export type ExpenseCreateWithoutCategoryInput = {
  amount: Scalars['Float']['input'];
  club?: InputMaybe<ClubCreateNestedOneWithoutExpensesInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy: UserCreateNestedOneWithoutExpensesInput;
  date: Scalars['DateTime']['input'];
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  department?: InputMaybe<DepartmentCreateNestedOneWithoutExpensesInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  fund?: InputMaybe<ClubFundCreateNestedOneWithoutExpensesInput>;
  fundTransactions?: InputMaybe<FundTransactionCreateNestedManyWithoutExpenseInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ExpenseStatus>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ExpenseCreateWithoutClubInput = {
  amount: Scalars['Float']['input'];
  category: ExpenseCategoryCreateNestedOneWithoutExpensesInput;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy: UserCreateNestedOneWithoutExpensesInput;
  date: Scalars['DateTime']['input'];
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  department?: InputMaybe<DepartmentCreateNestedOneWithoutExpensesInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  fund?: InputMaybe<ClubFundCreateNestedOneWithoutExpensesInput>;
  fundTransactions?: InputMaybe<FundTransactionCreateNestedManyWithoutExpenseInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ExpenseStatus>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ExpenseCreateWithoutCreatedByInput = {
  amount: Scalars['Float']['input'];
  category: ExpenseCategoryCreateNestedOneWithoutExpensesInput;
  club?: InputMaybe<ClubCreateNestedOneWithoutExpensesInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  date: Scalars['DateTime']['input'];
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  department?: InputMaybe<DepartmentCreateNestedOneWithoutExpensesInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  fund?: InputMaybe<ClubFundCreateNestedOneWithoutExpensesInput>;
  fundTransactions?: InputMaybe<FundTransactionCreateNestedManyWithoutExpenseInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ExpenseStatus>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ExpenseCreateWithoutDepartmentInput = {
  amount: Scalars['Float']['input'];
  category: ExpenseCategoryCreateNestedOneWithoutExpensesInput;
  club?: InputMaybe<ClubCreateNestedOneWithoutExpensesInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy: UserCreateNestedOneWithoutExpensesInput;
  date: Scalars['DateTime']['input'];
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fund?: InputMaybe<ClubFundCreateNestedOneWithoutExpensesInput>;
  fundTransactions?: InputMaybe<FundTransactionCreateNestedManyWithoutExpenseInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ExpenseStatus>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ExpenseCreateWithoutFundInput = {
  amount: Scalars['Float']['input'];
  category: ExpenseCategoryCreateNestedOneWithoutExpensesInput;
  club?: InputMaybe<ClubCreateNestedOneWithoutExpensesInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy: UserCreateNestedOneWithoutExpensesInput;
  date: Scalars['DateTime']['input'];
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  department?: InputMaybe<DepartmentCreateNestedOneWithoutExpensesInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  fundTransactions?: InputMaybe<FundTransactionCreateNestedManyWithoutExpenseInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ExpenseStatus>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ExpenseCreateWithoutFundTransactionsInput = {
  amount: Scalars['Float']['input'];
  category: ExpenseCategoryCreateNestedOneWithoutExpensesInput;
  club?: InputMaybe<ClubCreateNestedOneWithoutExpensesInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy: UserCreateNestedOneWithoutExpensesInput;
  date: Scalars['DateTime']['input'];
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  department?: InputMaybe<DepartmentCreateNestedOneWithoutExpensesInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  fund?: InputMaybe<ClubFundCreateNestedOneWithoutExpensesInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ExpenseStatus>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ExpenseFilterInput = {
  categoryId?: InputMaybe<Scalars['String']['input']>;
  clubId?: InputMaybe<Scalars['String']['input']>;
  departmentId?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ExpenseStatus>;
};

export type ExpenseListRelationFilter = {
  every?: InputMaybe<ExpenseWhereInput>;
  none?: InputMaybe<ExpenseWhereInput>;
  some?: InputMaybe<ExpenseWhereInput>;
};

export type ExpenseMaxAggregate = {
  __typename?: 'ExpenseMaxAggregate';
  amount?: Maybe<Scalars['Float']['output']>;
  categoryId?: Maybe<Scalars['String']['output']>;
  clubId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdById?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  departmentId?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  fundId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  status?: Maybe<ExpenseStatus>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ExpenseMinAggregate = {
  __typename?: 'ExpenseMinAggregate';
  amount?: Maybe<Scalars['Float']['output']>;
  categoryId?: Maybe<Scalars['String']['output']>;
  clubId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdById?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  departmentId?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  fundId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  status?: Maybe<ExpenseStatus>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ExpenseNullableScalarRelationFilter = {
  is?: InputMaybe<ExpenseWhereInput>;
  isNot?: InputMaybe<ExpenseWhereInput>;
};

export type ExpenseScalarWhereInput = {
  AND?: InputMaybe<Array<ExpenseScalarWhereInput>>;
  NOT?: InputMaybe<Array<ExpenseScalarWhereInput>>;
  OR?: InputMaybe<Array<ExpenseScalarWhereInput>>;
  amount?: InputMaybe<FloatFilter>;
  categoryId?: InputMaybe<StringFilter>;
  clubId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<StringFilter>;
  date?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  departmentId?: InputMaybe<StringNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  fundId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumExpenseStatusFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export enum ExpenseStatus {
  Approved = 'approved',
  Pending = 'pending',
  Reimbursed = 'reimbursed',
  Rejected = 'rejected'
}

export type ExpenseSumAggregate = {
  __typename?: 'ExpenseSumAggregate';
  amount?: Maybe<Scalars['Float']['output']>;
};

export type ExpenseUncheckedCreateInput = {
  amount: Scalars['Float']['input'];
  categoryId: Scalars['String']['input'];
  clubId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdById: Scalars['String']['input'];
  date: Scalars['DateTime']['input'];
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  departmentId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fundId?: InputMaybe<Scalars['String']['input']>;
  fundTransactions?: InputMaybe<FundTransactionUncheckedCreateNestedManyWithoutExpenseInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ExpenseStatus>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ExpenseUncheckedCreateNestedManyWithoutCategoryInput = {
  connect?: InputMaybe<Array<ExpenseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ExpenseCreateOrConnectWithoutCategoryInput>>;
  create?: InputMaybe<Array<ExpenseCreateWithoutCategoryInput>>;
  createMany?: InputMaybe<ExpenseCreateManyCategoryInputEnvelope>;
};

export type ExpenseUncheckedCreateNestedManyWithoutClubInput = {
  connect?: InputMaybe<Array<ExpenseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ExpenseCreateOrConnectWithoutClubInput>>;
  create?: InputMaybe<Array<ExpenseCreateWithoutClubInput>>;
  createMany?: InputMaybe<ExpenseCreateManyClubInputEnvelope>;
};

export type ExpenseUncheckedCreateNestedManyWithoutDepartmentInput = {
  connect?: InputMaybe<Array<ExpenseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ExpenseCreateOrConnectWithoutDepartmentInput>>;
  create?: InputMaybe<Array<ExpenseCreateWithoutDepartmentInput>>;
  createMany?: InputMaybe<ExpenseCreateManyDepartmentInputEnvelope>;
};

export type ExpenseUncheckedUpdateInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  categoryId?: InputMaybe<Scalars['String']['input']>;
  clubId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdById?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  departmentId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fundId?: InputMaybe<Scalars['String']['input']>;
  fundTransactions?: InputMaybe<FundTransactionUncheckedUpdateManyWithoutExpenseNestedInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ExpenseStatus>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ExpenseUncheckedUpdateManyWithoutCategoryNestedInput = {
  connect?: InputMaybe<Array<ExpenseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ExpenseCreateOrConnectWithoutCategoryInput>>;
  create?: InputMaybe<Array<ExpenseCreateWithoutCategoryInput>>;
  createMany?: InputMaybe<ExpenseCreateManyCategoryInputEnvelope>;
  delete?: InputMaybe<Array<ExpenseWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ExpenseScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ExpenseWhereUniqueInput>>;
  set?: InputMaybe<Array<ExpenseWhereUniqueInput>>;
  update?: InputMaybe<Array<ExpenseUpdateWithWhereUniqueWithoutCategoryInput>>;
  updateMany?: InputMaybe<Array<ExpenseUpdateManyWithWhereWithoutCategoryInput>>;
  upsert?: InputMaybe<Array<ExpenseUpsertWithWhereUniqueWithoutCategoryInput>>;
};

export type ExpenseUncheckedUpdateManyWithoutClubNestedInput = {
  connect?: InputMaybe<Array<ExpenseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ExpenseCreateOrConnectWithoutClubInput>>;
  create?: InputMaybe<Array<ExpenseCreateWithoutClubInput>>;
  createMany?: InputMaybe<ExpenseCreateManyClubInputEnvelope>;
  delete?: InputMaybe<Array<ExpenseWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ExpenseScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ExpenseWhereUniqueInput>>;
  set?: InputMaybe<Array<ExpenseWhereUniqueInput>>;
  update?: InputMaybe<Array<ExpenseUpdateWithWhereUniqueWithoutClubInput>>;
  updateMany?: InputMaybe<Array<ExpenseUpdateManyWithWhereWithoutClubInput>>;
  upsert?: InputMaybe<Array<ExpenseUpsertWithWhereUniqueWithoutClubInput>>;
};

export type ExpenseUncheckedUpdateManyWithoutDepartmentNestedInput = {
  connect?: InputMaybe<Array<ExpenseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ExpenseCreateOrConnectWithoutDepartmentInput>>;
  create?: InputMaybe<Array<ExpenseCreateWithoutDepartmentInput>>;
  createMany?: InputMaybe<ExpenseCreateManyDepartmentInputEnvelope>;
  delete?: InputMaybe<Array<ExpenseWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ExpenseScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ExpenseWhereUniqueInput>>;
  set?: InputMaybe<Array<ExpenseWhereUniqueInput>>;
  update?: InputMaybe<Array<ExpenseUpdateWithWhereUniqueWithoutDepartmentInput>>;
  updateMany?: InputMaybe<Array<ExpenseUpdateManyWithWhereWithoutDepartmentInput>>;
  upsert?: InputMaybe<Array<ExpenseUpsertWithWhereUniqueWithoutDepartmentInput>>;
};

export type ExpenseUpdateManyMutationInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ExpenseStatus>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ExpenseUpdateManyWithWhereWithoutCategoryInput = {
  data: ExpenseUpdateManyMutationInput;
  where: ExpenseScalarWhereInput;
};

export type ExpenseUpdateManyWithWhereWithoutClubInput = {
  data: ExpenseUpdateManyMutationInput;
  where: ExpenseScalarWhereInput;
};

export type ExpenseUpdateManyWithWhereWithoutCreatedByInput = {
  data: ExpenseUpdateManyMutationInput;
  where: ExpenseScalarWhereInput;
};

export type ExpenseUpdateManyWithWhereWithoutDepartmentInput = {
  data: ExpenseUpdateManyMutationInput;
  where: ExpenseScalarWhereInput;
};

export type ExpenseUpdateManyWithWhereWithoutFundInput = {
  data: ExpenseUpdateManyMutationInput;
  where: ExpenseScalarWhereInput;
};

export type ExpenseUpdateManyWithoutClubNestedInput = {
  connect?: InputMaybe<Array<ExpenseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ExpenseCreateOrConnectWithoutClubInput>>;
  create?: InputMaybe<Array<ExpenseCreateWithoutClubInput>>;
  createMany?: InputMaybe<ExpenseCreateManyClubInputEnvelope>;
  delete?: InputMaybe<Array<ExpenseWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ExpenseScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ExpenseWhereUniqueInput>>;
  set?: InputMaybe<Array<ExpenseWhereUniqueInput>>;
  update?: InputMaybe<Array<ExpenseUpdateWithWhereUniqueWithoutClubInput>>;
  updateMany?: InputMaybe<Array<ExpenseUpdateManyWithWhereWithoutClubInput>>;
  upsert?: InputMaybe<Array<ExpenseUpsertWithWhereUniqueWithoutClubInput>>;
};

export type ExpenseUpdateManyWithoutCreatedByNestedInput = {
  connect?: InputMaybe<Array<ExpenseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ExpenseCreateOrConnectWithoutCreatedByInput>>;
  create?: InputMaybe<Array<ExpenseCreateWithoutCreatedByInput>>;
  createMany?: InputMaybe<ExpenseCreateManyCreatedByInputEnvelope>;
  delete?: InputMaybe<Array<ExpenseWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ExpenseScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ExpenseWhereUniqueInput>>;
  set?: InputMaybe<Array<ExpenseWhereUniqueInput>>;
  update?: InputMaybe<Array<ExpenseUpdateWithWhereUniqueWithoutCreatedByInput>>;
  updateMany?: InputMaybe<Array<ExpenseUpdateManyWithWhereWithoutCreatedByInput>>;
  upsert?: InputMaybe<Array<ExpenseUpsertWithWhereUniqueWithoutCreatedByInput>>;
};

export type ExpenseUpdateManyWithoutDepartmentNestedInput = {
  connect?: InputMaybe<Array<ExpenseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ExpenseCreateOrConnectWithoutDepartmentInput>>;
  create?: InputMaybe<Array<ExpenseCreateWithoutDepartmentInput>>;
  createMany?: InputMaybe<ExpenseCreateManyDepartmentInputEnvelope>;
  delete?: InputMaybe<Array<ExpenseWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ExpenseScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ExpenseWhereUniqueInput>>;
  set?: InputMaybe<Array<ExpenseWhereUniqueInput>>;
  update?: InputMaybe<Array<ExpenseUpdateWithWhereUniqueWithoutDepartmentInput>>;
  updateMany?: InputMaybe<Array<ExpenseUpdateManyWithWhereWithoutDepartmentInput>>;
  upsert?: InputMaybe<Array<ExpenseUpsertWithWhereUniqueWithoutDepartmentInput>>;
};

export type ExpenseUpdateManyWithoutFundNestedInput = {
  connect?: InputMaybe<Array<ExpenseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ExpenseCreateOrConnectWithoutFundInput>>;
  create?: InputMaybe<Array<ExpenseCreateWithoutFundInput>>;
  createMany?: InputMaybe<ExpenseCreateManyFundInputEnvelope>;
  delete?: InputMaybe<Array<ExpenseWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ExpenseScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ExpenseWhereUniqueInput>>;
  set?: InputMaybe<Array<ExpenseWhereUniqueInput>>;
  update?: InputMaybe<Array<ExpenseUpdateWithWhereUniqueWithoutFundInput>>;
  updateMany?: InputMaybe<Array<ExpenseUpdateManyWithWhereWithoutFundInput>>;
  upsert?: InputMaybe<Array<ExpenseUpsertWithWhereUniqueWithoutFundInput>>;
};

export type ExpenseUpdateOneWithoutFundTransactionsNestedInput = {
  connect?: InputMaybe<ExpenseWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ExpenseCreateOrConnectWithoutFundTransactionsInput>;
  create?: InputMaybe<ExpenseCreateWithoutFundTransactionsInput>;
  delete?: InputMaybe<ExpenseWhereInput>;
  disconnect?: InputMaybe<ExpenseWhereInput>;
  update?: InputMaybe<ExpenseUpdateToOneWithWhereWithoutFundTransactionsInput>;
  upsert?: InputMaybe<ExpenseUpsertWithoutFundTransactionsInput>;
};

export type ExpenseUpdateToOneWithWhereWithoutFundTransactionsInput = {
  data: ExpenseUpdateWithoutFundTransactionsInput;
  where?: InputMaybe<ExpenseWhereInput>;
};

export type ExpenseUpdateWithWhereUniqueWithoutCategoryInput = {
  data: ExpenseUpdateWithoutCategoryInput;
  where: ExpenseWhereUniqueInput;
};

export type ExpenseUpdateWithWhereUniqueWithoutClubInput = {
  data: ExpenseUpdateWithoutClubInput;
  where: ExpenseWhereUniqueInput;
};

export type ExpenseUpdateWithWhereUniqueWithoutCreatedByInput = {
  data: ExpenseUpdateWithoutCreatedByInput;
  where: ExpenseWhereUniqueInput;
};

export type ExpenseUpdateWithWhereUniqueWithoutDepartmentInput = {
  data: ExpenseUpdateWithoutDepartmentInput;
  where: ExpenseWhereUniqueInput;
};

export type ExpenseUpdateWithWhereUniqueWithoutFundInput = {
  data: ExpenseUpdateWithoutFundInput;
  where: ExpenseWhereUniqueInput;
};

export type ExpenseUpdateWithoutCategoryInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  club?: InputMaybe<ClubUpdateOneWithoutExpensesNestedInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<UserUpdateOneRequiredWithoutExpensesNestedInput>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  department?: InputMaybe<DepartmentUpdateOneWithoutExpensesNestedInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  fund?: InputMaybe<ClubFundUpdateOneWithoutExpensesNestedInput>;
  fundTransactions?: InputMaybe<FundTransactionUpdateManyWithoutExpenseNestedInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ExpenseStatus>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ExpenseUpdateWithoutClubInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  category?: InputMaybe<ExpenseCategoryUpdateOneRequiredWithoutExpensesNestedInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<UserUpdateOneRequiredWithoutExpensesNestedInput>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  department?: InputMaybe<DepartmentUpdateOneWithoutExpensesNestedInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  fund?: InputMaybe<ClubFundUpdateOneWithoutExpensesNestedInput>;
  fundTransactions?: InputMaybe<FundTransactionUpdateManyWithoutExpenseNestedInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ExpenseStatus>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ExpenseUpdateWithoutCreatedByInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  category?: InputMaybe<ExpenseCategoryUpdateOneRequiredWithoutExpensesNestedInput>;
  club?: InputMaybe<ClubUpdateOneWithoutExpensesNestedInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  department?: InputMaybe<DepartmentUpdateOneWithoutExpensesNestedInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  fund?: InputMaybe<ClubFundUpdateOneWithoutExpensesNestedInput>;
  fundTransactions?: InputMaybe<FundTransactionUpdateManyWithoutExpenseNestedInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ExpenseStatus>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ExpenseUpdateWithoutDepartmentInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  category?: InputMaybe<ExpenseCategoryUpdateOneRequiredWithoutExpensesNestedInput>;
  club?: InputMaybe<ClubUpdateOneWithoutExpensesNestedInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<UserUpdateOneRequiredWithoutExpensesNestedInput>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fund?: InputMaybe<ClubFundUpdateOneWithoutExpensesNestedInput>;
  fundTransactions?: InputMaybe<FundTransactionUpdateManyWithoutExpenseNestedInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ExpenseStatus>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ExpenseUpdateWithoutFundInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  category?: InputMaybe<ExpenseCategoryUpdateOneRequiredWithoutExpensesNestedInput>;
  club?: InputMaybe<ClubUpdateOneWithoutExpensesNestedInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<UserUpdateOneRequiredWithoutExpensesNestedInput>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  department?: InputMaybe<DepartmentUpdateOneWithoutExpensesNestedInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  fundTransactions?: InputMaybe<FundTransactionUpdateManyWithoutExpenseNestedInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ExpenseStatus>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ExpenseUpdateWithoutFundTransactionsInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  category?: InputMaybe<ExpenseCategoryUpdateOneRequiredWithoutExpensesNestedInput>;
  club?: InputMaybe<ClubUpdateOneWithoutExpensesNestedInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<UserUpdateOneRequiredWithoutExpensesNestedInput>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  department?: InputMaybe<DepartmentUpdateOneWithoutExpensesNestedInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  fund?: InputMaybe<ClubFundUpdateOneWithoutExpensesNestedInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ExpenseStatus>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ExpenseUpsertWithWhereUniqueWithoutCategoryInput = {
  create: ExpenseCreateWithoutCategoryInput;
  update: ExpenseUpdateWithoutCategoryInput;
  where: ExpenseWhereUniqueInput;
};

export type ExpenseUpsertWithWhereUniqueWithoutClubInput = {
  create: ExpenseCreateWithoutClubInput;
  update: ExpenseUpdateWithoutClubInput;
  where: ExpenseWhereUniqueInput;
};

export type ExpenseUpsertWithWhereUniqueWithoutCreatedByInput = {
  create: ExpenseCreateWithoutCreatedByInput;
  update: ExpenseUpdateWithoutCreatedByInput;
  where: ExpenseWhereUniqueInput;
};

export type ExpenseUpsertWithWhereUniqueWithoutDepartmentInput = {
  create: ExpenseCreateWithoutDepartmentInput;
  update: ExpenseUpdateWithoutDepartmentInput;
  where: ExpenseWhereUniqueInput;
};

export type ExpenseUpsertWithWhereUniqueWithoutFundInput = {
  create: ExpenseCreateWithoutFundInput;
  update: ExpenseUpdateWithoutFundInput;
  where: ExpenseWhereUniqueInput;
};

export type ExpenseUpsertWithoutFundTransactionsInput = {
  create: ExpenseCreateWithoutFundTransactionsInput;
  update: ExpenseUpdateWithoutFundTransactionsInput;
  where?: InputMaybe<ExpenseWhereInput>;
};

export type ExpenseWhereInput = {
  AND?: InputMaybe<Array<ExpenseWhereInput>>;
  NOT?: InputMaybe<Array<ExpenseWhereInput>>;
  OR?: InputMaybe<Array<ExpenseWhereInput>>;
  amount?: InputMaybe<FloatFilter>;
  category?: InputMaybe<ExpenseCategoryScalarRelationFilter>;
  categoryId?: InputMaybe<StringFilter>;
  club?: InputMaybe<ClubNullableScalarRelationFilter>;
  clubId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<UserScalarRelationFilter>;
  createdById?: InputMaybe<StringFilter>;
  date?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  department?: InputMaybe<DepartmentNullableScalarRelationFilter>;
  departmentId?: InputMaybe<StringNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  fund?: InputMaybe<ClubFundNullableScalarRelationFilter>;
  fundId?: InputMaybe<StringNullableFilter>;
  fundTransactions?: InputMaybe<FundTransactionListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumExpenseStatusFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ExpenseWhereUniqueInput = {
  AND?: InputMaybe<Array<ExpenseWhereInput>>;
  NOT?: InputMaybe<Array<ExpenseWhereInput>>;
  OR?: InputMaybe<Array<ExpenseWhereInput>>;
  amount?: InputMaybe<FloatFilter>;
  category?: InputMaybe<ExpenseCategoryScalarRelationFilter>;
  categoryId?: InputMaybe<StringFilter>;
  club?: InputMaybe<ClubNullableScalarRelationFilter>;
  clubId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<UserScalarRelationFilter>;
  createdById?: InputMaybe<StringFilter>;
  date?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  department?: InputMaybe<DepartmentNullableScalarRelationFilter>;
  departmentId?: InputMaybe<StringNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  fund?: InputMaybe<ClubFundNullableScalarRelationFilter>;
  fundId?: InputMaybe<StringNullableFilter>;
  fundTransactions?: InputMaybe<FundTransactionListRelationFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<EnumExpenseStatusFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type FundContribution = {
  __typename?: 'FundContribution';
  _count: FundContributionCount;
  amount: Scalars['Float']['output'];
  clubMember: ClubMember;
  clubMemberId: Scalars['String']['output'];
  confirmedBy?: Maybe<Scalars['String']['output']>;
  confirmedByUser?: Maybe<User>;
  createdAt: Scalars['DateTime']['output'];
  fund: ClubFund;
  fundId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  month?: Maybe<Scalars['Int']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  paidAt: Scalars['DateTime']['output'];
  status: FundContributionStatus;
  transactions?: Maybe<Array<FundTransaction>>;
  updatedAt: Scalars['DateTime']['output'];
  year?: Maybe<Scalars['Int']['output']>;
};

export type FundContributionAvgAggregate = {
  __typename?: 'FundContributionAvgAggregate';
  amount?: Maybe<Scalars['Float']['output']>;
  month?: Maybe<Scalars['Float']['output']>;
  year?: Maybe<Scalars['Float']['output']>;
};

export type FundContributionCount = {
  __typename?: 'FundContributionCount';
  transactions: Scalars['Int']['output'];
};

export type FundContributionCountAggregate = {
  __typename?: 'FundContributionCountAggregate';
  _all: Scalars['Int']['output'];
  amount: Scalars['Int']['output'];
  clubMemberId: Scalars['Int']['output'];
  confirmedBy: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  fundId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  month: Scalars['Int']['output'];
  note: Scalars['Int']['output'];
  paidAt: Scalars['Int']['output'];
  status: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  year: Scalars['Int']['output'];
};

export type FundContributionCreateManyClubMemberInput = {
  amount: Scalars['Float']['input'];
  confirmedBy?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  fundId: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  month?: InputMaybe<Scalars['Int']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  paidAt: Scalars['DateTime']['input'];
  status?: InputMaybe<FundContributionStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};

export type FundContributionCreateManyClubMemberInputEnvelope = {
  data: Array<FundContributionCreateManyClubMemberInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FundContributionCreateManyConfirmedByUserInput = {
  amount: Scalars['Float']['input'];
  clubMemberId: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  fundId: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  month?: InputMaybe<Scalars['Int']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  paidAt: Scalars['DateTime']['input'];
  status?: InputMaybe<FundContributionStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};

export type FundContributionCreateManyConfirmedByUserInputEnvelope = {
  data: Array<FundContributionCreateManyConfirmedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FundContributionCreateManyFundInput = {
  amount: Scalars['Float']['input'];
  clubMemberId: Scalars['String']['input'];
  confirmedBy?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  month?: InputMaybe<Scalars['Int']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  paidAt: Scalars['DateTime']['input'];
  status?: InputMaybe<FundContributionStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};

export type FundContributionCreateManyFundInputEnvelope = {
  data: Array<FundContributionCreateManyFundInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FundContributionCreateNestedManyWithoutClubMemberInput = {
  connect?: InputMaybe<Array<FundContributionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FundContributionCreateOrConnectWithoutClubMemberInput>>;
  create?: InputMaybe<Array<FundContributionCreateWithoutClubMemberInput>>;
  createMany?: InputMaybe<FundContributionCreateManyClubMemberInputEnvelope>;
};

export type FundContributionCreateNestedManyWithoutConfirmedByUserInput = {
  connect?: InputMaybe<Array<FundContributionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FundContributionCreateOrConnectWithoutConfirmedByUserInput>>;
  create?: InputMaybe<Array<FundContributionCreateWithoutConfirmedByUserInput>>;
  createMany?: InputMaybe<FundContributionCreateManyConfirmedByUserInputEnvelope>;
};

export type FundContributionCreateNestedManyWithoutFundInput = {
  connect?: InputMaybe<Array<FundContributionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FundContributionCreateOrConnectWithoutFundInput>>;
  create?: InputMaybe<Array<FundContributionCreateWithoutFundInput>>;
  createMany?: InputMaybe<FundContributionCreateManyFundInputEnvelope>;
};

export type FundContributionCreateNestedOneWithoutTransactionsInput = {
  connect?: InputMaybe<FundContributionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FundContributionCreateOrConnectWithoutTransactionsInput>;
  create?: InputMaybe<FundContributionCreateWithoutTransactionsInput>;
};

export type FundContributionCreateOrConnectWithoutClubMemberInput = {
  create: FundContributionCreateWithoutClubMemberInput;
  where: FundContributionWhereUniqueInput;
};

export type FundContributionCreateOrConnectWithoutConfirmedByUserInput = {
  create: FundContributionCreateWithoutConfirmedByUserInput;
  where: FundContributionWhereUniqueInput;
};

export type FundContributionCreateOrConnectWithoutFundInput = {
  create: FundContributionCreateWithoutFundInput;
  where: FundContributionWhereUniqueInput;
};

export type FundContributionCreateOrConnectWithoutTransactionsInput = {
  create: FundContributionCreateWithoutTransactionsInput;
  where: FundContributionWhereUniqueInput;
};

export type FundContributionCreateWithoutClubMemberInput = {
  amount: Scalars['Float']['input'];
  confirmedByUser?: InputMaybe<UserCreateNestedOneWithoutConfirmedContributionsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  fund: ClubFundCreateNestedOneWithoutContributionsInput;
  id?: InputMaybe<Scalars['String']['input']>;
  month?: InputMaybe<Scalars['Int']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  paidAt: Scalars['DateTime']['input'];
  status?: InputMaybe<FundContributionStatus>;
  transactions?: InputMaybe<FundTransactionCreateNestedManyWithoutContributionInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};

export type FundContributionCreateWithoutConfirmedByUserInput = {
  amount: Scalars['Float']['input'];
  clubMember: ClubMemberCreateNestedOneWithoutFundContributionsInput;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  fund: ClubFundCreateNestedOneWithoutContributionsInput;
  id?: InputMaybe<Scalars['String']['input']>;
  month?: InputMaybe<Scalars['Int']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  paidAt: Scalars['DateTime']['input'];
  status?: InputMaybe<FundContributionStatus>;
  transactions?: InputMaybe<FundTransactionCreateNestedManyWithoutContributionInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};

export type FundContributionCreateWithoutFundInput = {
  amount: Scalars['Float']['input'];
  clubMember: ClubMemberCreateNestedOneWithoutFundContributionsInput;
  confirmedByUser?: InputMaybe<UserCreateNestedOneWithoutConfirmedContributionsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  month?: InputMaybe<Scalars['Int']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  paidAt: Scalars['DateTime']['input'];
  status?: InputMaybe<FundContributionStatus>;
  transactions?: InputMaybe<FundTransactionCreateNestedManyWithoutContributionInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};

export type FundContributionCreateWithoutTransactionsInput = {
  amount: Scalars['Float']['input'];
  clubMember: ClubMemberCreateNestedOneWithoutFundContributionsInput;
  confirmedByUser?: InputMaybe<UserCreateNestedOneWithoutConfirmedContributionsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  fund: ClubFundCreateNestedOneWithoutContributionsInput;
  id?: InputMaybe<Scalars['String']['input']>;
  month?: InputMaybe<Scalars['Int']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  paidAt: Scalars['DateTime']['input'];
  status?: InputMaybe<FundContributionStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};

export type FundContributionFundIdClubMemberIdMonthYearCompoundUniqueInput = {
  clubMemberId: Scalars['String']['input'];
  fundId: Scalars['String']['input'];
  month: Scalars['Int']['input'];
  year: Scalars['Int']['input'];
};

export type FundContributionListRelationFilter = {
  every?: InputMaybe<FundContributionWhereInput>;
  none?: InputMaybe<FundContributionWhereInput>;
  some?: InputMaybe<FundContributionWhereInput>;
};

export type FundContributionMaxAggregate = {
  __typename?: 'FundContributionMaxAggregate';
  amount?: Maybe<Scalars['Float']['output']>;
  clubMemberId?: Maybe<Scalars['String']['output']>;
  confirmedBy?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  fundId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  month?: Maybe<Scalars['Int']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  paidAt?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<FundContributionStatus>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
};

export type FundContributionMinAggregate = {
  __typename?: 'FundContributionMinAggregate';
  amount?: Maybe<Scalars['Float']['output']>;
  clubMemberId?: Maybe<Scalars['String']['output']>;
  confirmedBy?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  fundId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  month?: Maybe<Scalars['Int']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  paidAt?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<FundContributionStatus>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
};

export type FundContributionNullableScalarRelationFilter = {
  is?: InputMaybe<FundContributionWhereInput>;
  isNot?: InputMaybe<FundContributionWhereInput>;
};

export type FundContributionScalarWhereInput = {
  AND?: InputMaybe<Array<FundContributionScalarWhereInput>>;
  NOT?: InputMaybe<Array<FundContributionScalarWhereInput>>;
  OR?: InputMaybe<Array<FundContributionScalarWhereInput>>;
  amount?: InputMaybe<FloatFilter>;
  clubMemberId?: InputMaybe<StringFilter>;
  confirmedBy?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  fundId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  month?: InputMaybe<IntNullableFilter>;
  note?: InputMaybe<StringNullableFilter>;
  paidAt?: InputMaybe<DateTimeFilter>;
  status?: InputMaybe<EnumFundContributionStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  year?: InputMaybe<IntNullableFilter>;
};

export enum FundContributionStatus {
  Cancelled = 'cancelled',
  Confirmed = 'confirmed',
  Pending = 'pending'
}

export type FundContributionSumAggregate = {
  __typename?: 'FundContributionSumAggregate';
  amount?: Maybe<Scalars['Float']['output']>;
  month?: Maybe<Scalars['Int']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
};

export type FundContributionUpdateManyMutationInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  month?: InputMaybe<Scalars['Int']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  paidAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<FundContributionStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};

export type FundContributionUpdateManyWithWhereWithoutClubMemberInput = {
  data: FundContributionUpdateManyMutationInput;
  where: FundContributionScalarWhereInput;
};

export type FundContributionUpdateManyWithWhereWithoutConfirmedByUserInput = {
  data: FundContributionUpdateManyMutationInput;
  where: FundContributionScalarWhereInput;
};

export type FundContributionUpdateManyWithWhereWithoutFundInput = {
  data: FundContributionUpdateManyMutationInput;
  where: FundContributionScalarWhereInput;
};

export type FundContributionUpdateManyWithoutClubMemberNestedInput = {
  connect?: InputMaybe<Array<FundContributionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FundContributionCreateOrConnectWithoutClubMemberInput>>;
  create?: InputMaybe<Array<FundContributionCreateWithoutClubMemberInput>>;
  createMany?: InputMaybe<FundContributionCreateManyClubMemberInputEnvelope>;
  delete?: InputMaybe<Array<FundContributionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FundContributionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FundContributionWhereUniqueInput>>;
  set?: InputMaybe<Array<FundContributionWhereUniqueInput>>;
  update?: InputMaybe<Array<FundContributionUpdateWithWhereUniqueWithoutClubMemberInput>>;
  updateMany?: InputMaybe<Array<FundContributionUpdateManyWithWhereWithoutClubMemberInput>>;
  upsert?: InputMaybe<Array<FundContributionUpsertWithWhereUniqueWithoutClubMemberInput>>;
};

export type FundContributionUpdateManyWithoutConfirmedByUserNestedInput = {
  connect?: InputMaybe<Array<FundContributionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FundContributionCreateOrConnectWithoutConfirmedByUserInput>>;
  create?: InputMaybe<Array<FundContributionCreateWithoutConfirmedByUserInput>>;
  createMany?: InputMaybe<FundContributionCreateManyConfirmedByUserInputEnvelope>;
  delete?: InputMaybe<Array<FundContributionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FundContributionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FundContributionWhereUniqueInput>>;
  set?: InputMaybe<Array<FundContributionWhereUniqueInput>>;
  update?: InputMaybe<Array<FundContributionUpdateWithWhereUniqueWithoutConfirmedByUserInput>>;
  updateMany?: InputMaybe<Array<FundContributionUpdateManyWithWhereWithoutConfirmedByUserInput>>;
  upsert?: InputMaybe<Array<FundContributionUpsertWithWhereUniqueWithoutConfirmedByUserInput>>;
};

export type FundContributionUpdateManyWithoutFundNestedInput = {
  connect?: InputMaybe<Array<FundContributionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FundContributionCreateOrConnectWithoutFundInput>>;
  create?: InputMaybe<Array<FundContributionCreateWithoutFundInput>>;
  createMany?: InputMaybe<FundContributionCreateManyFundInputEnvelope>;
  delete?: InputMaybe<Array<FundContributionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FundContributionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FundContributionWhereUniqueInput>>;
  set?: InputMaybe<Array<FundContributionWhereUniqueInput>>;
  update?: InputMaybe<Array<FundContributionUpdateWithWhereUniqueWithoutFundInput>>;
  updateMany?: InputMaybe<Array<FundContributionUpdateManyWithWhereWithoutFundInput>>;
  upsert?: InputMaybe<Array<FundContributionUpsertWithWhereUniqueWithoutFundInput>>;
};

export type FundContributionUpdateOneWithoutTransactionsNestedInput = {
  connect?: InputMaybe<FundContributionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FundContributionCreateOrConnectWithoutTransactionsInput>;
  create?: InputMaybe<FundContributionCreateWithoutTransactionsInput>;
  delete?: InputMaybe<FundContributionWhereInput>;
  disconnect?: InputMaybe<FundContributionWhereInput>;
  update?: InputMaybe<FundContributionUpdateToOneWithWhereWithoutTransactionsInput>;
  upsert?: InputMaybe<FundContributionUpsertWithoutTransactionsInput>;
};

export type FundContributionUpdateToOneWithWhereWithoutTransactionsInput = {
  data: FundContributionUpdateWithoutTransactionsInput;
  where?: InputMaybe<FundContributionWhereInput>;
};

export type FundContributionUpdateWithWhereUniqueWithoutClubMemberInput = {
  data: FundContributionUpdateWithoutClubMemberInput;
  where: FundContributionWhereUniqueInput;
};

export type FundContributionUpdateWithWhereUniqueWithoutConfirmedByUserInput = {
  data: FundContributionUpdateWithoutConfirmedByUserInput;
  where: FundContributionWhereUniqueInput;
};

export type FundContributionUpdateWithWhereUniqueWithoutFundInput = {
  data: FundContributionUpdateWithoutFundInput;
  where: FundContributionWhereUniqueInput;
};

export type FundContributionUpdateWithoutClubMemberInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  confirmedByUser?: InputMaybe<UserUpdateOneWithoutConfirmedContributionsNestedInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  fund?: InputMaybe<ClubFundUpdateOneRequiredWithoutContributionsNestedInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  month?: InputMaybe<Scalars['Int']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  paidAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<FundContributionStatus>;
  transactions?: InputMaybe<FundTransactionUpdateManyWithoutContributionNestedInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};

export type FundContributionUpdateWithoutConfirmedByUserInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  clubMember?: InputMaybe<ClubMemberUpdateOneRequiredWithoutFundContributionsNestedInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  fund?: InputMaybe<ClubFundUpdateOneRequiredWithoutContributionsNestedInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  month?: InputMaybe<Scalars['Int']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  paidAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<FundContributionStatus>;
  transactions?: InputMaybe<FundTransactionUpdateManyWithoutContributionNestedInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};

export type FundContributionUpdateWithoutFundInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  clubMember?: InputMaybe<ClubMemberUpdateOneRequiredWithoutFundContributionsNestedInput>;
  confirmedByUser?: InputMaybe<UserUpdateOneWithoutConfirmedContributionsNestedInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  month?: InputMaybe<Scalars['Int']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  paidAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<FundContributionStatus>;
  transactions?: InputMaybe<FundTransactionUpdateManyWithoutContributionNestedInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};

export type FundContributionUpdateWithoutTransactionsInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  clubMember?: InputMaybe<ClubMemberUpdateOneRequiredWithoutFundContributionsNestedInput>;
  confirmedByUser?: InputMaybe<UserUpdateOneWithoutConfirmedContributionsNestedInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  fund?: InputMaybe<ClubFundUpdateOneRequiredWithoutContributionsNestedInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  month?: InputMaybe<Scalars['Int']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  paidAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<FundContributionStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};

export type FundContributionUpsertWithWhereUniqueWithoutClubMemberInput = {
  create: FundContributionCreateWithoutClubMemberInput;
  update: FundContributionUpdateWithoutClubMemberInput;
  where: FundContributionWhereUniqueInput;
};

export type FundContributionUpsertWithWhereUniqueWithoutConfirmedByUserInput = {
  create: FundContributionCreateWithoutConfirmedByUserInput;
  update: FundContributionUpdateWithoutConfirmedByUserInput;
  where: FundContributionWhereUniqueInput;
};

export type FundContributionUpsertWithWhereUniqueWithoutFundInput = {
  create: FundContributionCreateWithoutFundInput;
  update: FundContributionUpdateWithoutFundInput;
  where: FundContributionWhereUniqueInput;
};

export type FundContributionUpsertWithoutTransactionsInput = {
  create: FundContributionCreateWithoutTransactionsInput;
  update: FundContributionUpdateWithoutTransactionsInput;
  where?: InputMaybe<FundContributionWhereInput>;
};

export type FundContributionWhereInput = {
  AND?: InputMaybe<Array<FundContributionWhereInput>>;
  NOT?: InputMaybe<Array<FundContributionWhereInput>>;
  OR?: InputMaybe<Array<FundContributionWhereInput>>;
  amount?: InputMaybe<FloatFilter>;
  clubMember?: InputMaybe<ClubMemberScalarRelationFilter>;
  clubMemberId?: InputMaybe<StringFilter>;
  confirmedBy?: InputMaybe<StringNullableFilter>;
  confirmedByUser?: InputMaybe<UserNullableScalarRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  fund?: InputMaybe<ClubFundScalarRelationFilter>;
  fundId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  month?: InputMaybe<IntNullableFilter>;
  note?: InputMaybe<StringNullableFilter>;
  paidAt?: InputMaybe<DateTimeFilter>;
  status?: InputMaybe<EnumFundContributionStatusFilter>;
  transactions?: InputMaybe<FundTransactionListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  year?: InputMaybe<IntNullableFilter>;
};

export type FundContributionWhereUniqueInput = {
  AND?: InputMaybe<Array<FundContributionWhereInput>>;
  NOT?: InputMaybe<Array<FundContributionWhereInput>>;
  OR?: InputMaybe<Array<FundContributionWhereInput>>;
  amount?: InputMaybe<FloatFilter>;
  clubMember?: InputMaybe<ClubMemberScalarRelationFilter>;
  clubMemberId?: InputMaybe<StringFilter>;
  confirmedBy?: InputMaybe<StringNullableFilter>;
  confirmedByUser?: InputMaybe<UserNullableScalarRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  fund?: InputMaybe<ClubFundScalarRelationFilter>;
  fundId?: InputMaybe<StringFilter>;
  fundId_clubMemberId_month_year?: InputMaybe<FundContributionFundIdClubMemberIdMonthYearCompoundUniqueInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  month?: InputMaybe<IntNullableFilter>;
  note?: InputMaybe<StringNullableFilter>;
  paidAt?: InputMaybe<DateTimeFilter>;
  status?: InputMaybe<EnumFundContributionStatusFilter>;
  transactions?: InputMaybe<FundTransactionListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  year?: InputMaybe<IntNullableFilter>;
};

export enum FundFlow {
  Inflow = 'inflow',
  Outflow = 'outflow'
}

export type FundTransaction = {
  __typename?: 'FundTransaction';
  amount: Scalars['Float']['output'];
  balanceAfter: Scalars['Float']['output'];
  contribution?: Maybe<FundContribution>;
  createdAt: Scalars['DateTime']['output'];
  createdBy: User;
  createdById: Scalars['String']['output'];
  expense?: Maybe<Expense>;
  flow: FundFlow;
  fund: ClubFund;
  fundId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  note?: Maybe<Scalars['String']['output']>;
  refContribId?: Maybe<Scalars['String']['output']>;
  refExpenseId?: Maybe<Scalars['String']['output']>;
  refTransactionId?: Maybe<Scalars['String']['output']>;
  type: FundTransactionType;
};

export type FundTransactionAvgAggregate = {
  __typename?: 'FundTransactionAvgAggregate';
  amount?: Maybe<Scalars['Float']['output']>;
  balanceAfter?: Maybe<Scalars['Float']['output']>;
};

export type FundTransactionCountAggregate = {
  __typename?: 'FundTransactionCountAggregate';
  _all: Scalars['Int']['output'];
  amount: Scalars['Int']['output'];
  balanceAfter: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  createdById: Scalars['Int']['output'];
  flow: Scalars['Int']['output'];
  fundId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  note: Scalars['Int']['output'];
  refContribId: Scalars['Int']['output'];
  refExpenseId: Scalars['Int']['output'];
  refTransactionId: Scalars['Int']['output'];
  type: Scalars['Int']['output'];
};

export type FundTransactionCreateManyContributionInput = {
  amount: Scalars['Float']['input'];
  balanceAfter: Scalars['Float']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdById: Scalars['String']['input'];
  flow: FundFlow;
  fundId: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  refExpenseId?: InputMaybe<Scalars['String']['input']>;
  refTransactionId?: InputMaybe<Scalars['String']['input']>;
  type: FundTransactionType;
};

export type FundTransactionCreateManyContributionInputEnvelope = {
  data: Array<FundTransactionCreateManyContributionInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FundTransactionCreateManyCreatedByInput = {
  amount: Scalars['Float']['input'];
  balanceAfter: Scalars['Float']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  flow: FundFlow;
  fundId: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  refContribId?: InputMaybe<Scalars['String']['input']>;
  refExpenseId?: InputMaybe<Scalars['String']['input']>;
  refTransactionId?: InputMaybe<Scalars['String']['input']>;
  type: FundTransactionType;
};

export type FundTransactionCreateManyCreatedByInputEnvelope = {
  data: Array<FundTransactionCreateManyCreatedByInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FundTransactionCreateManyExpenseInput = {
  amount: Scalars['Float']['input'];
  balanceAfter: Scalars['Float']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdById: Scalars['String']['input'];
  flow: FundFlow;
  fundId: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  refContribId?: InputMaybe<Scalars['String']['input']>;
  refTransactionId?: InputMaybe<Scalars['String']['input']>;
  type: FundTransactionType;
};

export type FundTransactionCreateManyExpenseInputEnvelope = {
  data: Array<FundTransactionCreateManyExpenseInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FundTransactionCreateManyFundInput = {
  amount: Scalars['Float']['input'];
  balanceAfter: Scalars['Float']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdById: Scalars['String']['input'];
  flow: FundFlow;
  id?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  refContribId?: InputMaybe<Scalars['String']['input']>;
  refExpenseId?: InputMaybe<Scalars['String']['input']>;
  refTransactionId?: InputMaybe<Scalars['String']['input']>;
  type: FundTransactionType;
};

export type FundTransactionCreateManyFundInputEnvelope = {
  data: Array<FundTransactionCreateManyFundInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FundTransactionCreateNestedManyWithoutContributionInput = {
  connect?: InputMaybe<Array<FundTransactionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FundTransactionCreateOrConnectWithoutContributionInput>>;
  create?: InputMaybe<Array<FundTransactionCreateWithoutContributionInput>>;
  createMany?: InputMaybe<FundTransactionCreateManyContributionInputEnvelope>;
};

export type FundTransactionCreateNestedManyWithoutCreatedByInput = {
  connect?: InputMaybe<Array<FundTransactionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FundTransactionCreateOrConnectWithoutCreatedByInput>>;
  create?: InputMaybe<Array<FundTransactionCreateWithoutCreatedByInput>>;
  createMany?: InputMaybe<FundTransactionCreateManyCreatedByInputEnvelope>;
};

export type FundTransactionCreateNestedManyWithoutExpenseInput = {
  connect?: InputMaybe<Array<FundTransactionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FundTransactionCreateOrConnectWithoutExpenseInput>>;
  create?: InputMaybe<Array<FundTransactionCreateWithoutExpenseInput>>;
  createMany?: InputMaybe<FundTransactionCreateManyExpenseInputEnvelope>;
};

export type FundTransactionCreateNestedManyWithoutFundInput = {
  connect?: InputMaybe<Array<FundTransactionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FundTransactionCreateOrConnectWithoutFundInput>>;
  create?: InputMaybe<Array<FundTransactionCreateWithoutFundInput>>;
  createMany?: InputMaybe<FundTransactionCreateManyFundInputEnvelope>;
};

export type FundTransactionCreateOrConnectWithoutContributionInput = {
  create: FundTransactionCreateWithoutContributionInput;
  where: FundTransactionWhereUniqueInput;
};

export type FundTransactionCreateOrConnectWithoutCreatedByInput = {
  create: FundTransactionCreateWithoutCreatedByInput;
  where: FundTransactionWhereUniqueInput;
};

export type FundTransactionCreateOrConnectWithoutExpenseInput = {
  create: FundTransactionCreateWithoutExpenseInput;
  where: FundTransactionWhereUniqueInput;
};

export type FundTransactionCreateOrConnectWithoutFundInput = {
  create: FundTransactionCreateWithoutFundInput;
  where: FundTransactionWhereUniqueInput;
};

export type FundTransactionCreateWithoutContributionInput = {
  amount: Scalars['Float']['input'];
  balanceAfter: Scalars['Float']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy: UserCreateNestedOneWithoutFundTransactionsInput;
  expense?: InputMaybe<ExpenseCreateNestedOneWithoutFundTransactionsInput>;
  flow: FundFlow;
  fund: ClubFundCreateNestedOneWithoutTransactionsInput;
  id?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  refTransactionId?: InputMaybe<Scalars['String']['input']>;
  type: FundTransactionType;
};

export type FundTransactionCreateWithoutCreatedByInput = {
  amount: Scalars['Float']['input'];
  balanceAfter: Scalars['Float']['input'];
  contribution?: InputMaybe<FundContributionCreateNestedOneWithoutTransactionsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  expense?: InputMaybe<ExpenseCreateNestedOneWithoutFundTransactionsInput>;
  flow: FundFlow;
  fund: ClubFundCreateNestedOneWithoutTransactionsInput;
  id?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  refTransactionId?: InputMaybe<Scalars['String']['input']>;
  type: FundTransactionType;
};

export type FundTransactionCreateWithoutExpenseInput = {
  amount: Scalars['Float']['input'];
  balanceAfter: Scalars['Float']['input'];
  contribution?: InputMaybe<FundContributionCreateNestedOneWithoutTransactionsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy: UserCreateNestedOneWithoutFundTransactionsInput;
  flow: FundFlow;
  fund: ClubFundCreateNestedOneWithoutTransactionsInput;
  id?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  refTransactionId?: InputMaybe<Scalars['String']['input']>;
  type: FundTransactionType;
};

export type FundTransactionCreateWithoutFundInput = {
  amount: Scalars['Float']['input'];
  balanceAfter: Scalars['Float']['input'];
  contribution?: InputMaybe<FundContributionCreateNestedOneWithoutTransactionsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy: UserCreateNestedOneWithoutFundTransactionsInput;
  expense?: InputMaybe<ExpenseCreateNestedOneWithoutFundTransactionsInput>;
  flow: FundFlow;
  id?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  refTransactionId?: InputMaybe<Scalars['String']['input']>;
  type: FundTransactionType;
};

export type FundTransactionListRelationFilter = {
  every?: InputMaybe<FundTransactionWhereInput>;
  none?: InputMaybe<FundTransactionWhereInput>;
  some?: InputMaybe<FundTransactionWhereInput>;
};

export type FundTransactionMaxAggregate = {
  __typename?: 'FundTransactionMaxAggregate';
  amount?: Maybe<Scalars['Float']['output']>;
  balanceAfter?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdById?: Maybe<Scalars['String']['output']>;
  flow?: Maybe<FundFlow>;
  fundId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  refContribId?: Maybe<Scalars['String']['output']>;
  refExpenseId?: Maybe<Scalars['String']['output']>;
  refTransactionId?: Maybe<Scalars['String']['output']>;
  type?: Maybe<FundTransactionType>;
};

export type FundTransactionMinAggregate = {
  __typename?: 'FundTransactionMinAggregate';
  amount?: Maybe<Scalars['Float']['output']>;
  balanceAfter?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdById?: Maybe<Scalars['String']['output']>;
  flow?: Maybe<FundFlow>;
  fundId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  refContribId?: Maybe<Scalars['String']['output']>;
  refExpenseId?: Maybe<Scalars['String']['output']>;
  refTransactionId?: Maybe<Scalars['String']['output']>;
  type?: Maybe<FundTransactionType>;
};

export type FundTransactionScalarWhereInput = {
  AND?: InputMaybe<Array<FundTransactionScalarWhereInput>>;
  NOT?: InputMaybe<Array<FundTransactionScalarWhereInput>>;
  OR?: InputMaybe<Array<FundTransactionScalarWhereInput>>;
  amount?: InputMaybe<FloatFilter>;
  balanceAfter?: InputMaybe<FloatFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<StringFilter>;
  flow?: InputMaybe<EnumFundFlowFilter>;
  fundId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  note?: InputMaybe<StringNullableFilter>;
  refContribId?: InputMaybe<StringNullableFilter>;
  refExpenseId?: InputMaybe<StringNullableFilter>;
  refTransactionId?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<EnumFundTransactionTypeFilter>;
};

export type FundTransactionSumAggregate = {
  __typename?: 'FundTransactionSumAggregate';
  amount?: Maybe<Scalars['Float']['output']>;
  balanceAfter?: Maybe<Scalars['Float']['output']>;
};

export enum FundTransactionType {
  Adjustment = 'adjustment',
  Contribution = 'contribution',
  Expense = 'expense',
  Refund = 'refund'
}

export type FundTransactionUncheckedCreateNestedManyWithoutExpenseInput = {
  connect?: InputMaybe<Array<FundTransactionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FundTransactionCreateOrConnectWithoutExpenseInput>>;
  create?: InputMaybe<Array<FundTransactionCreateWithoutExpenseInput>>;
  createMany?: InputMaybe<FundTransactionCreateManyExpenseInputEnvelope>;
};

export type FundTransactionUncheckedUpdateManyWithoutExpenseNestedInput = {
  connect?: InputMaybe<Array<FundTransactionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FundTransactionCreateOrConnectWithoutExpenseInput>>;
  create?: InputMaybe<Array<FundTransactionCreateWithoutExpenseInput>>;
  createMany?: InputMaybe<FundTransactionCreateManyExpenseInputEnvelope>;
  delete?: InputMaybe<Array<FundTransactionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FundTransactionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FundTransactionWhereUniqueInput>>;
  set?: InputMaybe<Array<FundTransactionWhereUniqueInput>>;
  update?: InputMaybe<Array<FundTransactionUpdateWithWhereUniqueWithoutExpenseInput>>;
  updateMany?: InputMaybe<Array<FundTransactionUpdateManyWithWhereWithoutExpenseInput>>;
  upsert?: InputMaybe<Array<FundTransactionUpsertWithWhereUniqueWithoutExpenseInput>>;
};

export type FundTransactionUpdateManyMutationInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  balanceAfter?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  flow?: InputMaybe<FundFlow>;
  id?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  refTransactionId?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<FundTransactionType>;
};

export type FundTransactionUpdateManyWithWhereWithoutContributionInput = {
  data: FundTransactionUpdateManyMutationInput;
  where: FundTransactionScalarWhereInput;
};

export type FundTransactionUpdateManyWithWhereWithoutCreatedByInput = {
  data: FundTransactionUpdateManyMutationInput;
  where: FundTransactionScalarWhereInput;
};

export type FundTransactionUpdateManyWithWhereWithoutExpenseInput = {
  data: FundTransactionUpdateManyMutationInput;
  where: FundTransactionScalarWhereInput;
};

export type FundTransactionUpdateManyWithWhereWithoutFundInput = {
  data: FundTransactionUpdateManyMutationInput;
  where: FundTransactionScalarWhereInput;
};

export type FundTransactionUpdateManyWithoutContributionNestedInput = {
  connect?: InputMaybe<Array<FundTransactionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FundTransactionCreateOrConnectWithoutContributionInput>>;
  create?: InputMaybe<Array<FundTransactionCreateWithoutContributionInput>>;
  createMany?: InputMaybe<FundTransactionCreateManyContributionInputEnvelope>;
  delete?: InputMaybe<Array<FundTransactionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FundTransactionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FundTransactionWhereUniqueInput>>;
  set?: InputMaybe<Array<FundTransactionWhereUniqueInput>>;
  update?: InputMaybe<Array<FundTransactionUpdateWithWhereUniqueWithoutContributionInput>>;
  updateMany?: InputMaybe<Array<FundTransactionUpdateManyWithWhereWithoutContributionInput>>;
  upsert?: InputMaybe<Array<FundTransactionUpsertWithWhereUniqueWithoutContributionInput>>;
};

export type FundTransactionUpdateManyWithoutCreatedByNestedInput = {
  connect?: InputMaybe<Array<FundTransactionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FundTransactionCreateOrConnectWithoutCreatedByInput>>;
  create?: InputMaybe<Array<FundTransactionCreateWithoutCreatedByInput>>;
  createMany?: InputMaybe<FundTransactionCreateManyCreatedByInputEnvelope>;
  delete?: InputMaybe<Array<FundTransactionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FundTransactionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FundTransactionWhereUniqueInput>>;
  set?: InputMaybe<Array<FundTransactionWhereUniqueInput>>;
  update?: InputMaybe<Array<FundTransactionUpdateWithWhereUniqueWithoutCreatedByInput>>;
  updateMany?: InputMaybe<Array<FundTransactionUpdateManyWithWhereWithoutCreatedByInput>>;
  upsert?: InputMaybe<Array<FundTransactionUpsertWithWhereUniqueWithoutCreatedByInput>>;
};

export type FundTransactionUpdateManyWithoutExpenseNestedInput = {
  connect?: InputMaybe<Array<FundTransactionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FundTransactionCreateOrConnectWithoutExpenseInput>>;
  create?: InputMaybe<Array<FundTransactionCreateWithoutExpenseInput>>;
  createMany?: InputMaybe<FundTransactionCreateManyExpenseInputEnvelope>;
  delete?: InputMaybe<Array<FundTransactionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FundTransactionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FundTransactionWhereUniqueInput>>;
  set?: InputMaybe<Array<FundTransactionWhereUniqueInput>>;
  update?: InputMaybe<Array<FundTransactionUpdateWithWhereUniqueWithoutExpenseInput>>;
  updateMany?: InputMaybe<Array<FundTransactionUpdateManyWithWhereWithoutExpenseInput>>;
  upsert?: InputMaybe<Array<FundTransactionUpsertWithWhereUniqueWithoutExpenseInput>>;
};

export type FundTransactionUpdateManyWithoutFundNestedInput = {
  connect?: InputMaybe<Array<FundTransactionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FundTransactionCreateOrConnectWithoutFundInput>>;
  create?: InputMaybe<Array<FundTransactionCreateWithoutFundInput>>;
  createMany?: InputMaybe<FundTransactionCreateManyFundInputEnvelope>;
  delete?: InputMaybe<Array<FundTransactionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FundTransactionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FundTransactionWhereUniqueInput>>;
  set?: InputMaybe<Array<FundTransactionWhereUniqueInput>>;
  update?: InputMaybe<Array<FundTransactionUpdateWithWhereUniqueWithoutFundInput>>;
  updateMany?: InputMaybe<Array<FundTransactionUpdateManyWithWhereWithoutFundInput>>;
  upsert?: InputMaybe<Array<FundTransactionUpsertWithWhereUniqueWithoutFundInput>>;
};

export type FundTransactionUpdateWithWhereUniqueWithoutContributionInput = {
  data: FundTransactionUpdateWithoutContributionInput;
  where: FundTransactionWhereUniqueInput;
};

export type FundTransactionUpdateWithWhereUniqueWithoutCreatedByInput = {
  data: FundTransactionUpdateWithoutCreatedByInput;
  where: FundTransactionWhereUniqueInput;
};

export type FundTransactionUpdateWithWhereUniqueWithoutExpenseInput = {
  data: FundTransactionUpdateWithoutExpenseInput;
  where: FundTransactionWhereUniqueInput;
};

export type FundTransactionUpdateWithWhereUniqueWithoutFundInput = {
  data: FundTransactionUpdateWithoutFundInput;
  where: FundTransactionWhereUniqueInput;
};

export type FundTransactionUpdateWithoutContributionInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  balanceAfter?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<UserUpdateOneRequiredWithoutFundTransactionsNestedInput>;
  expense?: InputMaybe<ExpenseUpdateOneWithoutFundTransactionsNestedInput>;
  flow?: InputMaybe<FundFlow>;
  fund?: InputMaybe<ClubFundUpdateOneRequiredWithoutTransactionsNestedInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  refTransactionId?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<FundTransactionType>;
};

export type FundTransactionUpdateWithoutCreatedByInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  balanceAfter?: InputMaybe<Scalars['Float']['input']>;
  contribution?: InputMaybe<FundContributionUpdateOneWithoutTransactionsNestedInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  expense?: InputMaybe<ExpenseUpdateOneWithoutFundTransactionsNestedInput>;
  flow?: InputMaybe<FundFlow>;
  fund?: InputMaybe<ClubFundUpdateOneRequiredWithoutTransactionsNestedInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  refTransactionId?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<FundTransactionType>;
};

export type FundTransactionUpdateWithoutExpenseInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  balanceAfter?: InputMaybe<Scalars['Float']['input']>;
  contribution?: InputMaybe<FundContributionUpdateOneWithoutTransactionsNestedInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<UserUpdateOneRequiredWithoutFundTransactionsNestedInput>;
  flow?: InputMaybe<FundFlow>;
  fund?: InputMaybe<ClubFundUpdateOneRequiredWithoutTransactionsNestedInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  refTransactionId?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<FundTransactionType>;
};

export type FundTransactionUpdateWithoutFundInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  balanceAfter?: InputMaybe<Scalars['Float']['input']>;
  contribution?: InputMaybe<FundContributionUpdateOneWithoutTransactionsNestedInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<UserUpdateOneRequiredWithoutFundTransactionsNestedInput>;
  expense?: InputMaybe<ExpenseUpdateOneWithoutFundTransactionsNestedInput>;
  flow?: InputMaybe<FundFlow>;
  id?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  refTransactionId?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<FundTransactionType>;
};

export type FundTransactionUpsertWithWhereUniqueWithoutContributionInput = {
  create: FundTransactionCreateWithoutContributionInput;
  update: FundTransactionUpdateWithoutContributionInput;
  where: FundTransactionWhereUniqueInput;
};

export type FundTransactionUpsertWithWhereUniqueWithoutCreatedByInput = {
  create: FundTransactionCreateWithoutCreatedByInput;
  update: FundTransactionUpdateWithoutCreatedByInput;
  where: FundTransactionWhereUniqueInput;
};

export type FundTransactionUpsertWithWhereUniqueWithoutExpenseInput = {
  create: FundTransactionCreateWithoutExpenseInput;
  update: FundTransactionUpdateWithoutExpenseInput;
  where: FundTransactionWhereUniqueInput;
};

export type FundTransactionUpsertWithWhereUniqueWithoutFundInput = {
  create: FundTransactionCreateWithoutFundInput;
  update: FundTransactionUpdateWithoutFundInput;
  where: FundTransactionWhereUniqueInput;
};

export type FundTransactionWhereInput = {
  AND?: InputMaybe<Array<FundTransactionWhereInput>>;
  NOT?: InputMaybe<Array<FundTransactionWhereInput>>;
  OR?: InputMaybe<Array<FundTransactionWhereInput>>;
  amount?: InputMaybe<FloatFilter>;
  balanceAfter?: InputMaybe<FloatFilter>;
  contribution?: InputMaybe<FundContributionNullableScalarRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<UserScalarRelationFilter>;
  createdById?: InputMaybe<StringFilter>;
  expense?: InputMaybe<ExpenseNullableScalarRelationFilter>;
  flow?: InputMaybe<EnumFundFlowFilter>;
  fund?: InputMaybe<ClubFundScalarRelationFilter>;
  fundId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  note?: InputMaybe<StringNullableFilter>;
  refContribId?: InputMaybe<StringNullableFilter>;
  refExpenseId?: InputMaybe<StringNullableFilter>;
  refTransactionId?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<EnumFundTransactionTypeFilter>;
};

export type FundTransactionWhereUniqueInput = {
  AND?: InputMaybe<Array<FundTransactionWhereInput>>;
  NOT?: InputMaybe<Array<FundTransactionWhereInput>>;
  OR?: InputMaybe<Array<FundTransactionWhereInput>>;
  amount?: InputMaybe<FloatFilter>;
  balanceAfter?: InputMaybe<FloatFilter>;
  contribution?: InputMaybe<FundContributionNullableScalarRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<UserScalarRelationFilter>;
  createdById?: InputMaybe<StringFilter>;
  expense?: InputMaybe<ExpenseNullableScalarRelationFilter>;
  flow?: InputMaybe<EnumFundFlowFilter>;
  fund?: InputMaybe<ClubFundScalarRelationFilter>;
  fundId?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<StringNullableFilter>;
  refContribId?: InputMaybe<StringNullableFilter>;
  refExpenseId?: InputMaybe<StringNullableFilter>;
  refTransactionId?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<EnumFundTransactionTypeFilter>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type InventoryItem = {
  __typename?: 'InventoryItem';
  category?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  minStock: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  sku: Scalars['String']['output'];
  status: InventoryItemStatus;
  stock: Scalars['Int']['output'];
  unit: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type InventoryItemAvgAggregate = {
  __typename?: 'InventoryItemAvgAggregate';
  minStock?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  stock?: Maybe<Scalars['Float']['output']>;
};

export type InventoryItemCountAggregate = {
  __typename?: 'InventoryItemCountAggregate';
  _all: Scalars['Int']['output'];
  category: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  minStock: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  price: Scalars['Int']['output'];
  sku: Scalars['Int']['output'];
  status: Scalars['Int']['output'];
  stock: Scalars['Int']['output'];
  unit: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type InventoryItemMaxAggregate = {
  __typename?: 'InventoryItemMaxAggregate';
  category?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  minStock?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  status?: Maybe<InventoryItemStatus>;
  stock?: Maybe<Scalars['Int']['output']>;
  unit?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type InventoryItemMinAggregate = {
  __typename?: 'InventoryItemMinAggregate';
  category?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  minStock?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  status?: Maybe<InventoryItemStatus>;
  stock?: Maybe<Scalars['Int']['output']>;
  unit?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export enum InventoryItemStatus {
  Available = 'available',
  Discontinued = 'discontinued',
  LowStock = 'low_stock',
  OutOfStock = 'out_of_stock'
}

export type InventoryItemSumAggregate = {
  __typename?: 'InventoryItemSumAggregate';
  minStock?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  stock?: Maybe<Scalars['Int']['output']>;
};

export type InventoryItemUncheckedCreateInput = {
  category?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  minStock?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  price?: InputMaybe<Scalars['Float']['input']>;
  sku: Scalars['String']['input'];
  status?: InputMaybe<InventoryItemStatus>;
  stock?: InputMaybe<Scalars['Int']['input']>;
  unit?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type InventoryItemUncheckedUpdateInput = {
  category?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  minStock?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<InventoryItemStatus>;
  stock?: InputMaybe<Scalars['Int']['input']>;
  unit?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Invoice = {
  __typename?: 'Invoice';
  amount: Scalars['Float']['output'];
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  customer?: Maybe<Customer>;
  customerId?: Maybe<Scalars['String']['output']>;
  dueDate?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  status: InvoiceStatus;
  tax: Scalars['Float']['output'];
  total: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type InvoiceAvgAggregate = {
  __typename?: 'InvoiceAvgAggregate';
  amount?: Maybe<Scalars['Float']['output']>;
  tax?: Maybe<Scalars['Float']['output']>;
  total?: Maybe<Scalars['Float']['output']>;
};

export type InvoiceCountAggregate = {
  __typename?: 'InvoiceCountAggregate';
  _all: Scalars['Int']['output'];
  amount: Scalars['Int']['output'];
  code: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  customerId: Scalars['Int']['output'];
  dueDate: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  issuedAt: Scalars['Int']['output'];
  status: Scalars['Int']['output'];
  tax: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type InvoiceCreateManyCustomerInput = {
  amount: Scalars['Float']['input'];
  code: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  dueDate?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  issuedAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<InvoiceStatus>;
  tax?: InputMaybe<Scalars['Float']['input']>;
  total: Scalars['Float']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type InvoiceCreateManyCustomerInputEnvelope = {
  data: Array<InvoiceCreateManyCustomerInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type InvoiceCreateNestedManyWithoutCustomerInput = {
  connect?: InputMaybe<Array<InvoiceWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<InvoiceCreateOrConnectWithoutCustomerInput>>;
  create?: InputMaybe<Array<InvoiceCreateWithoutCustomerInput>>;
  createMany?: InputMaybe<InvoiceCreateManyCustomerInputEnvelope>;
};

export type InvoiceCreateOrConnectWithoutCustomerInput = {
  create: InvoiceCreateWithoutCustomerInput;
  where: InvoiceWhereUniqueInput;
};

export type InvoiceCreateWithoutCustomerInput = {
  amount: Scalars['Float']['input'];
  code: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  dueDate?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  issuedAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<InvoiceStatus>;
  tax?: InputMaybe<Scalars['Float']['input']>;
  total: Scalars['Float']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type InvoiceListRelationFilter = {
  every?: InputMaybe<InvoiceWhereInput>;
  none?: InputMaybe<InvoiceWhereInput>;
  some?: InputMaybe<InvoiceWhereInput>;
};

export type InvoiceMaxAggregate = {
  __typename?: 'InvoiceMaxAggregate';
  amount?: Maybe<Scalars['Float']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  customerId?: Maybe<Scalars['String']['output']>;
  dueDate?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<InvoiceStatus>;
  tax?: Maybe<Scalars['Float']['output']>;
  total?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type InvoiceMinAggregate = {
  __typename?: 'InvoiceMinAggregate';
  amount?: Maybe<Scalars['Float']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  customerId?: Maybe<Scalars['String']['output']>;
  dueDate?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<InvoiceStatus>;
  tax?: Maybe<Scalars['Float']['output']>;
  total?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type InvoiceScalarWhereInput = {
  AND?: InputMaybe<Array<InvoiceScalarWhereInput>>;
  NOT?: InputMaybe<Array<InvoiceScalarWhereInput>>;
  OR?: InputMaybe<Array<InvoiceScalarWhereInput>>;
  amount?: InputMaybe<FloatFilter>;
  code?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  customerId?: InputMaybe<StringNullableFilter>;
  dueDate?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  issuedAt?: InputMaybe<DateTimeNullableFilter>;
  status?: InputMaybe<EnumInvoiceStatusFilter>;
  tax?: InputMaybe<FloatFilter>;
  total?: InputMaybe<FloatFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export enum InvoiceStatus {
  Cancelled = 'cancelled',
  Draft = 'draft',
  Overdue = 'overdue',
  Paid = 'paid',
  Pending = 'pending'
}

export type InvoiceSumAggregate = {
  __typename?: 'InvoiceSumAggregate';
  amount?: Maybe<Scalars['Float']['output']>;
  tax?: Maybe<Scalars['Float']['output']>;
  total?: Maybe<Scalars['Float']['output']>;
};

export type InvoiceUncheckedCreateInput = {
  amount: Scalars['Float']['input'];
  code: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customerId?: InputMaybe<Scalars['String']['input']>;
  dueDate?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  issuedAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<InvoiceStatus>;
  tax?: InputMaybe<Scalars['Float']['input']>;
  total: Scalars['Float']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type InvoiceUncheckedCreateNestedManyWithoutCustomerInput = {
  connect?: InputMaybe<Array<InvoiceWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<InvoiceCreateOrConnectWithoutCustomerInput>>;
  create?: InputMaybe<Array<InvoiceCreateWithoutCustomerInput>>;
  createMany?: InputMaybe<InvoiceCreateManyCustomerInputEnvelope>;
};

export type InvoiceUncheckedUpdateInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customerId?: InputMaybe<Scalars['String']['input']>;
  dueDate?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  issuedAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<InvoiceStatus>;
  tax?: InputMaybe<Scalars['Float']['input']>;
  total?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type InvoiceUncheckedUpdateManyWithoutCustomerNestedInput = {
  connect?: InputMaybe<Array<InvoiceWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<InvoiceCreateOrConnectWithoutCustomerInput>>;
  create?: InputMaybe<Array<InvoiceCreateWithoutCustomerInput>>;
  createMany?: InputMaybe<InvoiceCreateManyCustomerInputEnvelope>;
  delete?: InputMaybe<Array<InvoiceWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<InvoiceScalarWhereInput>>;
  disconnect?: InputMaybe<Array<InvoiceWhereUniqueInput>>;
  set?: InputMaybe<Array<InvoiceWhereUniqueInput>>;
  update?: InputMaybe<Array<InvoiceUpdateWithWhereUniqueWithoutCustomerInput>>;
  updateMany?: InputMaybe<Array<InvoiceUpdateManyWithWhereWithoutCustomerInput>>;
  upsert?: InputMaybe<Array<InvoiceUpsertWithWhereUniqueWithoutCustomerInput>>;
};

export type InvoiceUpdateManyMutationInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  dueDate?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  issuedAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<InvoiceStatus>;
  tax?: InputMaybe<Scalars['Float']['input']>;
  total?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type InvoiceUpdateManyWithWhereWithoutCustomerInput = {
  data: InvoiceUpdateManyMutationInput;
  where: InvoiceScalarWhereInput;
};

export type InvoiceUpdateManyWithoutCustomerNestedInput = {
  connect?: InputMaybe<Array<InvoiceWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<InvoiceCreateOrConnectWithoutCustomerInput>>;
  create?: InputMaybe<Array<InvoiceCreateWithoutCustomerInput>>;
  createMany?: InputMaybe<InvoiceCreateManyCustomerInputEnvelope>;
  delete?: InputMaybe<Array<InvoiceWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<InvoiceScalarWhereInput>>;
  disconnect?: InputMaybe<Array<InvoiceWhereUniqueInput>>;
  set?: InputMaybe<Array<InvoiceWhereUniqueInput>>;
  update?: InputMaybe<Array<InvoiceUpdateWithWhereUniqueWithoutCustomerInput>>;
  updateMany?: InputMaybe<Array<InvoiceUpdateManyWithWhereWithoutCustomerInput>>;
  upsert?: InputMaybe<Array<InvoiceUpsertWithWhereUniqueWithoutCustomerInput>>;
};

export type InvoiceUpdateWithWhereUniqueWithoutCustomerInput = {
  data: InvoiceUpdateWithoutCustomerInput;
  where: InvoiceWhereUniqueInput;
};

export type InvoiceUpdateWithoutCustomerInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  dueDate?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  issuedAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<InvoiceStatus>;
  tax?: InputMaybe<Scalars['Float']['input']>;
  total?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type InvoiceUpsertWithWhereUniqueWithoutCustomerInput = {
  create: InvoiceCreateWithoutCustomerInput;
  update: InvoiceUpdateWithoutCustomerInput;
  where: InvoiceWhereUniqueInput;
};

export type InvoiceWhereInput = {
  AND?: InputMaybe<Array<InvoiceWhereInput>>;
  NOT?: InputMaybe<Array<InvoiceWhereInput>>;
  OR?: InputMaybe<Array<InvoiceWhereInput>>;
  amount?: InputMaybe<FloatFilter>;
  code?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  customer?: InputMaybe<CustomerNullableScalarRelationFilter>;
  customerId?: InputMaybe<StringNullableFilter>;
  dueDate?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  issuedAt?: InputMaybe<DateTimeNullableFilter>;
  status?: InputMaybe<EnumInvoiceStatusFilter>;
  tax?: InputMaybe<FloatFilter>;
  total?: InputMaybe<FloatFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type InvoiceWhereUniqueInput = {
  AND?: InputMaybe<Array<InvoiceWhereInput>>;
  NOT?: InputMaybe<Array<InvoiceWhereInput>>;
  OR?: InputMaybe<Array<InvoiceWhereInput>>;
  amount?: InputMaybe<FloatFilter>;
  code?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimeFilter>;
  customer?: InputMaybe<CustomerNullableScalarRelationFilter>;
  customerId?: InputMaybe<StringNullableFilter>;
  dueDate?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  issuedAt?: InputMaybe<DateTimeNullableFilter>;
  status?: InputMaybe<EnumInvoiceStatusFilter>;
  tax?: InputMaybe<FloatFilter>;
  total?: InputMaybe<FloatFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addClubMember: ClubMember;
  createClub: Club;
  createCustomer: Customer;
  createDepartment: Department;
  createEmployee: Employee;
  createExpense: Expense;
  createExpenseCategory: ExpenseCategory;
  createInventoryItem: InventoryItem;
  createInvoice: Invoice;
  deleteClub: Scalars['Boolean']['output'];
  deleteCustomer: Scalars['Boolean']['output'];
  deleteDepartment: Scalars['Boolean']['output'];
  deleteEmployee: Scalars['Boolean']['output'];
  deleteExpense: Scalars['Boolean']['output'];
  deleteExpenseCategory: Scalars['Boolean']['output'];
  deleteInventoryItem: Scalars['Boolean']['output'];
  deleteInvoice: Scalars['Boolean']['output'];
  login: AuthPayload;
  loginWithOAuth: AuthPayload;
  register: AuthPayload;
  removeClubMember: Scalars['Boolean']['output'];
  updateClub: Club;
  updateCustomer: Customer;
  updateDepartment: Department;
  updateEmployee: Employee;
  updateExpense: Expense;
  updateExpenseCategory: ExpenseCategory;
  updateInventoryItem: InventoryItem;
  updateInvoice: Invoice;
};


export type MutationAddClubMemberArgs = {
  input: AddClubMemberInput;
};


export type MutationCreateClubArgs = {
  input: ClubUncheckedCreateInput;
};


export type MutationCreateCustomerArgs = {
  input: CustomerUncheckedCreateInput;
};


export type MutationCreateDepartmentArgs = {
  input: DepartmentUncheckedCreateInput;
};


export type MutationCreateEmployeeArgs = {
  input: EmployeeUncheckedCreateInput;
};


export type MutationCreateExpenseArgs = {
  input: ExpenseUncheckedCreateInput;
};


export type MutationCreateExpenseCategoryArgs = {
  input: ExpenseCategoryUncheckedCreateInput;
};


export type MutationCreateInventoryItemArgs = {
  input: InventoryItemUncheckedCreateInput;
};


export type MutationCreateInvoiceArgs = {
  input: InvoiceUncheckedCreateInput;
};


export type MutationDeleteClubArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteCustomerArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteDepartmentArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteEmployeeArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteExpenseArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteExpenseCategoryArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteInventoryItemArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteInvoiceArgs = {
  id: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationLoginWithOAuthArgs = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type MutationRegisterArgs = {
  input: RegisterInput;
};


export type MutationRemoveClubMemberArgs = {
  memberId: Scalars['String']['input'];
};


export type MutationUpdateClubArgs = {
  id: Scalars['String']['input'];
  input: ClubUncheckedUpdateInput;
};


export type MutationUpdateCustomerArgs = {
  id: Scalars['String']['input'];
  input: CustomerUncheckedUpdateInput;
};


export type MutationUpdateDepartmentArgs = {
  id: Scalars['String']['input'];
  input: DepartmentUncheckedUpdateInput;
};


export type MutationUpdateEmployeeArgs = {
  id: Scalars['String']['input'];
  input: EmployeeUncheckedUpdateInput;
};


export type MutationUpdateExpenseArgs = {
  id: Scalars['String']['input'];
  input: ExpenseUncheckedUpdateInput;
};


export type MutationUpdateExpenseCategoryArgs = {
  id: Scalars['String']['input'];
  input: ExpenseCategoryUncheckedUpdateInput;
};


export type MutationUpdateInventoryItemArgs = {
  id: Scalars['String']['input'];
  input: InventoryItemUncheckedUpdateInput;
};


export type MutationUpdateInvoiceArgs = {
  id: Scalars['String']['input'];
  input: InvoiceUncheckedUpdateInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedEnumClubMemberStatusFilter = {
  equals?: InputMaybe<ClubMemberStatus>;
  in?: InputMaybe<Array<ClubMemberStatus>>;
  not?: InputMaybe<NestedEnumClubMemberStatusFilter>;
  notIn?: InputMaybe<Array<ClubMemberStatus>>;
};

export type NestedEnumClubStatusFilter = {
  equals?: InputMaybe<ClubStatus>;
  in?: InputMaybe<Array<ClubStatus>>;
  not?: InputMaybe<NestedEnumClubStatusFilter>;
  notIn?: InputMaybe<Array<ClubStatus>>;
};

export type NestedEnumCustomerStatusFilter = {
  equals?: InputMaybe<CustomerStatus>;
  in?: InputMaybe<Array<CustomerStatus>>;
  not?: InputMaybe<NestedEnumCustomerStatusFilter>;
  notIn?: InputMaybe<Array<CustomerStatus>>;
};

export type NestedEnumEmployeeStatusFilter = {
  equals?: InputMaybe<EmployeeStatus>;
  in?: InputMaybe<Array<EmployeeStatus>>;
  not?: InputMaybe<NestedEnumEmployeeStatusFilter>;
  notIn?: InputMaybe<Array<EmployeeStatus>>;
};

export type NestedEnumExpenseStatusFilter = {
  equals?: InputMaybe<ExpenseStatus>;
  in?: InputMaybe<Array<ExpenseStatus>>;
  not?: InputMaybe<NestedEnumExpenseStatusFilter>;
  notIn?: InputMaybe<Array<ExpenseStatus>>;
};

export type NestedEnumFundContributionStatusFilter = {
  equals?: InputMaybe<FundContributionStatus>;
  in?: InputMaybe<Array<FundContributionStatus>>;
  not?: InputMaybe<NestedEnumFundContributionStatusFilter>;
  notIn?: InputMaybe<Array<FundContributionStatus>>;
};

export type NestedEnumFundFlowFilter = {
  equals?: InputMaybe<FundFlow>;
  in?: InputMaybe<Array<FundFlow>>;
  not?: InputMaybe<NestedEnumFundFlowFilter>;
  notIn?: InputMaybe<Array<FundFlow>>;
};

export type NestedEnumFundTransactionTypeFilter = {
  equals?: InputMaybe<FundTransactionType>;
  in?: InputMaybe<Array<FundTransactionType>>;
  not?: InputMaybe<NestedEnumFundTransactionTypeFilter>;
  notIn?: InputMaybe<Array<FundTransactionType>>;
};

export type NestedEnumInvoiceStatusFilter = {
  equals?: InputMaybe<InvoiceStatus>;
  in?: InputMaybe<Array<InvoiceStatus>>;
  not?: InputMaybe<NestedEnumInvoiceStatusFilter>;
  notIn?: InputMaybe<Array<InvoiceStatus>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type PaginatedClub = {
  __typename?: 'PaginatedClub';
  items: Array<Club>;
  limit: Scalars['Int']['output'];
  page: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PaginatedCustomer = {
  __typename?: 'PaginatedCustomer';
  items: Array<Customer>;
  limit: Scalars['Int']['output'];
  page: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PaginatedDepartment = {
  __typename?: 'PaginatedDepartment';
  items: Array<Department>;
  limit: Scalars['Int']['output'];
  page: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PaginatedEmployee = {
  __typename?: 'PaginatedEmployee';
  items: Array<Employee>;
  limit: Scalars['Int']['output'];
  page: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PaginatedExpense = {
  __typename?: 'PaginatedExpense';
  items: Array<Expense>;
  limit: Scalars['Int']['output'];
  page: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PaginatedInventoryItem = {
  __typename?: 'PaginatedInventoryItem';
  items: Array<InventoryItem>;
  limit: Scalars['Int']['output'];
  page: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PaginatedInvoice = {
  __typename?: 'PaginatedInvoice';
  items: Array<Invoice>;
  limit: Scalars['Int']['output'];
  page: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PaginationInput = {
  limit?: Scalars['Int']['input'];
  page?: Scalars['Int']['input'];
};

export type Query = {
  __typename?: 'Query';
  candidateUsers: Array<User>;
  club: Club;
  clubs: PaginatedClub;
  customer: Customer;
  customers: PaginatedCustomer;
  department: Department;
  departments: PaginatedDepartment;
  employee: Employee;
  employees: PaginatedEmployee;
  expense: Expense;
  expenseCategories: Array<ExpenseCategory>;
  expenses: PaginatedExpense;
  inventoryItem: InventoryItem;
  inventoryItems: PaginatedInventoryItem;
  invoice: Invoice;
  invoices: PaginatedInvoice;
  myAbilities: Scalars['JSON']['output'];
};


export type QueryClubArgs = {
  id: Scalars['String']['input'];
};


export type QueryClubsArgs = {
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryCustomerArgs = {
  id: Scalars['String']['input'];
};


export type QueryCustomersArgs = {
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryDepartmentArgs = {
  id: Scalars['String']['input'];
};


export type QueryDepartmentsArgs = {
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryEmployeeArgs = {
  id: Scalars['String']['input'];
};


export type QueryEmployeesArgs = {
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryExpenseArgs = {
  id: Scalars['String']['input'];
};


export type QueryExpensesArgs = {
  filter?: InputMaybe<ExpenseFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryInventoryItemArgs = {
  id: Scalars['String']['input'];
};


export type QueryInventoryItemsArgs = {
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryInvoiceArgs = {
  id: Scalars['String']['input'];
};


export type QueryInvoicesArgs = {
  pagination?: InputMaybe<PaginationInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type RegisterInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Role = {
  __typename?: 'Role';
  _count: RoleCount;
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  name: Scalars['String']['output'];
  permissions?: Maybe<Array<RolePermission>>;
  users?: Maybe<Array<UserRole>>;
};

export type RoleCount = {
  __typename?: 'RoleCount';
  permissions: Scalars['Int']['output'];
  users: Scalars['Int']['output'];
};

export type RoleCountAggregate = {
  __typename?: 'RoleCountAggregate';
  _all: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  label: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
};

export type RoleCreateNestedOneWithoutUsersInput = {
  connect?: InputMaybe<RoleWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RoleCreateOrConnectWithoutUsersInput>;
  create?: InputMaybe<RoleCreateWithoutUsersInput>;
};

export type RoleCreateOrConnectWithoutUsersInput = {
  create: RoleCreateWithoutUsersInput;
  where: RoleWhereUniqueInput;
};

export type RoleCreateWithoutUsersInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  label: Scalars['String']['input'];
  name: Scalars['String']['input'];
  permissions?: InputMaybe<RolePermissionCreateNestedManyWithoutRoleInput>;
};

export type RoleMaxAggregate = {
  __typename?: 'RoleMaxAggregate';
  id?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type RoleMinAggregate = {
  __typename?: 'RoleMinAggregate';
  id?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type RolePermission = {
  __typename?: 'RolePermission';
  permission: Scalars['String']['output'];
  role: Role;
  roleId: Scalars['String']['output'];
};

export type RolePermissionCountAggregate = {
  __typename?: 'RolePermissionCountAggregate';
  _all: Scalars['Int']['output'];
  permission: Scalars['Int']['output'];
  roleId: Scalars['Int']['output'];
};

export type RolePermissionCreateManyRoleInput = {
  permission: Scalars['String']['input'];
};

export type RolePermissionCreateManyRoleInputEnvelope = {
  data: Array<RolePermissionCreateManyRoleInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RolePermissionCreateNestedManyWithoutRoleInput = {
  connect?: InputMaybe<Array<RolePermissionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RolePermissionCreateOrConnectWithoutRoleInput>>;
  create?: InputMaybe<Array<RolePermissionCreateWithoutRoleInput>>;
  createMany?: InputMaybe<RolePermissionCreateManyRoleInputEnvelope>;
};

export type RolePermissionCreateOrConnectWithoutRoleInput = {
  create: RolePermissionCreateWithoutRoleInput;
  where: RolePermissionWhereUniqueInput;
};

export type RolePermissionCreateWithoutRoleInput = {
  permission: Scalars['String']['input'];
};

export type RolePermissionListRelationFilter = {
  every?: InputMaybe<RolePermissionWhereInput>;
  none?: InputMaybe<RolePermissionWhereInput>;
  some?: InputMaybe<RolePermissionWhereInput>;
};

export type RolePermissionMaxAggregate = {
  __typename?: 'RolePermissionMaxAggregate';
  permission?: Maybe<Scalars['String']['output']>;
  roleId?: Maybe<Scalars['String']['output']>;
};

export type RolePermissionMinAggregate = {
  __typename?: 'RolePermissionMinAggregate';
  permission?: Maybe<Scalars['String']['output']>;
  roleId?: Maybe<Scalars['String']['output']>;
};

export type RolePermissionRoleIdPermissionCompoundUniqueInput = {
  permission: Scalars['String']['input'];
  roleId: Scalars['String']['input'];
};

export type RolePermissionScalarWhereInput = {
  AND?: InputMaybe<Array<RolePermissionScalarWhereInput>>;
  NOT?: InputMaybe<Array<RolePermissionScalarWhereInput>>;
  OR?: InputMaybe<Array<RolePermissionScalarWhereInput>>;
  permission?: InputMaybe<StringFilter>;
  roleId?: InputMaybe<StringFilter>;
};

export type RolePermissionUpdateManyMutationInput = {
  permission?: InputMaybe<Scalars['String']['input']>;
};

export type RolePermissionUpdateManyWithWhereWithoutRoleInput = {
  data: RolePermissionUpdateManyMutationInput;
  where: RolePermissionScalarWhereInput;
};

export type RolePermissionUpdateManyWithoutRoleNestedInput = {
  connect?: InputMaybe<Array<RolePermissionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RolePermissionCreateOrConnectWithoutRoleInput>>;
  create?: InputMaybe<Array<RolePermissionCreateWithoutRoleInput>>;
  createMany?: InputMaybe<RolePermissionCreateManyRoleInputEnvelope>;
  delete?: InputMaybe<Array<RolePermissionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RolePermissionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RolePermissionWhereUniqueInput>>;
  set?: InputMaybe<Array<RolePermissionWhereUniqueInput>>;
  update?: InputMaybe<Array<RolePermissionUpdateWithWhereUniqueWithoutRoleInput>>;
  updateMany?: InputMaybe<Array<RolePermissionUpdateManyWithWhereWithoutRoleInput>>;
  upsert?: InputMaybe<Array<RolePermissionUpsertWithWhereUniqueWithoutRoleInput>>;
};

export type RolePermissionUpdateWithWhereUniqueWithoutRoleInput = {
  data: RolePermissionUpdateWithoutRoleInput;
  where: RolePermissionWhereUniqueInput;
};

export type RolePermissionUpdateWithoutRoleInput = {
  permission?: InputMaybe<Scalars['String']['input']>;
};

export type RolePermissionUpsertWithWhereUniqueWithoutRoleInput = {
  create: RolePermissionCreateWithoutRoleInput;
  update: RolePermissionUpdateWithoutRoleInput;
  where: RolePermissionWhereUniqueInput;
};

export type RolePermissionWhereInput = {
  AND?: InputMaybe<Array<RolePermissionWhereInput>>;
  NOT?: InputMaybe<Array<RolePermissionWhereInput>>;
  OR?: InputMaybe<Array<RolePermissionWhereInput>>;
  permission?: InputMaybe<StringFilter>;
  role?: InputMaybe<RoleScalarRelationFilter>;
  roleId?: InputMaybe<StringFilter>;
};

export type RolePermissionWhereUniqueInput = {
  AND?: InputMaybe<Array<RolePermissionWhereInput>>;
  NOT?: InputMaybe<Array<RolePermissionWhereInput>>;
  OR?: InputMaybe<Array<RolePermissionWhereInput>>;
  permission?: InputMaybe<StringFilter>;
  role?: InputMaybe<RoleScalarRelationFilter>;
  roleId?: InputMaybe<StringFilter>;
  roleId_permission?: InputMaybe<RolePermissionRoleIdPermissionCompoundUniqueInput>;
};

export type RoleScalarRelationFilter = {
  is?: InputMaybe<RoleWhereInput>;
  isNot?: InputMaybe<RoleWhereInput>;
};

export type RoleUpdateOneRequiredWithoutUsersNestedInput = {
  connect?: InputMaybe<RoleWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RoleCreateOrConnectWithoutUsersInput>;
  create?: InputMaybe<RoleCreateWithoutUsersInput>;
  update?: InputMaybe<RoleUpdateToOneWithWhereWithoutUsersInput>;
  upsert?: InputMaybe<RoleUpsertWithoutUsersInput>;
};

export type RoleUpdateToOneWithWhereWithoutUsersInput = {
  data: RoleUpdateWithoutUsersInput;
  where?: InputMaybe<RoleWhereInput>;
};

export type RoleUpdateWithoutUsersInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<RolePermissionUpdateManyWithoutRoleNestedInput>;
};

export type RoleUpsertWithoutUsersInput = {
  create: RoleCreateWithoutUsersInput;
  update: RoleUpdateWithoutUsersInput;
  where?: InputMaybe<RoleWhereInput>;
};

export type RoleWhereInput = {
  AND?: InputMaybe<Array<RoleWhereInput>>;
  NOT?: InputMaybe<Array<RoleWhereInput>>;
  OR?: InputMaybe<Array<RoleWhereInput>>;
  id?: InputMaybe<StringFilter>;
  label?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  permissions?: InputMaybe<RolePermissionListRelationFilter>;
  users?: InputMaybe<UserRoleListRelationFilter>;
};

export type RoleWhereUniqueInput = {
  AND?: InputMaybe<Array<RoleWhereInput>>;
  NOT?: InputMaybe<Array<RoleWhereInput>>;
  OR?: InputMaybe<Array<RoleWhereInput>>;
  id?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<StringFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<RolePermissionListRelationFilter>;
  users?: InputMaybe<UserRoleListRelationFilter>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  _count: UserCount;
  avatar?: Maybe<Scalars['String']['output']>;
  clubMemberships?: Maybe<Array<ClubMember>>;
  confirmedContributions?: Maybe<Array<FundContribution>>;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  employees?: Maybe<Array<Employee>>;
  expenses?: Maybe<Array<Expense>>;
  fundTransactions?: Maybe<Array<FundTransaction>>;
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  ownedClubs?: Maybe<Array<Club>>;
  ownedCustomers?: Maybe<Array<Customer>>;
  roles?: Maybe<Array<UserRole>>;
  updatedAt: Scalars['DateTime']['output'];
};

export type UserCount = {
  __typename?: 'UserCount';
  clubMemberships: Scalars['Int']['output'];
  confirmedContributions: Scalars['Int']['output'];
  employees: Scalars['Int']['output'];
  expenses: Scalars['Int']['output'];
  fundTransactions: Scalars['Int']['output'];
  ownedClubs: Scalars['Int']['output'];
  ownedCustomers: Scalars['Int']['output'];
  roles: Scalars['Int']['output'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int']['output'];
  avatar: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  deletedAt: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  isActive: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type UserCreateNestedOneWithoutClubMembershipsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutClubMembershipsInput>;
  create?: InputMaybe<UserCreateWithoutClubMembershipsInput>;
};

export type UserCreateNestedOneWithoutConfirmedContributionsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutConfirmedContributionsInput>;
  create?: InputMaybe<UserCreateWithoutConfirmedContributionsInput>;
};

export type UserCreateNestedOneWithoutEmployeesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutEmployeesInput>;
  create?: InputMaybe<UserCreateWithoutEmployeesInput>;
};

export type UserCreateNestedOneWithoutExpensesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutExpensesInput>;
  create?: InputMaybe<UserCreateWithoutExpensesInput>;
};

export type UserCreateNestedOneWithoutFundTransactionsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutFundTransactionsInput>;
  create?: InputMaybe<UserCreateWithoutFundTransactionsInput>;
};

export type UserCreateNestedOneWithoutOwnedClubsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutOwnedClubsInput>;
  create?: InputMaybe<UserCreateWithoutOwnedClubsInput>;
};

export type UserCreateOrConnectWithoutClubMembershipsInput = {
  create: UserCreateWithoutClubMembershipsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutConfirmedContributionsInput = {
  create: UserCreateWithoutConfirmedContributionsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutEmployeesInput = {
  create: UserCreateWithoutEmployeesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutExpensesInput = {
  create: UserCreateWithoutExpensesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutFundTransactionsInput = {
  create: UserCreateWithoutFundTransactionsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutOwnedClubsInput = {
  create: UserCreateWithoutOwnedClubsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutClubMembershipsInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  confirmedContributions?: InputMaybe<FundContributionCreateNestedManyWithoutConfirmedByUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  employees?: InputMaybe<EmployeeCreateNestedManyWithoutUserInput>;
  expenses?: InputMaybe<ExpenseCreateNestedManyWithoutCreatedByInput>;
  fundTransactions?: InputMaybe<FundTransactionCreateNestedManyWithoutCreatedByInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  ownedClubs?: InputMaybe<ClubCreateNestedManyWithoutCreatedByInput>;
  ownedCustomers?: InputMaybe<CustomerCreateNestedManyWithoutOwnerInput>;
  roles?: InputMaybe<UserRoleCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserCreateWithoutConfirmedContributionsInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  clubMemberships?: InputMaybe<ClubMemberCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  employees?: InputMaybe<EmployeeCreateNestedManyWithoutUserInput>;
  expenses?: InputMaybe<ExpenseCreateNestedManyWithoutCreatedByInput>;
  fundTransactions?: InputMaybe<FundTransactionCreateNestedManyWithoutCreatedByInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  ownedClubs?: InputMaybe<ClubCreateNestedManyWithoutCreatedByInput>;
  ownedCustomers?: InputMaybe<CustomerCreateNestedManyWithoutOwnerInput>;
  roles?: InputMaybe<UserRoleCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserCreateWithoutEmployeesInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  clubMemberships?: InputMaybe<ClubMemberCreateNestedManyWithoutUserInput>;
  confirmedContributions?: InputMaybe<FundContributionCreateNestedManyWithoutConfirmedByUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  expenses?: InputMaybe<ExpenseCreateNestedManyWithoutCreatedByInput>;
  fundTransactions?: InputMaybe<FundTransactionCreateNestedManyWithoutCreatedByInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  ownedClubs?: InputMaybe<ClubCreateNestedManyWithoutCreatedByInput>;
  ownedCustomers?: InputMaybe<CustomerCreateNestedManyWithoutOwnerInput>;
  roles?: InputMaybe<UserRoleCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserCreateWithoutExpensesInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  clubMemberships?: InputMaybe<ClubMemberCreateNestedManyWithoutUserInput>;
  confirmedContributions?: InputMaybe<FundContributionCreateNestedManyWithoutConfirmedByUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  employees?: InputMaybe<EmployeeCreateNestedManyWithoutUserInput>;
  fundTransactions?: InputMaybe<FundTransactionCreateNestedManyWithoutCreatedByInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  ownedClubs?: InputMaybe<ClubCreateNestedManyWithoutCreatedByInput>;
  ownedCustomers?: InputMaybe<CustomerCreateNestedManyWithoutOwnerInput>;
  roles?: InputMaybe<UserRoleCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserCreateWithoutFundTransactionsInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  clubMemberships?: InputMaybe<ClubMemberCreateNestedManyWithoutUserInput>;
  confirmedContributions?: InputMaybe<FundContributionCreateNestedManyWithoutConfirmedByUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  employees?: InputMaybe<EmployeeCreateNestedManyWithoutUserInput>;
  expenses?: InputMaybe<ExpenseCreateNestedManyWithoutCreatedByInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  ownedClubs?: InputMaybe<ClubCreateNestedManyWithoutCreatedByInput>;
  ownedCustomers?: InputMaybe<CustomerCreateNestedManyWithoutOwnerInput>;
  roles?: InputMaybe<UserRoleCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserCreateWithoutOwnedClubsInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  clubMemberships?: InputMaybe<ClubMemberCreateNestedManyWithoutUserInput>;
  confirmedContributions?: InputMaybe<FundContributionCreateNestedManyWithoutConfirmedByUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  employees?: InputMaybe<EmployeeCreateNestedManyWithoutUserInput>;
  expenses?: InputMaybe<ExpenseCreateNestedManyWithoutCreatedByInput>;
  fundTransactions?: InputMaybe<FundTransactionCreateNestedManyWithoutCreatedByInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  ownedCustomers?: InputMaybe<CustomerCreateNestedManyWithoutOwnerInput>;
  roles?: InputMaybe<UserRoleCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  avatar?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  avatar?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UserNullableScalarRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserRole = {
  __typename?: 'UserRole';
  role: Role;
  roleId: Scalars['String']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type UserRoleCountAggregate = {
  __typename?: 'UserRoleCountAggregate';
  _all: Scalars['Int']['output'];
  roleId: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type UserRoleCreateManyUserInput = {
  roleId: Scalars['String']['input'];
};

export type UserRoleCreateManyUserInputEnvelope = {
  data: Array<UserRoleCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserRoleCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<UserRoleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserRoleCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserRoleCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserRoleCreateManyUserInputEnvelope>;
};

export type UserRoleCreateOrConnectWithoutUserInput = {
  create: UserRoleCreateWithoutUserInput;
  where: UserRoleWhereUniqueInput;
};

export type UserRoleCreateWithoutUserInput = {
  role: RoleCreateNestedOneWithoutUsersInput;
};

export type UserRoleListRelationFilter = {
  every?: InputMaybe<UserRoleWhereInput>;
  none?: InputMaybe<UserRoleWhereInput>;
  some?: InputMaybe<UserRoleWhereInput>;
};

export type UserRoleMaxAggregate = {
  __typename?: 'UserRoleMaxAggregate';
  roleId?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type UserRoleMinAggregate = {
  __typename?: 'UserRoleMinAggregate';
  roleId?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type UserRoleScalarWhereInput = {
  AND?: InputMaybe<Array<UserRoleScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserRoleScalarWhereInput>>;
  OR?: InputMaybe<Array<UserRoleScalarWhereInput>>;
  roleId?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type UserRoleUncheckedUpdateManyWithoutUserInput = {
  roleId?: InputMaybe<Scalars['String']['input']>;
};

export type UserRoleUpdateManyWithWhereWithoutUserInput = {
  data: UserRoleUncheckedUpdateManyWithoutUserInput;
  where: UserRoleScalarWhereInput;
};

export type UserRoleUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<UserRoleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserRoleCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserRoleCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserRoleCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<UserRoleWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserRoleScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserRoleWhereUniqueInput>>;
  set?: InputMaybe<Array<UserRoleWhereUniqueInput>>;
  update?: InputMaybe<Array<UserRoleUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<UserRoleUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<UserRoleUpsertWithWhereUniqueWithoutUserInput>>;
};

export type UserRoleUpdateWithWhereUniqueWithoutUserInput = {
  data: UserRoleUpdateWithoutUserInput;
  where: UserRoleWhereUniqueInput;
};

export type UserRoleUpdateWithoutUserInput = {
  role?: InputMaybe<RoleUpdateOneRequiredWithoutUsersNestedInput>;
};

export type UserRoleUpsertWithWhereUniqueWithoutUserInput = {
  create: UserRoleCreateWithoutUserInput;
  update: UserRoleUpdateWithoutUserInput;
  where: UserRoleWhereUniqueInput;
};

export type UserRoleUserIdRoleIdCompoundUniqueInput = {
  roleId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type UserRoleWhereInput = {
  AND?: InputMaybe<Array<UserRoleWhereInput>>;
  NOT?: InputMaybe<Array<UserRoleWhereInput>>;
  OR?: InputMaybe<Array<UserRoleWhereInput>>;
  role?: InputMaybe<RoleScalarRelationFilter>;
  roleId?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserScalarRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type UserRoleWhereUniqueInput = {
  AND?: InputMaybe<Array<UserRoleWhereInput>>;
  NOT?: InputMaybe<Array<UserRoleWhereInput>>;
  OR?: InputMaybe<Array<UserRoleWhereInput>>;
  role?: InputMaybe<RoleScalarRelationFilter>;
  roleId?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserScalarRelationFilter>;
  userId?: InputMaybe<StringFilter>;
  userId_roleId?: InputMaybe<UserRoleUserIdRoleIdCompoundUniqueInput>;
};

export type UserScalarRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserUpdateOneRequiredWithoutExpensesNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutExpensesInput>;
  create?: InputMaybe<UserCreateWithoutExpensesInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutExpensesInput>;
  upsert?: InputMaybe<UserUpsertWithoutExpensesInput>;
};

export type UserUpdateOneRequiredWithoutFundTransactionsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutFundTransactionsInput>;
  create?: InputMaybe<UserCreateWithoutFundTransactionsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutFundTransactionsInput>;
  upsert?: InputMaybe<UserUpsertWithoutFundTransactionsInput>;
};

export type UserUpdateOneRequiredWithoutOwnedClubsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutOwnedClubsInput>;
  create?: InputMaybe<UserCreateWithoutOwnedClubsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutOwnedClubsInput>;
  upsert?: InputMaybe<UserUpsertWithoutOwnedClubsInput>;
};

export type UserUpdateOneWithoutClubMembershipsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutClubMembershipsInput>;
  create?: InputMaybe<UserCreateWithoutClubMembershipsInput>;
  delete?: InputMaybe<UserWhereInput>;
  disconnect?: InputMaybe<UserWhereInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutClubMembershipsInput>;
  upsert?: InputMaybe<UserUpsertWithoutClubMembershipsInput>;
};

export type UserUpdateOneWithoutConfirmedContributionsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutConfirmedContributionsInput>;
  create?: InputMaybe<UserCreateWithoutConfirmedContributionsInput>;
  delete?: InputMaybe<UserWhereInput>;
  disconnect?: InputMaybe<UserWhereInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutConfirmedContributionsInput>;
  upsert?: InputMaybe<UserUpsertWithoutConfirmedContributionsInput>;
};

export type UserUpdateOneWithoutEmployeesNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutEmployeesInput>;
  create?: InputMaybe<UserCreateWithoutEmployeesInput>;
  delete?: InputMaybe<UserWhereInput>;
  disconnect?: InputMaybe<UserWhereInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutEmployeesInput>;
  upsert?: InputMaybe<UserUpsertWithoutEmployeesInput>;
};

export type UserUpdateToOneWithWhereWithoutClubMembershipsInput = {
  data: UserUpdateWithoutClubMembershipsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutConfirmedContributionsInput = {
  data: UserUpdateWithoutConfirmedContributionsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutEmployeesInput = {
  data: UserUpdateWithoutEmployeesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutExpensesInput = {
  data: UserUpdateWithoutExpensesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutFundTransactionsInput = {
  data: UserUpdateWithoutFundTransactionsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutOwnedClubsInput = {
  data: UserUpdateWithoutOwnedClubsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateWithoutClubMembershipsInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  confirmedContributions?: InputMaybe<FundContributionUpdateManyWithoutConfirmedByUserNestedInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  employees?: InputMaybe<EmployeeUpdateManyWithoutUserNestedInput>;
  expenses?: InputMaybe<ExpenseUpdateManyWithoutCreatedByNestedInput>;
  fundTransactions?: InputMaybe<FundTransactionUpdateManyWithoutCreatedByNestedInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ownedClubs?: InputMaybe<ClubUpdateManyWithoutCreatedByNestedInput>;
  ownedCustomers?: InputMaybe<CustomerUpdateManyWithoutOwnerNestedInput>;
  roles?: InputMaybe<UserRoleUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserUpdateWithoutConfirmedContributionsInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  clubMemberships?: InputMaybe<ClubMemberUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  employees?: InputMaybe<EmployeeUpdateManyWithoutUserNestedInput>;
  expenses?: InputMaybe<ExpenseUpdateManyWithoutCreatedByNestedInput>;
  fundTransactions?: InputMaybe<FundTransactionUpdateManyWithoutCreatedByNestedInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ownedClubs?: InputMaybe<ClubUpdateManyWithoutCreatedByNestedInput>;
  ownedCustomers?: InputMaybe<CustomerUpdateManyWithoutOwnerNestedInput>;
  roles?: InputMaybe<UserRoleUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserUpdateWithoutEmployeesInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  clubMemberships?: InputMaybe<ClubMemberUpdateManyWithoutUserNestedInput>;
  confirmedContributions?: InputMaybe<FundContributionUpdateManyWithoutConfirmedByUserNestedInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  expenses?: InputMaybe<ExpenseUpdateManyWithoutCreatedByNestedInput>;
  fundTransactions?: InputMaybe<FundTransactionUpdateManyWithoutCreatedByNestedInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ownedClubs?: InputMaybe<ClubUpdateManyWithoutCreatedByNestedInput>;
  ownedCustomers?: InputMaybe<CustomerUpdateManyWithoutOwnerNestedInput>;
  roles?: InputMaybe<UserRoleUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserUpdateWithoutExpensesInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  clubMemberships?: InputMaybe<ClubMemberUpdateManyWithoutUserNestedInput>;
  confirmedContributions?: InputMaybe<FundContributionUpdateManyWithoutConfirmedByUserNestedInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  employees?: InputMaybe<EmployeeUpdateManyWithoutUserNestedInput>;
  fundTransactions?: InputMaybe<FundTransactionUpdateManyWithoutCreatedByNestedInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ownedClubs?: InputMaybe<ClubUpdateManyWithoutCreatedByNestedInput>;
  ownedCustomers?: InputMaybe<CustomerUpdateManyWithoutOwnerNestedInput>;
  roles?: InputMaybe<UserRoleUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserUpdateWithoutFundTransactionsInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  clubMemberships?: InputMaybe<ClubMemberUpdateManyWithoutUserNestedInput>;
  confirmedContributions?: InputMaybe<FundContributionUpdateManyWithoutConfirmedByUserNestedInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  employees?: InputMaybe<EmployeeUpdateManyWithoutUserNestedInput>;
  expenses?: InputMaybe<ExpenseUpdateManyWithoutCreatedByNestedInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ownedClubs?: InputMaybe<ClubUpdateManyWithoutCreatedByNestedInput>;
  ownedCustomers?: InputMaybe<CustomerUpdateManyWithoutOwnerNestedInput>;
  roles?: InputMaybe<UserRoleUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserUpdateWithoutOwnedClubsInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  clubMemberships?: InputMaybe<ClubMemberUpdateManyWithoutUserNestedInput>;
  confirmedContributions?: InputMaybe<FundContributionUpdateManyWithoutConfirmedByUserNestedInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  employees?: InputMaybe<EmployeeUpdateManyWithoutUserNestedInput>;
  expenses?: InputMaybe<ExpenseUpdateManyWithoutCreatedByNestedInput>;
  fundTransactions?: InputMaybe<FundTransactionUpdateManyWithoutCreatedByNestedInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ownedCustomers?: InputMaybe<CustomerUpdateManyWithoutOwnerNestedInput>;
  roles?: InputMaybe<UserRoleUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserUpsertWithoutClubMembershipsInput = {
  create: UserCreateWithoutClubMembershipsInput;
  update: UserUpdateWithoutClubMembershipsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutConfirmedContributionsInput = {
  create: UserCreateWithoutConfirmedContributionsInput;
  update: UserUpdateWithoutConfirmedContributionsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutEmployeesInput = {
  create: UserCreateWithoutEmployeesInput;
  update: UserUpdateWithoutEmployeesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutExpensesInput = {
  create: UserCreateWithoutExpensesInput;
  update: UserUpdateWithoutExpensesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutFundTransactionsInput = {
  create: UserCreateWithoutFundTransactionsInput;
  update: UserUpdateWithoutFundTransactionsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutOwnedClubsInput = {
  create: UserCreateWithoutOwnedClubsInput;
  update: UserUpdateWithoutOwnedClubsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  avatar?: InputMaybe<StringNullableFilter>;
  clubMemberships?: InputMaybe<ClubMemberListRelationFilter>;
  confirmedContributions?: InputMaybe<FundContributionListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringFilter>;
  employees?: InputMaybe<EmployeeListRelationFilter>;
  expenses?: InputMaybe<ExpenseListRelationFilter>;
  fundTransactions?: InputMaybe<FundTransactionListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  isActive?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  ownedClubs?: InputMaybe<ClubListRelationFilter>;
  ownedCustomers?: InputMaybe<CustomerListRelationFilter>;
  roles?: InputMaybe<UserRoleListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  avatar?: InputMaybe<StringNullableFilter>;
  clubMemberships?: InputMaybe<ClubMemberListRelationFilter>;
  confirmedContributions?: InputMaybe<FundContributionListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<Scalars['String']['input']>;
  employees?: InputMaybe<EmployeeListRelationFilter>;
  expenses?: InputMaybe<ExpenseListRelationFilter>;
  fundTransactions?: InputMaybe<FundTransactionListRelationFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  ownedClubs?: InputMaybe<ClubListRelationFilter>;
  ownedCustomers?: InputMaybe<CustomerListRelationFilter>;
  roles?: InputMaybe<UserRoleListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type GetClubsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetClubsQuery = { __typename?: 'Query', clubs: { __typename?: 'PaginatedClub', items: Array<{ __typename?: 'Club', id: string, name: string, sport: string, description?: string | null, status: ClubStatus, createdAt: string, membersCount: number, captainName?: string | null, fundBalance: number }> } };

export type GetClubMembersQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetClubMembersQuery = { __typename?: 'Query', club: { __typename?: 'Club', id: string, name: string, members?: Array<{ __typename?: 'ClubMember', id: string, clubId: string, userId?: string | null, displayName: string, email?: string | null, phone?: string | null, status: ClubMemberStatus, createdAt: string, user?: { __typename?: 'User', id: string, name: string, email: string } | null }> | null } };

export type GetMemberCandidateUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMemberCandidateUsersQuery = { __typename?: 'Query', candidateUsers: Array<{ __typename?: 'User', id: string, name: string, email: string, isActive: boolean }> };

export type CreateClubMutationVariables = Exact<{
  input: ClubUncheckedCreateInput;
}>;


export type CreateClubMutation = { __typename?: 'Mutation', createClub: { __typename?: 'Club', id: string, name: string, sport: string, description?: string | null, status: ClubStatus, createdAt: string, membersCount: number, captainName?: string | null, fundBalance: number } };

export type UpdateClubMutationVariables = Exact<{
  id: Scalars['String']['input'];
  input: ClubUncheckedUpdateInput;
}>;


export type UpdateClubMutation = { __typename?: 'Mutation', updateClub: { __typename?: 'Club', id: string, name: string, sport: string, description?: string | null, status: ClubStatus, createdAt: string, membersCount: number, captainName?: string | null, fundBalance: number } };

export type DeleteClubMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteClubMutation = { __typename?: 'Mutation', deleteClub: boolean };

export type AddClubMemberMutationVariables = Exact<{
  input: AddClubMemberInput;
}>;


export type AddClubMemberMutation = { __typename?: 'Mutation', addClubMember: { __typename?: 'ClubMember', id: string, clubId: string, userId?: string | null, displayName: string, email?: string | null, phone?: string | null, status: ClubMemberStatus, createdAt: string } };

export type RemoveClubMemberMutationVariables = Exact<{
  memberId: Scalars['String']['input'];
}>;


export type RemoveClubMemberMutation = { __typename?: 'Mutation', removeClubMember: boolean };


export const GetClubsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetClubs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clubs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"sport"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"membersCount"}},{"kind":"Field","name":{"kind":"Name","value":"captainName"}},{"kind":"Field","name":{"kind":"Name","value":"fundBalance"}}]}}]}}]}}]} as unknown as DocumentNode<GetClubsQuery, GetClubsQueryVariables>;
export const GetClubMembersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetClubMembers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"club"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"members"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clubId"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetClubMembersQuery, GetClubMembersQueryVariables>;
export const GetMemberCandidateUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMemberCandidateUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"candidateUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}}]} as unknown as DocumentNode<GetMemberCandidateUsersQuery, GetMemberCandidateUsersQueryVariables>;
export const CreateClubDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateClub"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ClubUncheckedCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createClub"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"sport"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"membersCount"}},{"kind":"Field","name":{"kind":"Name","value":"captainName"}},{"kind":"Field","name":{"kind":"Name","value":"fundBalance"}}]}}]}}]} as unknown as DocumentNode<CreateClubMutation, CreateClubMutationVariables>;
export const UpdateClubDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateClub"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ClubUncheckedUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateClub"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"sport"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"membersCount"}},{"kind":"Field","name":{"kind":"Name","value":"captainName"}},{"kind":"Field","name":{"kind":"Name","value":"fundBalance"}}]}}]}}]} as unknown as DocumentNode<UpdateClubMutation, UpdateClubMutationVariables>;
export const DeleteClubDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteClub"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteClub"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteClubMutation, DeleteClubMutationVariables>;
export const AddClubMemberDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddClubMember"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddClubMemberInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addClubMember"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clubId"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<AddClubMemberMutation, AddClubMemberMutationVariables>;
export const RemoveClubMemberDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveClubMember"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"memberId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeClubMember"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"memberId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"memberId"}}}]}]}}]} as unknown as DocumentNode<RemoveClubMemberMutation, RemoveClubMemberMutationVariables>;