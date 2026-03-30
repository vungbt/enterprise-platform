/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "query GetClubs {\n  clubs {\n    items {\n      id\n      name\n      sport\n      description\n      status\n      createdAt\n      membersCount\n      captainName\n      fundBalance\n    }\n  }\n}\n\nquery GetClubMembers($id: String!) {\n  club(id: $id) {\n    id\n    name\n    members {\n      userId\n      role\n      joinedAt\n      user {\n        id\n        name\n        email\n      }\n    }\n  }\n}\n\nquery GetMemberCandidateUsers {\n  candidateUsers {\n    id\n    name\n    email\n    isActive\n  }\n}\n\nmutation CreateClub($input: CreateClubInput!) {\n  createClub(input: $input) {\n    id\n    name\n    sport\n    description\n    status\n    createdAt\n    membersCount\n    captainName\n    fundBalance\n  }\n}\n\nmutation UpdateClub($id: String!, $input: UpdateClubInput!) {\n  updateClub(id: $id, input: $input) {\n    id\n    name\n    sport\n    description\n    status\n    createdAt\n    membersCount\n    captainName\n    fundBalance\n  }\n}\n\nmutation DeleteClub($id: String!) {\n  deleteClub(id: $id)\n}\n\nmutation AddClubMember($input: AddClubMemberInput!) {\n  addClubMember(input: $input) {\n    clubId\n    userId\n    role\n    joinedAt\n  }\n}\n\nmutation RemoveClubMember($clubId: String!, $userId: String!) {\n  removeClubMember(clubId: $clubId, userId: $userId)\n}\n\nmutation RegisterMemberUser($input: RegisterInput!) {\n  register(input: $input) {\n    user {\n      id\n      name\n      email\n    }\n  }\n}": typeof types.GetClubsDocument,
};
const documents: Documents = {
    "query GetClubs {\n  clubs {\n    items {\n      id\n      name\n      sport\n      description\n      status\n      createdAt\n      membersCount\n      captainName\n      fundBalance\n    }\n  }\n}\n\nquery GetClubMembers($id: String!) {\n  club(id: $id) {\n    id\n    name\n    members {\n      userId\n      role\n      joinedAt\n      user {\n        id\n        name\n        email\n      }\n    }\n  }\n}\n\nquery GetMemberCandidateUsers {\n  candidateUsers {\n    id\n    name\n    email\n    isActive\n  }\n}\n\nmutation CreateClub($input: CreateClubInput!) {\n  createClub(input: $input) {\n    id\n    name\n    sport\n    description\n    status\n    createdAt\n    membersCount\n    captainName\n    fundBalance\n  }\n}\n\nmutation UpdateClub($id: String!, $input: UpdateClubInput!) {\n  updateClub(id: $id, input: $input) {\n    id\n    name\n    sport\n    description\n    status\n    createdAt\n    membersCount\n    captainName\n    fundBalance\n  }\n}\n\nmutation DeleteClub($id: String!) {\n  deleteClub(id: $id)\n}\n\nmutation AddClubMember($input: AddClubMemberInput!) {\n  addClubMember(input: $input) {\n    clubId\n    userId\n    role\n    joinedAt\n  }\n}\n\nmutation RemoveClubMember($clubId: String!, $userId: String!) {\n  removeClubMember(clubId: $clubId, userId: $userId)\n}\n\nmutation RegisterMemberUser($input: RegisterInput!) {\n  register(input: $input) {\n    user {\n      id\n      name\n      email\n    }\n  }\n}": types.GetClubsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetClubs {\n  clubs {\n    items {\n      id\n      name\n      sport\n      description\n      status\n      createdAt\n      membersCount\n      captainName\n      fundBalance\n    }\n  }\n}\n\nquery GetClubMembers($id: String!) {\n  club(id: $id) {\n    id\n    name\n    members {\n      userId\n      role\n      joinedAt\n      user {\n        id\n        name\n        email\n      }\n    }\n  }\n}\n\nquery GetMemberCandidateUsers {\n  candidateUsers {\n    id\n    name\n    email\n    isActive\n  }\n}\n\nmutation CreateClub($input: CreateClubInput!) {\n  createClub(input: $input) {\n    id\n    name\n    sport\n    description\n    status\n    createdAt\n    membersCount\n    captainName\n    fundBalance\n  }\n}\n\nmutation UpdateClub($id: String!, $input: UpdateClubInput!) {\n  updateClub(id: $id, input: $input) {\n    id\n    name\n    sport\n    description\n    status\n    createdAt\n    membersCount\n    captainName\n    fundBalance\n  }\n}\n\nmutation DeleteClub($id: String!) {\n  deleteClub(id: $id)\n}\n\nmutation AddClubMember($input: AddClubMemberInput!) {\n  addClubMember(input: $input) {\n    clubId\n    userId\n    role\n    joinedAt\n  }\n}\n\nmutation RemoveClubMember($clubId: String!, $userId: String!) {\n  removeClubMember(clubId: $clubId, userId: $userId)\n}\n\nmutation RegisterMemberUser($input: RegisterInput!) {\n  register(input: $input) {\n    user {\n      id\n      name\n      email\n    }\n  }\n}"): (typeof documents)["query GetClubs {\n  clubs {\n    items {\n      id\n      name\n      sport\n      description\n      status\n      createdAt\n      membersCount\n      captainName\n      fundBalance\n    }\n  }\n}\n\nquery GetClubMembers($id: String!) {\n  club(id: $id) {\n    id\n    name\n    members {\n      userId\n      role\n      joinedAt\n      user {\n        id\n        name\n        email\n      }\n    }\n  }\n}\n\nquery GetMemberCandidateUsers {\n  candidateUsers {\n    id\n    name\n    email\n    isActive\n  }\n}\n\nmutation CreateClub($input: CreateClubInput!) {\n  createClub(input: $input) {\n    id\n    name\n    sport\n    description\n    status\n    createdAt\n    membersCount\n    captainName\n    fundBalance\n  }\n}\n\nmutation UpdateClub($id: String!, $input: UpdateClubInput!) {\n  updateClub(id: $id, input: $input) {\n    id\n    name\n    sport\n    description\n    status\n    createdAt\n    membersCount\n    captainName\n    fundBalance\n  }\n}\n\nmutation DeleteClub($id: String!) {\n  deleteClub(id: $id)\n}\n\nmutation AddClubMember($input: AddClubMemberInput!) {\n  addClubMember(input: $input) {\n    clubId\n    userId\n    role\n    joinedAt\n  }\n}\n\nmutation RemoveClubMember($clubId: String!, $userId: String!) {\n  removeClubMember(clubId: $clubId, userId: $userId)\n}\n\nmutation RegisterMemberUser($input: RegisterInput!) {\n  register(input: $input) {\n    user {\n      id\n      name\n      email\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;