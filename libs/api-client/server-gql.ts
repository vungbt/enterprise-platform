import type { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { redirect } from 'next/navigation';
import { getLoginPath } from './config';
import { AuthError, gqlFetch } from './gql';

/**
 * Server-side gqlFetch wrapper that redirects to login on auth errors.
 * Use this in Server Components instead of gqlFetch directly.
 */
export async function serverGqlFetch<TResult, TVariables>(
  document: TypedDocumentNode<TResult, TVariables>,
  variables?: TVariables,
  token?: string,
): Promise<TResult> {
  try {
    return await gqlFetch(document, variables, token);
  } catch (error) {
    if (error instanceof AuthError) {
      redirect(getLoginPath());
    }
    throw error;
  }
}
