import type { AbilityBuilder } from '@casl/ability';
import type { AbilityUser, AppAbility } from '../ability.util';

export function applyHrRules({ can }: AbilityBuilder<AppAbility>, user: AbilityUser) {
  if (user.roles.includes('admin')) {
    can('manage', 'Employee');
    can('manage', 'Department');
    return;
  }

  if (user.roles.includes('manager')) {
    can(['read', 'create', 'update', 'delete'], 'Employee');
    can(['read', 'create', 'update', 'delete'], 'Department');
    return;
  }

  can('read', 'Employee');
  can('read', 'Department');
}
