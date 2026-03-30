import { AbilityBuilder, createMongoAbility, type PureAbility } from '@casl/ability';
import type { AppAction, AppSubject } from './check-ability.decorator';
import { applyAllRules } from './rules';

export type AppAbility = PureAbility<[AppAction, AppSubject]>;

export interface AbilityUser {
  roles: string[];
}

export function defineAbilityFor(user: AbilityUser): AppAbility {
  const builder = new AbilityBuilder<AppAbility>(createMongoAbility);
  applyAllRules(builder, user);
  return builder.build();
}
