'use client';

import type { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { useSession } from 'next-auth/react';
import { gqlFetch } from './gql';

/**
 * Returns a `gqlFetch` pre-bound with the current user's backend token.
 * Use this in client components instead of manually calling useSession() + passing token.
 *
 * @example
 * const gql = useGqlClient();
 * await gql(CreateClubDocument, { input });
 */
export function useGqlClient() {
  const { data: session } = useSession();
  const token = session?.backendToken;

  return function fetch<TResult, TVariables>(
    document: TypedDocumentNode<TResult, TVariables>,
    variables?: TVariables,
  ): Promise<TResult> {
    return gqlFetch(document, variables, token);
  };
}
