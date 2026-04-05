import type { ApolloServerPlugin, BaseContext, GraphQLRequestListener } from '@apollo/server';
import { Plugin } from '@nestjs/apollo';
import { Logger } from '@nestjs/common';

@Plugin()
export class GraphQLLoggingPlugin implements ApolloServerPlugin {
  private readonly logger = new Logger('GraphQL');

  async requestDidStart(): Promise<GraphQLRequestListener<BaseContext>> {
    const logger = this.logger;
    const start = Date.now();

    return {
      async didResolveOperation(ctx) {
        const opName = ctx.operationName ?? 'anonymous';
        const opType = ctx.operation?.operation ?? 'unknown';
        logger.log(`→ ${opType} ${opName}`);
      },

      async willSendResponse(ctx) {
        const duration = Date.now() - start;
        const opName = ctx.operationName ?? 'anonymous';
        const errors =
          ctx.response.body.kind === 'single' ? ctx.response.body.singleResult.errors : [];
        const status = errors?.length ? 'ERROR' : 'OK';
        logger.log(`← ${opName} ${status} ${duration}ms`);
      },

      async didEncounterErrors(ctx) {
        for (const err of ctx.errors) {
          logger.error(`${err.message}`, err.extensions?.stacktrace?.[0]);
        }
      },
    };
  }
}
