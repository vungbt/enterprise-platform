/**
 * CRM GraphQL surface.
 * - Re-export generated Prisma→GraphQL types from `@/prisma/graphql`.
 * - Add custom `@ObjectType` / `@InputType` here when the generated shape is not what you want to expose.
 */
export {
  Customer,
  CustomerUncheckedCreateInput,
  CustomerUncheckedUpdateInput,
  Invoice,
  User,
} from '@/prisma/graphql';
