import { join } from 'node:path';
import { ApolloDriver, type ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { GraphQLModule } from '@nestjs/graphql';
import { ThrottlerModule } from '@nestjs/throttler';
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
import { DataLoaderModule } from '@api/shared/dataloader/dataloader.module';
import { DataLoaderService } from '@api/shared/dataloader/dataloader.service';
import { GqlThrottlerGuard } from '@api/shared/guards/gql-throttler.guard';
import { AbilitiesResolver } from '@api/shared/permissions/abilities.resolver';
import { GraphQLLoggingPlugin } from '@api/shared/plugins/graphql-logging.plugin';

@Module({
  imports: [
    ThrottlerModule.forRoot({
      throttlers: [
        { name: 'short', ttl: 1000, limit: 10 }, // 10 req/sec
        { name: 'medium', ttl: 60000, limit: 100 }, // 100 req/min
      ],
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      inject: [DataLoaderService],
      useFactory: (dataloaderService: DataLoaderService) => ({
        autoSchemaFile: join(process.cwd(), 'apps/api/src/schema.gql'),
        sortSchema: true,
        playground: true,
        context: ({ req, res }: { req: Request; res: Response }) => ({
          req,
          res,
          loaders: dataloaderService.createLoaders(),
        }),
      }),
    }),
    DatabaseModule,
    DataLoaderModule,
    AuthModule,
    HrModule,
    CrmModule,
    FinanceModule,
    InventoryModule,
    DepartmentModule,
    SportsClubsModule,
    ExpenseModule,
  ],
  providers: [
    AbilitiesResolver,
    GraphQLLoggingPlugin,
    { provide: APP_GUARD, useClass: GqlThrottlerGuard },
  ],
})
export class AppModule {}
