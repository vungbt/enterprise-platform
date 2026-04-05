import { join } from 'node:path';
import { ApolloDriver, type ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import '@api/prisma/graphql-enums.bootstrap';
import { AuthModule } from '@api/modules/auth/auth.module';
import { CrmModule } from '@api/modules/crm/crm.module';
import { DepartmentModule } from '@api/modules/department/department.module';
import { ExpenseModule } from '@api/modules/expense/expense.module';
import { FinanceModule } from '@api/modules/finance/finance.module';
import { HrModule } from '@api/modules/hr/hr.module';
import { InventoryModule } from '@api/modules/inventory/inventory.module';
import { SportsClubsModule } from '@api/modules/sports-clubs/sports-clubs.module';
import { DatabaseModule } from '@api/shared/database/database.module';
import { AbilitiesResolver } from '@api/shared/permissions/abilities.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'apps/api/src/schema.gql'),
      sortSchema: true,
      playground: true,
    }),
    DatabaseModule,
    AuthModule,
    HrModule,
    CrmModule,
    FinanceModule,
    InventoryModule,
    DepartmentModule,
    SportsClubsModule,
    ExpenseModule,
  ],
  providers: [AbilitiesResolver],
})
export class AppModule {}
