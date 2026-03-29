import { join } from 'node:path';
import { ApolloDriver, type ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AuthModule } from './modules/auth/auth.module';
import { CrmModule } from './modules/crm/crm.module';
import { DepartmentModule } from './modules/department/department.module';
import { ExpenseModule } from './modules/expense/expense.module';
import { FinanceModule } from './modules/finance/finance.module';
import { HrModule } from './modules/hr/hr.module';
import { InventoryModule } from './modules/inventory/inventory.module';
import { SportsClubsModule } from './modules/sports-clubs/sports-clubs.module';
import { DatabaseModule } from './shared/database/database.module';
import { AbilitiesResolver } from './shared/permissions/abilities.resolver';

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
