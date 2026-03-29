import type { PureAbility } from '@casl/ability';

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

export type AppAbility = PureAbility<[AppAction, AppSubject]>;
