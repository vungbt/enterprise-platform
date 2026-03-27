import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext().req;

    if (!request) {
      throw new UnauthorizedException('No request context found');
    }

    // In a real app, JWT validation would happen here via passport strategy.
    // For now, attach a demo user if none is present (dev mode).
    if (!request.user) {
      request.user = {
        id: 'demo-user',
        roles: ['admin'],
      };
    }

    return true;
  }
}
