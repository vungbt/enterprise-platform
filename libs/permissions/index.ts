import { AbilityBuilder, createMongoAbility } from '@casl/ability';
import type { AppAbility, AppSubject } from './casl.types';

export type { AppAbility, AppAction, AppSubject } from './casl.types';

export interface AbilityUser {
  roles: string[];
}

export function defineAbilityFor(user: AbilityUser): AppAbility {
  const { can, build } = new AbilityBuilder<AppAbility>(createMongoAbility);

  if (user.roles.includes('admin')) {
    can('manage', 'all');
  } else if (user.roles.includes('manager')) {
    can(['read', 'create', 'update', 'delete'], 'all' as AppSubject);
  } else {
    can('read', 'all' as AppSubject);
  }

  return build();
}

export type UserRole = 'admin' | 'manager' | 'staff';
export type Permission = 'read:hr' | 'read:crm' | 'read:finance' | 'read:inventory';

const rolePermissions: Record<UserRole, Permission[]> = {
  admin: ['read:hr', 'read:crm', 'read:finance', 'read:inventory'],
  manager: ['read:hr', 'read:crm', 'read:finance'],
  staff: ['read:hr', 'read:crm'],
};

export function hasPermission(roles: UserRole[], permission: Permission) {
  return roles.some((role) => rolePermissions[role]?.includes(permission));
}
