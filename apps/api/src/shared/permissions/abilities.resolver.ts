import { Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import GraphQLJSON from 'graphql-type-json';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CurrentUser } from '../auth/current-user.decorator';
import { defineAbilityFor } from './ability.util';

@Resolver()
export class AbilitiesResolver {
  @Query(() => GraphQLJSON, { name: 'myAbilities' })
  @UseGuards(JwtAuthGuard)
  myAbilities(@CurrentUser() user: any) {
    const ability = defineAbilityFor(user);
    return ability.rules;
  }
}
