import type { AbilityBuilder } from '@casl/ability';
import type { AbilityUser, AppAbility } from '@api/shared/permissions/ability.util';

export function applyInventoryRules({ can }: AbilityBuilder<AppAbility>, user: AbilityUser) {
  if (user.roles.includes('admin')) {
    can('manage', 'InventoryItem');
    return;
  }

  if (user.roles.includes('manager')) {
    can(['read', 'create', 'update', 'delete'], 'InventoryItem');
    return;
  }

  can('read', 'InventoryItem');
}
