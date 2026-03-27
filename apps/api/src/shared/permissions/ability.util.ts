import { AbilityBuilder, createMongoAbility, PureAbility } from '@casl/ability';
import type { AppAction, AppSubject } from './check-ability.decorator';

export type AppAbility = PureAbility<[AppAction, AppSubject]>;

export interface AbilityUser {
  roles: string[];
}

export function defineAbilityFor(user: AbilityUser): AppAbility {
  const { can, build } = new AbilityBuilder<AppAbility>(createMongoAbility);

  if (user.roles.includes('admin')) {
    can('manage', 'all');
  } else if (user.roles.includes('manager')) {
    can(['read', 'create', 'update'], 'all' as AppSubject);
  } else {
    // staff — read only
    can('read', 'all' as AppSubject);
  }

  return build();
}
