import { SetMetadata } from '@nestjs/common';

export type AppAction = 'read' | 'create' | 'update' | 'delete' | 'manage';

export type AppSubject =
  | 'Employee'
  | 'Department'
  | 'Customer'
  | 'Invoice'
  | 'InventoryItem'
  | 'Club'
  | 'ClubMember'
  | 'Expense'
  | 'ExpenseCategory'
  | 'all';

export const CHECK_ABILITY_KEY = 'check_ability';

export interface CheckAbilityMeta {
  action: AppAction;
  subject: AppSubject;
}

export const CheckAbility = (meta: CheckAbilityMeta) =>
  SetMetadata(CHECK_ABILITY_KEY, meta);
