import type { AbilityBuilder } from '@casl/ability';
import type { AbilityUser, AppAbility } from '@api/shared/permissions/ability.util';

export function applyFinanceRules({ can }: AbilityBuilder<AppAbility>, user: AbilityUser) {
  if (user.roles.includes('admin')) {
    can('manage', 'Invoice');
    can('manage', 'Expense');
    can('manage', 'ExpenseCategory');
    return;
  }

  if (user.roles.includes('manager')) {
    can(['read', 'create', 'update', 'delete'], 'Invoice');
    can(['read', 'create', 'update', 'delete'], 'Expense');
    can(['read', 'create', 'update', 'delete'], 'ExpenseCategory');
    return;
  }

  can('read', 'Invoice');
  can('read', 'Expense');
  can('read', 'ExpenseCategory');
}
