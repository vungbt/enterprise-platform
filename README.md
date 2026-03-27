# Enterprise Platform — Modular ERP Dashboard

Nx monorepo với Next.js 15 App Router, NestJS GraphQL backend, Tailwind CSS, TypeScript, và shared UI component library.

---

## Tech Stack

| Layer | Công nghệ |
|---|---|
| Frontend | Next.js 15 (App Router), React 19, TypeScript 5.8 |
| Backend | NestJS 11, GraphQL/Apollo Server 5, Prisma 6, PostgreSQL |
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
├── modules/
│   ├── hr/                     # Feature module: Human Resources
│   ├── crm/                    # Feature module: CRM
│   ├── finance/                # Feature module: Finance (skeleton)
│   └── inventory/              # Feature module: Inventory (skeleton)
├── libs/
│   ├── ui/                     # Shared UI component library
│   ├── api-client/             # Shared Axios HTTP client
│   ├── auth/                   # Auth utilities
│   ├── permissions/            # RBAC helpers
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

# Chạy frontend (Next.js)
pnpm dev

# Chạy backend (NestJS)
pnpm api:dev

# Build production
pnpm build
pnpm api:build
```

Mở `http://localhost:3000`.

---

## Feature Modules

| Module | Trạng thái | Mô tả |
|---|---|---|
| `modules/hr/` | Hoàn chỉnh | Employee directory, table, API, service |
| `modules/crm/` | Hoàn chỉnh | Customer list, status management, API, service |
| `modules/finance/` | Skeleton | Placeholder page, Invoice entity ở DB |
| `modules/inventory/` | Skeleton | Placeholder page, InventoryItem entity ở DB |

### Cấu trúc module chuẩn

Mỗi feature module gồm:

```
modules/<name>/
├── module.ts           # Metadata (id, name, route, icon, themeKey, component)
├── routes.ts           # Route → component mapping
├── pages/              # Page components (Next.js Server Components)
├── components/         # Client components
├── services/           # Business logic, data fetching
└── api/                # HTTP calls tới backend, có fallback mock data
```

### Đăng ký module mới

1. Tạo thư mục `modules/<name>/` theo cấu trúc trên.
2. Export `DashboardModule` từ `module.ts`:

```typescript
import { DashboardModule } from '@enterprise/shared-types/modules';

export const myModule: DashboardModule = {
  id: 'my-module',
  name: 'My Module',
  route: '/my-module',
  icon: 'icon-name',        // Lucide icon name
  themeKey: 'my-module',    // CSS variable override key
  component: MyPage
};
```

3. Thêm vào `apps/dashboard-web/module-registry/modules.ts` — sidebar tự động hiển thị.

---

## API Backend (`apps/api/`)

### Architecture

```
Resolver → Service → Repository → Prisma (PostgreSQL)
```

### Modules hiện có

| Module | Entity | GraphQL Query |
|---|---|---|
| HR | `Employee` (id, name, position, department) | `employees` |
| CRM | `Customer` (id, name, owner, status) | `customers` |
| Finance | `Invoice` (id, code, amount, status) | — |
| Inventory | `InventoryItem` (id, sku, name, stock) | — |

### Shared infrastructure

- `DatabaseModule` — Global Prisma service
- `JwtAuthGuard` — JWT authentication
- `RolesGuard` + `@Roles()` — Role-based access control
- `@CurrentUser()` — Decorator lấy thông tin user từ request
- `PaginationUtil` — Pagination helpers

### Roles

```typescript
enum UserRole { admin, manager, staff }
```

---

## UI Component Library (`libs/ui/`)

### Form

| Component | Mô tả |
|---|---|
| `Input` | Text input, hỗ trợ icon prefix/suffix, size variants |
| `InputPassword` | Password input với toggle show/hide |
| `Select` | Dropdown, 3 variants: basic / async / async-creatable |
| `DatePicker` | Single date selection |
| `DateRangePicker` | Date range selection |
| `TimePicker` | Time selection |
| `Checkbox` | Checkbox |
| `Radio` / `RadioGroup` | Radio button group |
| `Form`, `FormField`, `FormLabel`, `FormErrorMessage` | Form wrapper + validation |

### Data Display

| Component | Mô tả |
|---|---|
| `Table` | Data table (header, body, row, cell) |
| `TableEmpty` | Empty state |
| `TableLoading` | Loading skeleton |
| `Pagination` | Page navigation |

### Feedback & Overlay

| Component | Mô tả |
|---|---|
| `Toast` | Toast notifications (via Sonner) |
| `Modal` | Modal dialog |
| `Drawer` | Slide-out drawer (rc-drawer) |

### Navigation & Layout

| Component | Mô tả |
|---|---|
| `DashboardLayout` | Main layout (sidebar + header + content) |
| `Sidebar` | Module navigation, auto-generated từ registry |
| `Header` | Active module display |
| `Breadcrumb` | Breadcrumb navigation |
| `Tabs` | Tab navigation |
| `Menu` | Dropdown menu |

### Primitives

| Component | Mô tả |
|---|---|
| `Button` | Polymorphic, 6 variants × 5 màu |
| `Tag` | Status / label tag |
| `Box` | Container utility |
| `Icons` | Lucide icon wrapper (`RenderIcon`) |

#### Button variants

```
variant: solid | outline | subtle | link | text | ghost
color:   primary | secondary | success | error | pending | neutral
size:    small | middle | large
```

---

## Design System

### CSS Variable Design Tokens (`libs/ui/theme/`)

Toàn bộ màu sắc, spacing, typography dùng CSS custom properties:

```css
/* Colors */
--color-primary, --color-primary-hover, --color-primary-subtle, ...
--color-secondary, --color-success, --color-error, --color-pending, --color-info
--color-neutral-*, --color-surface, --color-border

/* Typography */
--font-size-xs (8px) → --font-size-6xl (48px)
--line-height-xs (12px) → --line-height-6xl (64px)
--font-family: Inter
```

### Module Theming

Mỗi module có thể override màu sắc riêng qua `data-module` attribute:

```css
[data-module="finance"] {
  --color-primary: ...;
}
```

Override được áp dụng tự động qua `themeKey` trong module metadata.

---

## Path Aliases (TypeScript)

```typescript
@enterprise/ui            → libs/ui/
@enterprise/api-client    → libs/api-client/
@enterprise/auth          → libs/auth/
@enterprise/permissions   → libs/permissions/
@enterprise/shared-types  → libs/shared-types/
```

---

## Key Concepts

- **Module registry**: mỗi module export 1 object `DashboardModule`, được collect vào `apps/dashboard-web/module-registry/modules.ts` → sidebar tự động render.
- **Async Server Components**: page components là `async function`, fetch data trực tiếp phía server.
- **Graceful fallback**: nếu API lỗi, tự động dùng mock data để không crash UI.
- **Shared API client**: `@enterprise/api-client` export Axios instance dùng chung, cấu hình qua `NEXT_PUBLIC_API_BASE_URL`.
- **Layered backend**: Resolver chỉ nhận/trả GraphQL, logic xử lý ở Service, data access ở Repository.
