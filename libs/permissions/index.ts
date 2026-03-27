import { UserRole } from '@enterprise/auth/index';

export type Permission = 'read:hr' | 'read:crm' | 'read:finance' | 'read:inventory';

const rolePermissions: Record<UserRole, Permission[]> = {
  admin: ['read:hr', 'read:crm', 'read:finance', 'read:inventory'],
  manager: ['read:hr', 'read:crm', 'read:finance'],
  staff: ['read:hr', 'read:crm']
};

export function hasPermission(roles: UserRole[], permission: Permission) {
  return roles.some((role) => rolePermissions[role]?.includes(permission));
}
