'use client';

import type { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { useSession } from 'next-auth/react';
import { gqlFetch } from './gql';

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
