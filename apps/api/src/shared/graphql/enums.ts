import { registerEnumType } from '@nestjs/graphql';
import {
  ClubMemberRole,
  ClubStatus,
  CustomerStatus,
  EmployeeStatus,
  ExpenseStatus,
  InventoryItemStatus,
  InvoiceStatus,
} from '@prisma/client';

registerEnumType(EmployeeStatus, { name: 'EmployeeStatus' });
registerEnumType(CustomerStatus, { name: 'CustomerStatus' });
registerEnumType(InvoiceStatus, { name: 'InvoiceStatus' });
registerEnumType(InventoryItemStatus, { name: 'InventoryItemStatus' });
registerEnumType(ClubStatus, { name: 'ClubStatus' });
registerEnumType(ClubMemberRole, { name: 'ClubMemberRole' });
registerEnumType(ExpenseStatus, { name: 'ExpenseStatus' });

export {
  ClubMemberRole,
  ClubStatus,
  CustomerStatus,
  EmployeeStatus,
  ExpenseStatus,
  InventoryItemStatus,
  InvoiceStatus,
};
