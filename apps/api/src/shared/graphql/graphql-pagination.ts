import { ObjectType } from '@nestjs/graphql';
import {
  Club,
  Customer,
  Department,
  Employee,
  Expense,
  InventoryItem,
  Invoice,
} from '@/prisma/graphql';
import { Paginated } from './pagination.types';

@ObjectType()
export class PaginatedClub extends Paginated(Club) {}

@ObjectType()
export class PaginatedCustomer extends Paginated(Customer) {}

@ObjectType()
export class PaginatedDepartment extends Paginated(Department) {}

@ObjectType()
export class PaginatedEmployee extends Paginated(Employee) {}

@ObjectType()
export class PaginatedExpense extends Paginated(Expense) {}

@ObjectType()
export class PaginatedInventoryItem extends Paginated(InventoryItem) {}

@ObjectType()
export class PaginatedInvoice extends Paginated(Invoice) {}
