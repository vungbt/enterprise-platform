/**
 * Load generated enum files so registerEnumType() runs before GraphQL schema is built.
 * Avoid importing the full `@/prisma/graphql` barrel (pulls hundreds of modules).
 */
import './graphql/prisma/club-member-role.enum';
import './graphql/prisma/club-member-status.enum';
import './graphql/prisma/club-status.enum';
import './graphql/prisma/customer-status.enum';
import './graphql/prisma/employee-status.enum';
import './graphql/prisma/expense-status.enum';
import './graphql/prisma/fund-contribution-status.enum';
import './graphql/prisma/fund-flow.enum';
import './graphql/prisma/fund-transaction-type.enum';
import './graphql/prisma/inventory-item-status.enum';
import './graphql/prisma/invoice-status.enum';
import './graphql/prisma/nulls-order.enum';
import './graphql/prisma/query-mode.enum';
import './graphql/prisma/sort-order.enum';
import './graphql/prisma/transaction-isolation-level.enum';
