import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';
import { CurrentUser } from '../auth/current-user.decorator';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import type { AbilityUser } from './ability.util';
import { defineAbilityFor } from './ability.util';

@Resolver()
export class AbilitiesResolver {
  @Query(() => GraphQLJSON, { name: 'myAbilities' })
  @UseGuards(JwtAuthGuard)
  myAbilities(@CurrentUser() user: AbilityUser) {
    const ability = defineAbilityFor(user);
    return ability.rules;
  }
}
