import { registerEnumType } from '@nestjs/graphql';
import {
  EmployeeStatus,
  CustomerStatus,
  InvoiceStatus,
  InventoryItemStatus,
  ClubStatus,
  ClubMemberRole,
  ExpenseStatus,
} from '@prisma/client';

registerEnumType(EmployeeStatus, { name: 'EmployeeStatus' });
registerEnumType(CustomerStatus, { name: 'CustomerStatus' });
registerEnumType(InvoiceStatus, { name: 'InvoiceStatus' });
registerEnumType(InventoryItemStatus, { name: 'InventoryItemStatus' });
registerEnumType(ClubStatus, { name: 'ClubStatus' });
registerEnumType(ClubMemberRole, { name: 'ClubMemberRole' });
registerEnumType(ExpenseStatus, { name: 'ExpenseStatus' });

export {
  EmployeeStatus,
  CustomerStatus,
  InvoiceStatus,
  InventoryItemStatus,
  ClubStatus,
  ClubMemberRole,
  ExpenseStatus,
};
