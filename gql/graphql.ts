/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: string; output: string; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: Record<string, unknown>; output: Record<string, unknown>; }
};

export type AddClubMemberInput = {
  clubId: Scalars['String']['input'];
  role?: ClubMemberRole;
  userId: Scalars['String']['input'];
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  accessToken: Scalars['String']['output'];
  user: UserEntity;
};

export type ClubEntity = {
  __typename?: 'ClubEntity';
  captainName?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  expenses: Array<ExpenseEntity>;
  foundedAt?: Maybe<Scalars['DateTime']['output']>;
  fundBalance: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  members: Array<ClubMemberEntity>;
  membersCount: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  sport: Scalars['String']['output'];
  status: ClubStatus;
  updatedAt: Scalars['DateTime']['output'];
};

export type ClubMemberEntity = {
  __typename?: 'ClubMemberEntity';
  club: ClubEntity;
  clubId: Scalars['String']['output'];
  joinedAt: Scalars['DateTime']['output'];
  role: ClubMemberRole;
  user: UserEntity;
  userId: Scalars['String']['output'];
};

export enum ClubMemberRole {
  Captain = 'captain',
  Coach = 'coach',
  Member = 'member'
}

export enum ClubStatus {
  Active = 'active',
  Inactive = 'inactive'
}

export type CreateClubInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  foundedAt?: InputMaybe<Scalars['DateTime']['input']>;
  name: Scalars['String']['input'];
  sport: Scalars['String']['input'];
  status?: ClubStatus;
};

export type CreateCustomerInput = {
  company?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  ownerId: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  status?: CustomerStatus;
};

export type CreateDepartmentInput = {
  name: Scalars['String']['input'];
  parentId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateEmployeeInput = {
  code: Scalars['String']['input'];
  departmentId: Scalars['String']['input'];
  email: Scalars['String']['input'];
  hireDate: Scalars['DateTime']['input'];
  managerId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  position: Scalars['String']['input'];
  status?: EmployeeStatus;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateExpenseCategoryInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type CreateExpenseInput = {
  amount: Scalars['Float']['input'];
  categoryId: Scalars['String']['input'];
  clubId?: InputMaybe<Scalars['String']['input']>;
  createdById: Scalars['String']['input'];
  date: Scalars['DateTime']['input'];
  departmentId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  status?: ExpenseStatus;
  title: Scalars['String']['input'];
};

export type CreateInventoryItemInput = {
  category?: InputMaybe<Scalars['String']['input']>;
  minStock: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  sku: Scalars['String']['input'];
  status?: InventoryItemStatus;
  stock: Scalars['Int']['input'];
  unit: Scalars['String']['input'];
};

export type CreateInvoiceInput = {
  amount: Scalars['Float']['input'];
  code: Scalars['String']['input'];
  customerId?: InputMaybe<Scalars['String']['input']>;
  dueDate?: InputMaybe<Scalars['DateTime']['input']>;
  issuedAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InvoiceStatus;
  tax: Scalars['Float']['input'];
  total: Scalars['Float']['input'];
};

export type CustomerEntity = {
  __typename?: 'CustomerEntity';
  company?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  invoices: Array<InvoiceEntity>;
  name: Scalars['String']['output'];
  owner: UserEntity;
  ownerId: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  status: CustomerStatus;
  updatedAt: Scalars['DateTime']['output'];
};

export enum CustomerStatus {
  Active = 'active',
  Churned = 'churned',
  Inactive = 'inactive',
  Prospect = 'prospect'
}

export type DepartmentEntity = {
  __typename?: 'DepartmentEntity';
  children: Array<DepartmentEntity>;
  employees: Array<EmployeeEntity>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  parent?: Maybe<DepartmentEntity>;
  parentId?: Maybe<Scalars['String']['output']>;
};

export type EmployeeEntity = {
  __typename?: 'EmployeeEntity';
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  department?: Maybe<DepartmentEntity>;
  departmentId: Scalars['String']['output'];
  email: Scalars['String']['output'];
  hireDate: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  manager?: Maybe<EmployeeEntity>;
  managerId?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  position: Scalars['String']['output'];
  reports: Array<EmployeeEntity>;
  status: EmployeeStatus;
  updatedAt: Scalars['DateTime']['output'];
  userId?: Maybe<Scalars['String']['output']>;
};

export enum EmployeeStatus {
  Active = 'active',
  OnLeave = 'on_leave',
  Resigned = 'resigned',
  Terminated = 'terminated'
}

export type ExpenseCategoryEntity = {
  __typename?: 'ExpenseCategoryEntity';
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ExpenseEntity = {
  __typename?: 'ExpenseEntity';
  amount: Scalars['Float']['output'];
  category: ExpenseCategoryEntity;
  categoryId: Scalars['String']['output'];
  club?: Maybe<ClubEntity>;
  clubId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy: UserEntity;
  createdById: Scalars['String']['output'];
  date: Scalars['DateTime']['output'];
  department?: Maybe<DepartmentEntity>;
  departmentId?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  status: ExpenseStatus;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ExpenseFilterInput = {
  categoryId?: InputMaybe<Scalars['String']['input']>;
  clubId?: InputMaybe<Scalars['String']['input']>;
  departmentId?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ExpenseStatus>;
};

export enum ExpenseStatus {
  Approved = 'approved',
  Pending = 'pending',
  Reimbursed = 'reimbursed',
  Rejected = 'rejected'
}

export type InventoryItemEntity = {
  __typename?: 'InventoryItemEntity';
  category?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  minStock: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  sku: Scalars['String']['output'];
  status: InventoryItemStatus;
  stock: Scalars['Int']['output'];
  unit: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export enum InventoryItemStatus {
  Available = 'available',
  Discontinued = 'discontinued',
  LowStock = 'low_stock',
  OutOfStock = 'out_of_stock'
}

export type InvoiceEntity = {
  __typename?: 'InvoiceEntity';
  amount: Scalars['Float']['output'];
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  customer?: Maybe<CustomerEntity>;
  customerId?: Maybe<Scalars['String']['output']>;
  dueDate?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  status: InvoiceStatus;
  tax: Scalars['Float']['output'];
  total: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export enum InvoiceStatus {
  Cancelled = 'cancelled',
  Draft = 'draft',
  Overdue = 'overdue',
  Paid = 'paid',
  Pending = 'pending'
}

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addClubMember: ClubMemberEntity;
  createClub: ClubEntity;
  createCustomer: CustomerEntity;
  createDepartment: DepartmentEntity;
  createEmployee: EmployeeEntity;
  createExpense: ExpenseEntity;
  createExpenseCategory: ExpenseCategoryEntity;
  createInventoryItem: InventoryItemEntity;
  createInvoice: InvoiceEntity;
  deleteClub: Scalars['Boolean']['output'];
  deleteCustomer: Scalars['Boolean']['output'];
  deleteDepartment: Scalars['Boolean']['output'];
  deleteEmployee: Scalars['Boolean']['output'];
  deleteExpense: Scalars['Boolean']['output'];
  deleteExpenseCategory: Scalars['Boolean']['output'];
  deleteInventoryItem: Scalars['Boolean']['output'];
  deleteInvoice: Scalars['Boolean']['output'];
  login: AuthPayload;
  loginWithOAuth: AuthPayload;
  register: AuthPayload;
  removeClubMember: Scalars['Boolean']['output'];
  updateClub: ClubEntity;
  updateCustomer: CustomerEntity;
  updateDepartment: DepartmentEntity;
  updateEmployee: EmployeeEntity;
  updateExpense: ExpenseEntity;
  updateExpenseCategory: ExpenseCategoryEntity;
  updateInventoryItem: InventoryItemEntity;
  updateInvoice: InvoiceEntity;
};


export type MutationAddClubMemberArgs = {
  input: AddClubMemberInput;
};


export type MutationCreateClubArgs = {
  input: CreateClubInput;
};


export type MutationCreateCustomerArgs = {
  input: CreateCustomerInput;
};


export type MutationCreateDepartmentArgs = {
  input: CreateDepartmentInput;
};


export type MutationCreateEmployeeArgs = {
  input: CreateEmployeeInput;
};


export type MutationCreateExpenseArgs = {
  input: CreateExpenseInput;
};


export type MutationCreateExpenseCategoryArgs = {
  input: CreateExpenseCategoryInput;
};


export type MutationCreateInventoryItemArgs = {
  input: CreateInventoryItemInput;
};


export type MutationCreateInvoiceArgs = {
  input: CreateInvoiceInput;
};


export type MutationDeleteClubArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteCustomerArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteDepartmentArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteEmployeeArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteExpenseArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteExpenseCategoryArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteInventoryItemArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteInvoiceArgs = {
  id: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationLoginWithOAuthArgs = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type MutationRegisterArgs = {
  input: RegisterInput;
};


export type MutationRemoveClubMemberArgs = {
  clubId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};


export type MutationUpdateClubArgs = {
  id: Scalars['String']['input'];
  input: UpdateClubInput;
};


export type MutationUpdateCustomerArgs = {
  id: Scalars['String']['input'];
  input: UpdateCustomerInput;
};


export type MutationUpdateDepartmentArgs = {
  id: Scalars['String']['input'];
  input: UpdateDepartmentInput;
};


export type MutationUpdateEmployeeArgs = {
  id: Scalars['String']['input'];
  input: UpdateEmployeeInput;
};


export type MutationUpdateExpenseArgs = {
  id: Scalars['String']['input'];
  input: UpdateExpenseInput;
};


export type MutationUpdateExpenseCategoryArgs = {
  id: Scalars['String']['input'];
  input: UpdateExpenseCategoryInput;
};


export type MutationUpdateInventoryItemArgs = {
  id: Scalars['String']['input'];
  input: UpdateInventoryItemInput;
};


export type MutationUpdateInvoiceArgs = {
  id: Scalars['String']['input'];
  input: UpdateInvoiceInput;
};

export type PaginatedClub = {
  __typename?: 'PaginatedClub';
  items: Array<ClubEntity>;
  limit: Scalars['Int']['output'];
  page: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PaginatedCustomer = {
  __typename?: 'PaginatedCustomer';
  items: Array<CustomerEntity>;
  limit: Scalars['Int']['output'];
  page: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PaginatedDepartment = {
  __typename?: 'PaginatedDepartment';
  items: Array<DepartmentEntity>;
  limit: Scalars['Int']['output'];
  page: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PaginatedEmployee = {
  __typename?: 'PaginatedEmployee';
  items: Array<EmployeeEntity>;
  limit: Scalars['Int']['output'];
  page: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PaginatedExpense = {
  __typename?: 'PaginatedExpense';
  items: Array<ExpenseEntity>;
  limit: Scalars['Int']['output'];
  page: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PaginatedInventoryItem = {
  __typename?: 'PaginatedInventoryItem';
  items: Array<InventoryItemEntity>;
  limit: Scalars['Int']['output'];
  page: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PaginatedInvoice = {
  __typename?: 'PaginatedInvoice';
  items: Array<InvoiceEntity>;
  limit: Scalars['Int']['output'];
  page: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PaginationInput = {
  limit?: Scalars['Int']['input'];
  page?: Scalars['Int']['input'];
};

export type Query = {
  __typename?: 'Query';
  club: ClubEntity;
  clubs: PaginatedClub;
  customer: CustomerEntity;
  customers: PaginatedCustomer;
  department: DepartmentEntity;
  departments: PaginatedDepartment;
  employee: EmployeeEntity;
  employees: PaginatedEmployee;
  expense: ExpenseEntity;
  expenseCategories: Array<ExpenseCategoryEntity>;
  expenses: PaginatedExpense;
  inventoryItem: InventoryItemEntity;
  inventoryItems: PaginatedInventoryItem;
  invoice: InvoiceEntity;
  invoices: PaginatedInvoice;
  myAbilities: Scalars['JSON']['output'];
};


export type QueryClubArgs = {
  id: Scalars['String']['input'];
};


export type QueryClubsArgs = {
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryCustomerArgs = {
  id: Scalars['String']['input'];
};


export type QueryCustomersArgs = {
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryDepartmentArgs = {
  id: Scalars['String']['input'];
};


export type QueryDepartmentsArgs = {
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryEmployeeArgs = {
  id: Scalars['String']['input'];
};


export type QueryEmployeesArgs = {
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryExpenseArgs = {
  id: Scalars['String']['input'];
};


export type QueryExpensesArgs = {
  filter?: InputMaybe<ExpenseFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryInventoryItemArgs = {
  id: Scalars['String']['input'];
};


export type QueryInventoryItemsArgs = {
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryInvoiceArgs = {
  id: Scalars['String']['input'];
};


export type QueryInvoicesArgs = {
  pagination?: InputMaybe<PaginationInput>;
};

export type RegisterInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type UpdateClubInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  foundedAt?: InputMaybe<Scalars['DateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sport?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ClubStatus>;
};

export type UpdateCustomerInput = {
  company?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<CustomerStatus>;
};

export type UpdateDepartmentInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  parentId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateEmployeeInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  departmentId?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  hireDate?: InputMaybe<Scalars['DateTime']['input']>;
  managerId?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<EmployeeStatus>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateExpenseCategoryInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateExpenseInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  categoryId?: InputMaybe<Scalars['String']['input']>;
  clubId?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  departmentId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ExpenseStatus>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateInventoryItemInput = {
  category?: InputMaybe<Scalars['String']['input']>;
  minStock?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<InventoryItemStatus>;
  stock?: InputMaybe<Scalars['Int']['input']>;
  unit?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateInvoiceInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  customerId?: InputMaybe<Scalars['String']['input']>;
  dueDate?: InputMaybe<Scalars['DateTime']['input']>;
  issuedAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<InvoiceStatus>;
  tax?: InputMaybe<Scalars['Float']['input']>;
  total?: InputMaybe<Scalars['Float']['input']>;
};

export type UserEntity = {
  __typename?: 'UserEntity';
  avatar?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type GetClubsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetClubsQuery = { __typename?: 'Query', clubs: { __typename?: 'PaginatedClub', items: Array<{ __typename?: 'ClubEntity', id: string, name: string, sport: string, description?: string | null, status: ClubStatus, createdAt: string, membersCount: number, captainName?: string | null, fundBalance: number }> } };

export type CreateClubMutationVariables = Exact<{
  input: CreateClubInput;
}>;


export type CreateClubMutation = { __typename?: 'Mutation', createClub: { __typename?: 'ClubEntity', id: string, name: string, sport: string, description?: string | null, status: ClubStatus, createdAt: string, membersCount: number, captainName?: string | null, fundBalance: number } };

export type UpdateClubMutationVariables = Exact<{
  id: Scalars['String']['input'];
  input: UpdateClubInput;
}>;


export type UpdateClubMutation = { __typename?: 'Mutation', updateClub: { __typename?: 'ClubEntity', id: string, name: string, sport: string, description?: string | null, status: ClubStatus, createdAt: string, membersCount: number, captainName?: string | null, fundBalance: number } };

export type DeleteClubMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteClubMutation = { __typename?: 'Mutation', deleteClub: boolean };


export const GetClubsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetClubs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clubs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"sport"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"membersCount"}},{"kind":"Field","name":{"kind":"Name","value":"captainName"}},{"kind":"Field","name":{"kind":"Name","value":"fundBalance"}}]}}]}}]}}]} as unknown as DocumentNode<GetClubsQuery, GetClubsQueryVariables>;
export const CreateClubDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateClub"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateClubInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createClub"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"sport"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"membersCount"}},{"kind":"Field","name":{"kind":"Name","value":"captainName"}},{"kind":"Field","name":{"kind":"Name","value":"fundBalance"}}]}}]}}]} as unknown as DocumentNode<CreateClubMutation, CreateClubMutationVariables>;
export const UpdateClubDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateClub"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateClubInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateClub"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"sport"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"membersCount"}},{"kind":"Field","name":{"kind":"Name","value":"captainName"}},{"kind":"Field","name":{"kind":"Name","value":"fundBalance"}}]}}]}}]} as unknown as DocumentNode<UpdateClubMutation, UpdateClubMutationVariables>;
export const DeleteClubDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteClub"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteClub"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteClubMutation, DeleteClubMutationVariables>;