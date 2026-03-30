import type { AbilityBuilder } from '@casl/ability';
import type { AbilityUser, AppAbility } from '../ability.util';

export function applyCrmRules({ can }: AbilityBuilder<AppAbility>, user: AbilityUser) {
  if (user.roles.includes('admin')) {
    can('manage', 'Customer');
    return;
  }

  if (user.roles.includes('manager')) {
    can(['read', 'create', 'update', 'delete'], 'Customer');
    return;
  }

  can('read', 'Customer');
}
