'use client';

import type { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { signOut, useSession } from 'next-auth/react';
import { getLoginPath } from './config';
import { AuthError, gqlFetch } from './gql';

export function useGqlClient() {
  const { data: session } = useSession();
  const token = session?.backendToken;

  return async function fetch<TResult, TVariables>(
    document: TypedDocumentNode<TResult, TVariables>,
    variables?: TVariables,
  ): Promise<TResult> {
    try {
      return await gqlFetch(document, variables, token);
    } catch (error) {
      if (error instanceof AuthError) {
        await signOut({ callbackUrl: getLoginPath() });
      }
      throw error;
    }
  };
}
