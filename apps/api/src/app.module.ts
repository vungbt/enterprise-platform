import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { HrModule } from './modules/hr/hr.module';
import { CrmModule } from './modules/crm/crm.module';
import { FinanceModule } from './modules/finance/finance.module';
import { InventoryModule } from './modules/inventory/inventory.module';
import { DepartmentModule } from './modules/department/department.module';
import { SportsClubsModule } from './modules/sports-clubs/sports-clubs.module';
import { ExpenseModule } from './modules/expense/expense.module';
import { DatabaseModule } from './shared/database/database.module';
import { AbilitiesResolver } from './shared/permissions/abilities.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'apps/api/src/schema.gql'),
      sortSchema: true,
      playground: true
    }),
    DatabaseModule,
    HrModule,
    CrmModule,
    FinanceModule,
    InventoryModule,
    DepartmentModule,
    SportsClubsModule,
    ExpenseModule
  ],
  providers: [AbilitiesResolver]
})
export class AppModule {}
