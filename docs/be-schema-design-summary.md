# Tổng hợp: BE Schema Design — Enterprise ERP Dashboard

## Tổng quan

Nâng cấp toàn diện backend schema cho hệ thống Enterprise ERP Dashboard. Từ trạng thái ban đầu chỉ có GraphQL entity expose 3-4 field, không có CRUD/pagination/auth, đã triển khai đầy đủ 7 module với CRUD, pagination, relationship resolution, và CASL authorization.

## Trạng thái trước khi làm

- GraphQL entity chỉ expose một phần nhỏ field từ Prisma model
- Chỉ có query list, không có findById, mutation, pagination
- Không có relationship resolution (chỉ trả về ID)
- Auth guard dùng `RolesGuard` đơn giản, chưa tích hợp CASL
- `JwtAuthGuard` và `CurrentUser` chỉ hỗ trợ HTTP context
- Thiếu module Sports & Clubs, Department, Expense trên backend
- Dev server dùng `tsx watch` (esbuild) — không hỗ trợ NestJS decorators

## Những gì đã làm

### 1. Infrastructure & Shared Types

- Tạo shared GraphQL enums (`enums.ts`) — đăng ký 7 enum từ Prisma với `registerEnumType()`
- Tạo shared pagination types (`pagination.types.ts`) — `PaginationInput`, `Paginated<T>` factory, `IPaginatedType<T>`
- Tạo shared CASL types (`libs/permissions/casl.types.ts`) — `AppAction`, `AppSubject`, `AppAbility`
- Tạo CASL ability factory (`libs/permissions/index.ts`) — `defineAbilityFor(user)` với 3 role: admin/manager/staff

### 2. Prisma Schema

- Bổ sung enum `ExpenseStatus` (pending, approved, rejected, reimbursed)
- Bổ sung model `ExpenseCategory` và `Expense` với đầy đủ relation
- Thêm relation ngược vào User, Club, Department
- Sync database với `prisma db push`

### 3. Mở rộng Entity hiện có (đầy đủ field từ Prisma)

| Entity | Field đã thêm |
|---|---|
| EmployeeEntity | code, email, phone, hireDate, status, departmentId, managerId, userId, createdAt, updatedAt |
| CustomerEntity | email, phone, company, status, ownerId (thay owner), createdAt, updatedAt |
| InvoiceEntity | tax, total, status, dueDate, issuedAt, customerId, createdAt, updatedAt |
| InventoryItemEntity | category, minStock, unit, price, status, createdAt, updatedAt |

### 4. Module mới: Department

- Entity, DTO (Create/Update), Repository, Service, Resolver, Module
- Query: `departments` (paginated), `department(id)`
- Mutation: `createDepartment`, `updateDepartment`, `deleteDepartment`

### 5. Module mới: Sports & Clubs

- Entity: `ClubEntity`, `ClubMemberEntity`
- DTO: `CreateClubInput`, `UpdateClubInput`, `AddClubMemberInput`
- Repository, Service, Resolver (+ `ClubMemberResolver`), Module
- Query: `clubs` (paginated), `club(id)`
- Mutation: `createClub`, `updateClub`, `deleteClub`, `addClubMember`, `removeClubMember`

### 6. Module mới: Expense Management

- Entity: `ExpenseEntity`, `ExpenseCategoryEntity`
- DTO: Create/Update cho cả Expense và ExpenseCategory, `ExpenseFilterInput`
- Repository với filter logic (clubId, departmentId, categoryId, status) + pagination
- Service, Resolver, Module
- Query: `expenses` (paginated + filter), `expense(id)`, `expenseCategories`
- Mutation: CRUD cho cả Expense và ExpenseCategory

### 7. CRUD cho module hiện có

Thêm đầy đủ CRUD (DTO, Repository, Service, Resolver) cho:
- HR: `createEmployee`, `updateEmployee`, `deleteEmployee`, `employee(id)`
- CRM: `createCustomer`, `updateCustomer`, `deleteCustomer`, `customer(id)`
- Finance: `createInvoice`, `updateInvoice`, `deleteInvoice`, `invoice(id)`
- Inventory: `createInventoryItem`, `updateInventoryItem`, `deleteInventoryItem`, `inventoryItem(id)`

Error handling: `NotFoundException` cho ID không tồn tại, `ConflictException` cho vi phạm unique constraint (Prisma P2002).

### 8. Pagination

- Tất cả 7 module đều hỗ trợ pagination cho query danh sách
- `PaginatedResponse` type riêng cho mỗi entity (PaginatedEmployee, PaginatedCustomer, ...)
- Clamping: page < 1 → 1, limit < 1 → 1, limit > 100 → 100
- Default: page=1, limit=20

### 9. Relationship Resolution (`@ResolveField()`)

| Module | Relationships |
|---|---|
| HR | Employee → Department, Manager, Reports |
| CRM | Customer → Owner (User), Invoices |
| Finance | Invoice → Customer |
| Sports & Clubs | Club → Members, Expenses · ClubMember → User, Club |
| Department | Department → Parent, Children, Employees |
| Expense | Expense → Category, CreatedBy (User), Club, Department |

Tạo thêm `UserEntity` (`shared/entities/user.entity.ts`) cho các relationship cần User.

### 10. Authentication & Authorization (CASL)

- Cập nhật `JwtAuthGuard` hỗ trợ GraphQL context (`GqlExecutionContext`)
- Cập nhật `CurrentUser` decorator hỗ trợ GraphQL context
- Tạo `CaslAbilityGuard` — kiểm tra quyền dựa trên CASL ability
- Tạo `@CheckAbility()` decorator — gắn action + subject lên handler
- Áp dụng `@UseGuards(JwtAuthGuard, CaslAbilityGuard)` + `@CheckAbility()` cho tất cả 7 resolver
- Tạo `AbilitiesResolver` với query `myAbilities` trả về ability rules dạng JSON
- Tạo `ability.util.ts` wrapper để tránh rootDir compilation issues

Phân quyền:
- Admin: toàn quyền (`manage all`)
- Manager: read, create, update (không delete)
- Staff: chỉ read

### 11. Frontend CASL Integration

- Cài `@casl/react`
- Tạo `AbilityProvider` với `AbilityContext`, `Can` component, `useAbility` hook
- Wrap app trong `Providers` → `AbilityProvider`
- Hỗ trợ pattern `<Can I="create" a="Employee">` để ẩn/hiện UI

### 12. Dev Server Fix

- Đổi từ `tsx watch` (esbuild) sang `@swc-node/register` (SWC) — hỗ trợ `emitDecoratorMetadata`
- Cài `@swc/core`, `@swc-node/register`, `dotenv`, `class-validator`, `class-transformer`, `@as-integrations/express5`, `graphql-type-json`
- Thêm `experimentalDecorators` + `emitDecoratorMetadata` vào `tsconfig.base.json`
- Tạo `.swcrc` cho API
- Cập nhật dev command trong `project.json`

## Cấu trúc file API

```
apps/api/src/
├── main.ts
├── app.module.ts
├── schema.gql                          # Auto-generated GraphQL schema
├── modules/
│   ├── hr/                             # Human Resources
│   │   ├── entities/employee.entity.ts
│   │   ├── dto/create-employee.input.ts
│   │   ├── dto/update-employee.input.ts
│   │   ├── repositories/hr.repository.ts
│   │   ├── services/hr.service.ts
│   │   ├── hr.resolver.ts
│   │   └── hr.module.ts
│   ├── crm/                            # Customer Relationship Management
│   │   ├── entities/customer.entity.ts
│   │   ├── dto/create-customer.input.ts
│   │   ├── dto/update-customer.input.ts
│   │   ├── repositories/crm.repository.ts
│   │   ├── services/crm.service.ts
│   │   ├── crm.resolver.ts
│   │   └── crm.module.ts
│   ├── finance/                        # Finance & Invoicing
│   │   ├── entities/invoice.entity.ts
│   │   ├── dto/create-invoice.input.ts
│   │   ├── dto/update-invoice.input.ts
│   │   ├── repositories/finance.repository.ts
│   │   ├── services/finance.service.ts
│   │   ├── finance.resolver.ts
│   │   └── finance.module.ts
│   ├── inventory/                      # Inventory Management
│   │   ├── entities/inventory-item.entity.ts
│   │   ├── dto/create-inventory-item.input.ts
│   │   ├── dto/update-inventory-item.input.ts
│   │   ├── repositories/inventory.repository.ts
│   │   ├── services/inventory.service.ts
│   │   ├── inventory.resolver.ts
│   │   └── inventory.module.ts
│   ├── department/                     # Department (MỚI)
│   │   ├── entities/department.entity.ts
│   │   ├── dto/create-department.input.ts
│   │   ├── dto/update-department.input.ts
│   │   ├── repositories/department.repository.ts
│   │   ├── services/department.service.ts
│   │   ├── department.resolver.ts
│   │   └── department.module.ts
│   ├── sports-clubs/                   # Sports & Clubs (MỚI)
│   │   ├── entities/club.entity.ts
│   │   ├── entities/club-member.entity.ts
│   │   ├── dto/create-club.input.ts
│   │   ├── dto/update-club.input.ts
│   │   ├── dto/add-club-member.input.ts
│   │   ├── repositories/sports-clubs.repository.ts
│   │   ├── services/sports-clubs.service.ts
│   │   ├── sports-clubs.resolver.ts
│   │   └── sports-clubs.module.ts
│   └── expense/                        # Expense Management (MỚI)
│       ├── entities/expense.entity.ts
│       ├── entities/expense-category.entity.ts
│       ├── dto/create-expense.input.ts
│       ├── dto/update-expense.input.ts
│       ├── dto/create-expense-category.input.ts
│       ├── dto/update-expense-category.input.ts
│       ├── dto/expense-filter.input.ts
│       ├── repositories/expense.repository.ts
│       ├── services/expense.service.ts
│       ├── expense.resolver.ts
│       └── expense.module.ts
└── shared/
    ├── auth/
    │   ├── jwt-auth.guard.ts           # GraphQL-aware JWT guard
    │   └── current-user.decorator.ts   # GraphQL-aware CurrentUser
    ├── database/
    │   ├── database.module.ts
    │   └── prisma.service.ts
    ├── entities/
    │   └── user.entity.ts              # Shared UserEntity (MỚI)
    ├── graphql/
    │   ├── enums.ts                    # Shared enum registration (MỚI)
    │   └── pagination.types.ts         # Shared pagination types (MỚI)
    ├── permissions/
    │   ├── abilities.resolver.ts       # myAbilities query (MỚI)
    │   ├── ability.util.ts             # CASL wrapper (MỚI)
    │   ├── casl-ability.guard.ts       # CASL guard (MỚI)
    │   ├── check-ability.decorator.ts  # @CheckAbility() (MỚI)
    │   ├── roles.decorator.ts          # Legacy
    │   └── roles.guard.ts              # Legacy
    └── utils/
        └── pagination.util.ts
```

## Cách chạy

```bash
# Start PostgreSQL
docker compose up -d

# Start API dev server
pnpm api:dev

# GraphQL Playground
# http://localhost:4000/graphql
```

## Packages đã cài thêm

| Package | Mục đích |
|---|---|
| `@casl/ability` | CASL permission library (BE) |
| `@casl/react` | CASL React integration (FE) |
| `@swc/core` | SWC compiler (thay esbuild) |
| `@swc-node/register` | SWC runtime transpiler |
| `dotenv` | Load .env file |
| `class-validator` | NestJS ValidationPipe |
| `class-transformer` | NestJS transform pipe |
| `@as-integrations/express5` | Apollo Server v5 Express integration |
| `graphql-type-json` | GraphQL JSON scalar type |

## Còn lại (optional, chưa làm)

Các property-based test (đánh dấu `*` trong tasks.md) — có thể bổ sung sau:
- Property 1: Entity field completeness
- Property 2: CRUD round-trip
- Property 3: FindById returns correct record
- Property 4: NotFoundException
- Property 5: Pagination metadata consistency
- Property 6: Relationship resolution correctness
- Property 7: CASL role-based ability
- Property 8: myAbilities query round-trip
- Property 9: Expense filtering correctness
