import {
  type CanActivate,
  type ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { defineAbilityFor } from './ability.util';
import { CHECK_ABILITY_KEY, type CheckAbilityMeta } from './check-ability.decorator';

@Injectable()
export class CaslAbilityGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requirement = this.reflector.get<CheckAbilityMeta>(
      CHECK_ABILITY_KEY,
      context.getHandler(),
    );

    // If no @CheckAbility metadata on handler, allow access
    if (!requirement) {
      return true;
    }

    const gqlCtx = GqlExecutionContext.create(context);
    const user = gqlCtx.getContext().req.user;

    if (!user) {
      throw new ForbiddenException('User not found in request context');
    }

    const ability = defineAbilityFor(user);

    if (!ability.can(requirement.action, requirement.subject)) {
      throw new ForbiddenException(
        `You do not have permission to ${requirement.action} ${requirement.subject}`,
      );
    }

    return true;
  }
}
