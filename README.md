# Enterprise Platform — Modular ERP Dashboard

Nx monorepo với Next.js 15 App Router, NestJS GraphQL backend, Tailwind CSS, TypeScript, và shared UI component library.

---

## Tech Stack

| Layer | Công nghệ |
|---|---|
| Frontend | Next.js 15 (App Router), React 19, TypeScript 5.8 |
| Backend | NestJS 11, GraphQL/Apollo Server 5, Prisma 6, PostgreSQL |
| Auth | @nestjs/jwt, @nestjs/passport, passport-jwt, bcrypt |
| Authorization | @casl/ability, @casl/react |
| UI | Tailwind CSS 3.4, Lucide React, TanStack Table/Form, react-select |
| Monorepo | Nx 22, pnpm 10 |
| Validation | Zod 4 |
| Notifications | Sonner 2 |

---

## Cấu trúc thư mục

```
enterprise-platform/
├── apps/
│   ├── dashboard-web/          # Next.js host app (shell)
│   └── api/                    # NestJS GraphQL backend
├── modules/                    # Frontend feature modules
│   ├── hr/
│   ├── crm/
│   ├── finance/
│   ├── inventory/
│   └── sports-clubs/
├── libs/
│   ├── ui/                     # Shared UI component library
│   ├── api-client/             # Shared Axios HTTP client
│   ├── auth/                   # Auth utilities (useAuth hook)
│   ├── permissions/            # CASL ability factory (shared FE + BE)
│   └── shared-types/           # Shared TypeScript types & contracts
└── config/
    ├── tailwind/               # Shared Tailwind preset + design tokens
    └── typescript/             # Shared TypeScript config
```

---

## Chạy dự án

```bash
# Cài dependencies
pnpm install

# Setup DB (lần đầu)
cp apps/api/.env.example apps/api/.env   # điền DATABASE_URL, JWT_SECRET
pnpm prisma migrate dev --schema apps/api/prisma/schema.prisma --name init
pnpm prisma generate --schema apps/api/prisma/schema.prisma

# Chạy frontend (Next.js) — http://localhost:3000
pnpm dev

# Chạy backend (NestJS) — http://localhost:3001/graphql
pnpm api:dev

# Build production
pnpm build
pnpm api:build
```

### Biến môi trường

```env
# apps/api/.env
DATABASE_URL=postgresql://user:password@localhost:5432/enterprise
JWT_SECRET=your-secret-key-change-in-production

# apps/dashboard-web/.env.local
NEXT_PUBLIC_API_BASE_URL=http://localhost:3001
```

---

## Database Schema

### Auth & RBAC

```
User          — id, email, name, password (hashed), avatar, isActive
Role          — id, name (unique), label
RolePermission— roleId × permission (string: "view:hr", "create:employee")
UserRole      — userId × roleId (many-to-many)
```

### Business Modules

```
Employee      — code, name, email, phone, position, hireDate, status
              → FK: departmentId, managerId (self-ref), userId
Department    — name, parentId (tree structure)
Customer      — name, email, phone, company, status
              → FK: ownerId (User)
Invoice       — code, amount, tax, total, status, dueDate, issuedAt
              → FK: customerId
InventoryItem — sku, name, category, stock, minStock, unit, price, status
Club          — name, sport, description, status, foundedAt
ClubMember    — clubId × userId, role (captain/coach/member)
ExpenseCategory — name, description
Expense       — title, amount, date, status
              → FK: categoryId, createdById, clubId?, departmentId?
```

### Enums

| Enum | Giá trị |
|---|---|
| `EmployeeStatus` | active, resigned, terminated, on_leave |
| `CustomerStatus` | prospect, active, inactive, churned |
| `InvoiceStatus` | draft, pending, paid, overdue, cancelled |
| `InventoryItemStatus` | available, low_stock, out_of_stock, discontinued |
| `ClubStatus` | active, inactive |
| `ClubMemberRole` | captain, coach, member |
| `ExpenseStatus` | pending, approved, rejected, reimbursed |

---

## API Backend (`apps/api/`)

### Architecture

```
Client → JwtAuthGuard → CaslAbilityGuard → Resolver → Service → Repository → Prisma
```

### Modules

| Module | Queries | Mutations |
|---|---|---|
| **Auth** | — | `login`, `register` |
| **HR** | `employees`, `employee(id)` | `createEmployee`, `updateEmployee`, `deleteEmployee` |
| **CRM** | `customers`, `customer(id)` | `createCustomer`, `updateCustomer`, `deleteCustomer` |
| **Finance** | `invoices`, `invoice(id)` | `createInvoice`, `updateInvoice`, `deleteInvoice` |
| **Inventory** | `inventoryItems`, `inventoryItem(id)` | `createInventoryItem`, `updateInventoryItem`, `deleteInventoryItem` |
| **Department** | `departments`, `department(id)` | `createDepartment`, `updateDepartment`, `deleteDepartment` |
| **Sports & Clubs** | `clubs`, `club(id)` | `createClub`, `updateClub`, `deleteClub`, `addClubMember`, `removeClubMember` |
| **Expense** | `expenses` (filter+page), `expense(id)`, `expenseCategories` | `createExpense`, `updateExpense`, `deleteExpense`, `createExpenseCategory`, `updateExpenseCategory`, `deleteExpenseCategory` |
| **Abilities** | `myAbilities` | — |

### Module structure (mỗi backend module)

```
src/modules/<name>/
├── <name>.module.ts
├── <name>.resolver.ts      # @UseGuards(JwtAuthGuard, CaslAbilityGuard)
├── entities/               # @ObjectType() GraphQL entities
├── dto/                    # @InputType() cho create/update
├── services/               # Business logic, NotFoundException, ConflictException
└── repositories/           # Prisma queries, pagination
```

### Relationship Resolution (`@ResolveField`)

| Từ | Sang |
|---|---|
| Employee | → Department, → Manager (Employee), → Reports (Employee[]) |
| Customer | → Owner (User), → Invoices |
| Invoice | → Customer |
| Club | → Members (ClubMember[]), → Expenses |
| ClubMember | → User, → Club |
| Department | → Parent, → Children, → Employees |
| Expense | → Category, → CreatedBy (User), → Club?, → Department? |

### Pagination

Tất cả query danh sách hỗ trợ pagination:

```graphql
query {
  employees(pagination: { page: 1, limit: 20 }) {
    items { id name position }
    total
    page
    limit
    totalPages
  }
}
```

- Mặc định: `page=1`, `limit=20`
- Giới hạn tối đa: `limit=100`

---

## Authentication & Authorization

### JWT Auth

**Luồng:**
1. Client gọi `mutation login` → nhận `accessToken`
2. Gắn vào mọi request: `Authorization: Bearer <token>`
3. `JwtAuthGuard` validate token → attach `user` vào request context

**Dev mode (auto):** Nếu không có header `Authorization`, guard tự động gán `{ id: 'demo-user', roles: ['admin'] }` — không cần login khi phát triển.

```graphql
mutation {
  login(input: { email: "admin@example.com", password: "password" }) {
    accessToken
    user { id name email }
  }
}

mutation {
  register(input: { email: "user@example.com", name: "User", password: "password" }) {
    accessToken
    user { id name email }
  }
}
```

### CASL Authorization

Dùng chung giữa Frontend và Backend qua `libs/permissions/`:

```typescript
import { defineAbilityFor } from '@enterprise/permissions';

const ability = defineAbilityFor({ roles: ['manager'] });
ability.can('create', 'Employee') // → true
ability.can('delete', 'Employee') // → false
```

| Role | Quyền |
|---|---|
| `admin` | `manage` all (toàn quyền) |
| `manager` | `read`, `create`, `update` all |
| `staff` | `read` all |

**Backend** — decorator trên mỗi resolver:

```typescript
@CheckAbility({ action: 'create', subject: 'Employee' })
createEmployee(@Args('input') input: CreateEmployeeInput) { ... }
```

**Frontend** — `Can` component ẩn/hiện UI:

```tsx
import { Can } from '@/ability-provider';

<Can I="create" a="Employee">
  <button>Add Employee</button>
</Can>
```

**Query abilities từ API:**
```graphql
query { myAbilities }  # trả về CASL rules JSON để FE hydrate
```

---

## Frontend Modules

| Module | Route | Icon | Theme | Trạng thái |
|---|---|---|---|---|
| Human Resources | `/hr` | `users` | Blue `#0079f6` | Hoàn chỉnh |
| CRM | `/crm` | `building-storefront` | Green `#00bf44` | Hoàn chỉnh |
| Finance | `/finance` | `landmark` | Red `#fe2b27` | Skeleton |
| Inventory | `/inventory` | `store` | Yellow `#febe00` | Skeleton |
| Sports & Clubs | `/sports-clubs` | `trophy` | — | Hoàn chỉnh |

### Đăng ký module mới

1. Tạo `modules/<name>/` theo cấu trúc chuẩn
2. Export `DashboardModule` từ `module.ts`:

```typescript
export const myModule: DashboardModule = {
  id: 'my-module',
  name: 'My Module',
  route: '/my-module',
  icon: 'icon-name',
  themeKey: 'my-module',
  component: MyPage,
  requiredPermission: 'view:my-module'  // CASL permission
};
```

3. Thêm path alias vào `tsconfig.base.json`:
```json
"@enterprise/modules/my-module/*": ["modules/my-module/*"]
```

4. Đăng ký vào `apps/dashboard-web/module-registry/modules.ts`

---

## UI Component Library (`libs/ui/`)

### Form

| Component | Mô tả |
|---|---|
| `Input` | Text input, icon prefix/suffix, size variants |
| `InputPassword` | Password với toggle show/hide |
| `Select` | Dropdown: basic / async / async-creatable |
| `DatePicker` / `DateRangePicker` | Date selection |
| `TimePicker` | Time selection |
| `Checkbox`, `Radio` / `RadioGroup` | Selection controls |
| `Form`, `FormField`, `FormLabel`, `FormErrorMessage` | Form wrapper + validation |

### Data Display

| Component | Mô tả |
|---|---|
| `Table` + `TableHeader/Body/Row/Cell` | Data table |
| `TableEmpty`, `TableLoading` | States |
| `Pagination` | Page navigation |

### Feedback & Overlay

| Component | Mô tả |
|---|---|
| `Toast` | Notifications (Sonner) |
| `Modal` | Dialog |
| `Drawer` | Slide-out panel |

### Navigation & Layout

| Component | Mô tả |
|---|---|
| `DashboardLayout` | Sidebar + header + content |
| `Sidebar` | Auto-generated từ module registry |
| `Breadcrumb`, `Tabs`, `Menu` | Navigation |

### Primitives

| Component | Variants |
|---|---|
| `Button` | 6 variants (solid/outline/subtle/link/text/ghost) × 5 màu × 3 size |
| `Tag` | Status/label |
| `Icons` | Lucide wrapper — xem `IconName` type để biết danh sách |

---

## Design System

### Module Themes

Mỗi module override màu primary qua `data-module` attribute (tự động từ `themeKey`):

```css
[data-module='hr']        { --color-primary: #0079f6; }
[data-module='crm']       { --color-primary: #00bf44; }
[data-module='finance']   { --color-primary: #fe2b27; }
[data-module='inventory'] { --color-primary: #febe00; }
```

### CSS Variables

```css
--color-primary, --color-primary-hover, --color-primary-bg, --color-primary-border
--color-secondary, --color-success, --color-error, --color-pending, --color-info
--color-neutral-*, --color-surface, --color-border
--font-size-xs (8px) → --font-size-6xl (48px)
--line-height-xs (12px) → --line-height-6xl (64px)
```

---

## Path Aliases (TypeScript)

```typescript
@enterprise/ui/*              → libs/ui/*
@enterprise/api-client/*      → libs/api-client/*
@enterprise/auth/*            → libs/auth/*
@enterprise/permissions/*     → libs/permissions/*
@enterprise/shared-types/*    → libs/shared-types/*
@enterprise/modules/hr/*      → modules/hr/*
@enterprise/modules/crm/*     → modules/crm/*
@enterprise/modules/finance/* → modules/finance/*
@enterprise/modules/inventory/*    → modules/inventory/*
@enterprise/modules/sports-clubs/* → modules/sports-clubs/*
```

---

## Việc còn lại (Backlog)

| Hạng mục | Mô tả |
|---|---|
| `prisma migrate dev` | Tạo DB tables từ schema hiện tại |
| JWT thật | Hiện tại guard đang dùng demo user khi không có token |
| Frontend CASL dynamic | `AbilityProvider` đang dùng hardcode admin, cần fetch `myAbilities` từ API |
| Finance & Inventory FE | 2 module chỉ có skeleton page, chưa có table/component |
| Property tests | 9 property tests optional trong `.kiro/specs/be-schema-design/tasks.md` |
| Expense FE module | Backend đã có, chưa có frontend module |
| Department FE module | Backend đã có, chưa có frontend module |
