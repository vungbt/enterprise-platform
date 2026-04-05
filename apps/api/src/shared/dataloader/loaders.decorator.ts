import { createParamDecorator, type ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import type { DataLoaders } from './dataloader.service';

export const Loaders = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext): DataLoaders => {
    const gqlCtx = GqlExecutionContext.create(ctx);
    return gqlCtx.getContext().loaders;
  },
);
