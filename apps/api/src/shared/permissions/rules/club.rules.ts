import type { AbilityBuilder } from '@casl/ability';
import type { AbilityUser, AppAbility } from '../ability.util';

export function applyClubRules({ can }: AbilityBuilder<AppAbility>, user: AbilityUser) {
  if (user.roles.includes('admin')) {
    can('manage', 'Club');
    can('manage', 'ClubMember');
    return;
  }

  if (user.roles.includes('manager')) {
    can(['read', 'create', 'update', 'delete'], 'Club');
    can(['read', 'create', 'update', 'delete'], 'ClubMember');
    return;
  }

  // staff — read only
  can('read', 'Club');
  can('read', 'ClubMember');
}
