# Kế hoạch Triển khai: BE Schema Design

## Tổng quan

Triển khai nâng cấp toàn diện backend schema cho hệ thống Enterprise ERP Dashboard. Thứ tự: shared infrastructure (enums, types, pagination, CASL) → Prisma schema → cập nhật entity hiện có → tạo module mới → CRUD mutations → pagination → relationship resolution → auth guards → FE CASL.

## Tasks

- [x] 1. Tạo shared enum, type, và constant definitions tập trung
  - [x] 1.1 Tạo file shared enums cho GraphQL (`apps/api/src/shared/graphql/enums.ts`)
    - Import tất cả enum từ Prisma (`EmployeeStatus`, `CustomerStatus`, `InvoiceStatus`, `InventoryItemStatus`, `ClubStatus`, `ClubMemberRole`, `ExpenseStatus`)
    - Gọi `registerEnumType()` cho từng enum với name tương ứng
    - _Yêu cầu: 1.5_

  - [x] 1.2 Tạo file shared pagination types (`apps/api/src/shared/graphql/pagination.types.ts`)
    - Tạo `PaginationInput` InputType (page default 1, limit default 20)
    - Tạo generic `Paginated<T>` factory function trả về PaginatedResponse ObjectType (items, total, page, limit, totalPages)
    - Tạo interface `IPaginatedType<T>`
    - _Yêu cầu: 6.1, 6.5_

  - [x] 1.3 Tạo file shared CASL types (`libs/permissions/casl.types.ts`)
    - Định nghĩa `AppAction` type: 'read' | 'create' | 'update' | 'delete' | 'manage'
    - Định nghĩa `AppSubject` type: 'Employee' | 'Department' | 'Customer' | 'Invoice' | 'InventoryItem' | 'Club' | 'ClubMember' | 'Expense' | 'ExpenseCategory' | 'all'
    - Định nghĩa `AppAbility` type
    - _Yêu cầu: 8.3, 9.4_

  - [ ]* 1.4 Viết property test cho CASL role-based ability
    - **Property 7: CASL role-based ability**
    - **Validates: Yêu cầu 8.4, 8.5, 8.6**

- [x] 2. Cập nhật Prisma schema và shared CASL ability factory
  - [x] 2.1 Bổ sung Prisma model cho Expense Management (`apps/api/prisma/schema.prisma`)
    - Thêm enum `ExpenseStatus` (pending, approved, rejected, reimbursed)
    - Thêm model `ExpenseCategory` (id, name unique, description nullable, createdAt, updatedAt)
    - Thêm model `Expense` (id, title, amount, description, date, status, categoryId, createdById, clubId nullable, departmentId nullable, createdAt, updatedAt)
    - Thêm relation ngược vào model `User` (expenses), `Club` (expenses), `Department` (expenses)
    - Chạy `npx prisma generate` để cập nhật Prisma Client
    - _Yêu cầu: 10.1, 10.2, 10.3_

  - [x] 2.2 Cập nhật `libs/permissions/index.ts` với CASL ability factory
    - Cài đặt `@casl/ability` package
    - Tạo function `defineAbilityFor(user)` trả về `AppAbility` instance
    - Admin: `can('manage', 'all')` — toàn quyền
    - Manager: `can(['read', 'create', 'update'], 'all')` — không delete
    - Staff: `can('read', 'all')` — chỉ đọc
    - Export tất cả types và function
    - _Yêu cầu: 8.1, 8.2, 8.4, 8.5, 8.6, 9.1_

- [x] 3. Checkpoint — Đảm bảo Prisma generate thành công và shared types biên dịch đúng
  - Đảm bảo tất cả tests pass, hỏi user nếu có thắc mắc.

- [x] 4. Mở rộng GraphQL entity hiện có để expose đầy đủ field
  - [x] 4.1 Cập nhật `EmployeeEntity` (`apps/api/src/modules/hr/entities/employee.entity.ts`)
    - Thêm tất cả field còn thiếu: code, email, phone (nullable), hireDate, status (EmployeeStatus enum), departmentId, managerId (nullable), userId (nullable), createdAt, updatedAt
    - Import enum từ shared enums file
    - _Yêu cầu: 1.1, 1.6_

  - [x] 4.2 Cập nhật `CustomerEntity` (`apps/api/src/modules/crm/entities/customer.entity.ts`)
    - Thêm tất cả field còn thiếu: email (nullable), phone (nullable), company (nullable), status (CustomerStatus enum), ownerId, createdAt, updatedAt
    - Đổi field `owner` từ String sang `ownerId` String
    - _Yêu cầu: 1.2, 1.6_

  - [x] 4.3 Cập nhật `InvoiceEntity` (`apps/api/src/modules/finance/entities/invoice.entity.ts`)
    - Thêm tất cả field còn thiếu: tax, total, status (InvoiceStatus enum), dueDate (nullable), issuedAt (nullable), customerId (nullable), createdAt, updatedAt
    - _Yêu cầu: 1.3, 1.6_

  - [x] 4.4 Cập nhật `InventoryItemEntity` (`apps/api/src/modules/inventory/entities/inventory-item.entity.ts`)
    - Thêm tất cả field còn thiếu: category (nullable), minStock, unit, price, status (InventoryItemStatus enum), createdAt, updatedAt
    - _Yêu cầu: 1.4, 1.6_

  - [ ]* 4.5 Viết property test cho entity field completeness
    - **Property 1: Entity field completeness**
    - **Validates: Yêu cầu 1.1, 1.2, 1.3, 1.4, 1.6**

- [x] 5. Tạo module mới: Department
  - [x] 5.1 Tạo `DepartmentEntity` (`apps/api/src/modules/department/entities/department.entity.ts`)
    - Định nghĩa ObjectType với field: id, name, parentId (nullable)
    - _Yêu cầu: 3.1_

  - [x] 5.2 Tạo DTO cho Department (`apps/api/src/modules/department/dto/`)
    - `CreateDepartmentInput`: name (required), parentId (nullable)
    - `UpdateDepartmentInput`: name (nullable), parentId (nullable)
    - _Yêu cầu: 3.4_

  - [x] 5.3 Tạo `DepartmentRepository` (`apps/api/src/modules/department/repositories/department.repository.ts`)
    - Implement findAll, findById, create, update, delete qua PrismaService
    - _Yêu cầu: 3.2, 3.3, 3.4_

  - [x] 5.4 Tạo `DepartmentService` (`apps/api/src/modules/department/services/department.service.ts`)
    - Implement business logic, NotFoundException cho findById/delete khi id không tồn tại
    - _Yêu cầu: 3.2, 3.3, 3.4_

  - [x] 5.5 Tạo `DepartmentResolver` (`apps/api/src/modules/department/department.resolver.ts`)
    - Query: `departments` (list), `department(id)` (findById)
    - Mutation: `createDepartment`, `updateDepartment`, `deleteDepartment`
    - _Yêu cầu: 3.2, 3.3, 3.4_

  - [x] 5.6 Tạo `DepartmentModule` và đăng ký trong `AppModule`
    - _Yêu cầu: 3.1_

- [x] 6. Tạo module mới: Sports & Clubs
  - [x] 6.1 Tạo `ClubEntity` và `ClubMemberEntity` (`apps/api/src/modules/sports-clubs/entities/`)
    - ClubEntity: id, name, sport, description (nullable), status (ClubStatus enum), foundedAt (nullable), createdAt, updatedAt
    - ClubMemberEntity: clubId, userId, role (ClubMemberRole enum), joinedAt
    - _Yêu cầu: 2.2, 2.3_

  - [x] 6.2 Tạo DTO cho Sports & Clubs (`apps/api/src/modules/sports-clubs/dto/`)
    - `CreateClubInput`, `UpdateClubInput`
    - `AddClubMemberInput` (clubId, userId, role)
    - _Yêu cầu: 4.5_

  - [x] 6.3 Tạo `SportsClubsRepository` (`apps/api/src/modules/sports-clubs/repositories/sports-clubs.repository.ts`)
    - Implement CRUD cho Club, addMember, removeMember
    - _Yêu cầu: 2.5, 2.6, 4.5_

  - [x] 6.4 Tạo `SportsClubsService` (`apps/api/src/modules/sports-clubs/services/sports-clubs.service.ts`)
    - Business logic, NotFoundException handling
    - _Yêu cầu: 2.5, 2.6, 4.5_

  - [x] 6.5 Tạo `SportsClubsResolver` (`apps/api/src/modules/sports-clubs/sports-clubs.resolver.ts`)
    - Query: `clubs` (list), `club(id)` (findById kèm members)
    - Mutation: `createClub`, `updateClub`, `deleteClub`, `addClubMember`, `removeClubMember`
    - _Yêu cầu: 2.5, 2.6, 4.5_

  - [x] 6.6 Tạo `SportsClubsModule` và đăng ký trong `AppModule`
    - _Yêu cầu: 2.1, 2.4_

- [x] 7. Tạo module mới: Expense Management
  - [x] 7.1 Tạo `ExpenseEntity` và `ExpenseCategoryEntity` (`apps/api/src/modules/expense/entities/`)
    - ExpenseEntity: id, title, amount, description (nullable), date, status (ExpenseStatus enum), categoryId, createdById, clubId (nullable), departmentId (nullable), createdAt, updatedAt
    - ExpenseCategoryEntity: id, name, description (nullable), createdAt, updatedAt
    - _Yêu cầu: 10.6_

  - [x] 7.2 Tạo DTO cho Expense (`apps/api/src/modules/expense/dto/`)
    - `CreateExpenseInput`, `UpdateExpenseInput`
    - `CreateExpenseCategoryInput`, `UpdateExpenseCategoryInput`
    - `ExpenseFilterInput` (clubId, departmentId, categoryId, status — tất cả nullable)
    - _Yêu cầu: 10.7, 10.9_

  - [x] 7.3 Tạo `ExpenseRepository` (`apps/api/src/modules/expense/repositories/expense.repository.ts`)
    - Implement CRUD cho Expense và ExpenseCategory
    - Implement findAll với filter (clubId, departmentId, categoryId, status) và pagination
    - _Yêu cầu: 10.4, 10.5, 10.7, 10.9_

  - [x] 7.4 Tạo `ExpenseService` (`apps/api/src/modules/expense/services/expense.service.ts`)
    - Business logic, NotFoundException handling, filter logic
    - _Yêu cầu: 10.7, 10.9_

  - [x] 7.5 Tạo `ExpenseResolver` (`apps/api/src/modules/expense/expense.resolver.ts`)
    - Query: `expenses` (pagination + filter), `expense(id)`, `expenseCategories`
    - Mutation: `createExpense`, `updateExpense`, `deleteExpense`, `createExpenseCategory`, `updateExpenseCategory`, `deleteExpenseCategory`
    - _Yêu cầu: 10.7, 10.8, 10.9_

  - [x] 7.6 Tạo `ExpenseModule` và đăng ký trong `AppModule`
    - _Yêu cầu: 10.6_

  - [ ]* 7.7 Viết property test cho Expense filtering
    - **Property 9: Expense filtering correctness**
    - **Validates: Yêu cầu 10.4, 10.5, 10.7**

- [x] 8. Checkpoint — Đảm bảo tất cả module mới biên dịch và đăng ký đúng
  - Đảm bảo tất cả tests pass, hỏi user nếu có thắc mắc.

- [x] 9. Triển khai CRUD mutation cho các module hiện có
  - [x] 9.1 Tạo DTO cho HR module (`apps/api/src/modules/hr/dto/`)
    - `CreateEmployeeInput`: code, name, email, phone (nullable), position, hireDate, status (default active), departmentId, managerId (nullable), userId (nullable)
    - `UpdateEmployeeInput`: tất cả field nullable
    - _Yêu cầu: 4.1, 4.6_

  - [x] 9.2 Cập nhật `HrRepository` — thêm findById, create, update, delete
    - _Yêu cầu: 4.1, 5.1_

  - [x] 9.3 Cập nhật `HrService` — thêm business logic cho CRUD, NotFoundException, ConflictException (P2002)
    - _Yêu cầu: 4.1, 4.7, 4.8, 5.1, 5.5_

  - [x] 9.4 Cập nhật `HrResolver` — thêm query `employee(id)`, mutation create/update/delete
    - _Yêu cầu: 4.1, 5.1_

  - [x] 9.5 Tạo DTO cho CRM module (`apps/api/src/modules/crm/dto/`)
    - `CreateCustomerInput`, `UpdateCustomerInput`
    - _Yêu cầu: 4.2, 4.6_

  - [x] 9.6 Cập nhật `CrmRepository`, `CrmService`, `CrmResolver` — thêm findById, CRUD mutation
    - _Yêu cầu: 4.2, 5.2_

  - [x] 9.7 Tạo DTO cho Finance module (`apps/api/src/modules/finance/dto/`)
    - `CreateInvoiceInput`, `UpdateInvoiceInput`
    - _Yêu cầu: 4.3, 4.6_

  - [x] 9.8 Cập nhật `FinanceRepository`, `FinanceService`, `FinanceResolver` — thêm findById, CRUD mutation
    - _Yêu cầu: 4.3, 5.3_

  - [x] 9.9 Tạo DTO cho Inventory module (`apps/api/src/modules/inventory/dto/`)
    - `CreateInventoryItemInput`, `UpdateInventoryItemInput`
    - _Yêu cầu: 4.4, 4.6_

  - [x] 9.10 Cập nhật `InventoryRepository`, `InventoryService`, `InventoryResolver` — thêm findById, CRUD mutation
    - _Yêu cầu: 4.4, 5.4_

  - [ ]* 9.11 Viết property test cho CRUD round-trip
    - **Property 2: CRUD round-trip**
    - **Validates: Yêu cầu 3.4, 4.1, 4.2, 4.3, 4.4, 4.5, 10.9**

  - [ ]* 9.12 Viết property test cho FindById returns correct record
    - **Property 3: FindById returns correct record**
    - **Validates: Yêu cầu 2.6, 3.3, 5.1, 5.2, 5.3, 5.4**

  - [ ]* 9.13 Viết property test cho NotFoundException
    - **Property 4: FindById and Delete with non-existent ID throws NotFoundException**
    - **Validates: Yêu cầu 4.7, 5.5**

- [x] 10. Tích hợp Pagination cho tất cả query danh sách
  - [x] 10.1 Tạo PaginatedResponse type cho mỗi entity
    - `PaginatedEmployee`, `PaginatedCustomer`, `PaginatedInvoice`, `PaginatedInventoryItem`, `PaginatedClub`, `PaginatedDepartment`, `PaginatedExpense`
    - Sử dụng `Paginated<T>` factory từ shared pagination types
    - _Yêu cầu: 6.1_

  - [x] 10.2 Cập nhật tất cả Repository — thêm pagination logic (skip, take, count)
    - Sử dụng `toPagination()` từ `pagination.util.ts` hiện có
    - Clamp page < 1 → 1, limit < 1 → 1, limit > 100 → 100
    - _Yêu cầu: 6.2, 6.3, 6.4_

  - [x] 10.3 Cập nhật tất cả Resolver — đổi query list sang trả về PaginatedResponse, nhận `PaginationInput` optional
    - Default: page=1, limit=20 khi không truyền pagination
    - _Yêu cầu: 6.2, 6.3, 6.5_

  - [ ]* 10.4 Viết property test cho pagination metadata consistency
    - **Property 5: Pagination metadata consistency**
    - **Validates: Yêu cầu 6.2, 6.4, 6.5**

- [x] 11. Triển khai Relationship Resolution
  - [x] 11.1 Thêm `@ResolveField()` cho HR module
    - Employee → Department (DepartmentEntity, nullable)
    - Employee → Manager (EmployeeEntity, nullable)
    - Employee → Reports ([EmployeeEntity])
    - _Yêu cầu: 7.1, 7.2, 7.3_

  - [x] 11.2 Thêm `@ResolveField()` cho CRM module
    - Customer → Owner (UserEntity — cần tạo UserEntity nếu chưa có)
    - Customer → Invoices ([InvoiceEntity])
    - _Yêu cầu: 7.4, 7.5_

  - [x] 11.3 Thêm `@ResolveField()` cho Finance module
    - Invoice → Customer (CustomerEntity, nullable)
    - _Yêu cầu: 7.6_

  - [x] 11.4 Thêm `@ResolveField()` cho Sports & Clubs module
    - Club → Members ([ClubMemberEntity])
    - Club → Expenses ([ExpenseEntity])
    - ClubMember → User (UserEntity)
    - ClubMember → Club (ClubEntity)
    - _Yêu cầu: 7.7, 10.11_

  - [x] 11.5 Thêm `@ResolveField()` cho Department module
    - Department → Parent (DepartmentEntity, nullable)
    - Department → Children ([DepartmentEntity])
    - Department → Employees ([EmployeeEntity])
    - _Yêu cầu: 7.8_

  - [x] 11.6 Thêm `@ResolveField()` cho Expense module
    - Expense → Category (ExpenseCategoryEntity)
    - Expense → CreatedBy (UserEntity)
    - Expense → Club (ClubEntity, nullable)
    - Expense → Department (DepartmentEntity, nullable)
    - _Yêu cầu: 10.10_

  - [ ]* 11.7 Viết property test cho relationship resolution
    - **Property 6: Relationship resolution correctness**
    - **Validates: Yêu cầu 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 7.7, 7.8, 10.10, 10.11**

- [x] 12. Checkpoint — Đảm bảo CRUD, pagination, và relationship resolution hoạt động đúng
  - Đảm bảo tất cả tests pass, hỏi user nếu có thắc mắc.

- [x] 13. Triển khai Authentication và Authorization (CASL)
  - [x] 13.1 Cập nhật `JwtAuthGuard` hỗ trợ GraphQL context (`apps/api/src/shared/auth/jwt-auth.guard.ts`)
    - Sử dụng `GqlExecutionContext.create(context)` để lấy request từ GraphQL context
    - Validate JWT token, attach user vào `req.user`
    - _Yêu cầu: 8.9, 8.10_

  - [x] 13.2 Cập nhật `CurrentUser` decorator hỗ trợ GraphQL context (`apps/api/src/shared/auth/current-user.decorator.ts`)
    - Sử dụng `GqlExecutionContext.create(ctx)` để lấy user
    - _Yêu cầu: 8.10_

  - [x] 13.3 Tạo `CaslAbilityGuard` (`apps/api/src/shared/permissions/casl-ability.guard.ts`)
    - Đọc metadata từ `@CheckAbility()` decorator
    - Lấy user từ GraphQL context, gọi `defineAbilityFor(user)`
    - Kiểm tra `ability.can(action, subject)`, throw ForbiddenException nếu không đủ quyền
    - _Yêu cầu: 8.7_

  - [x] 13.4 Tạo `@CheckAbility()` decorator (`apps/api/src/shared/permissions/check-ability.decorator.ts`)
    - Sử dụng `SetMetadata` để gắn action + subject lên handler
    - _Yêu cầu: 8.8_

  - [x] 13.5 Áp dụng `@UseGuards(JwtAuthGuard, CaslAbilityGuard)` và `@CheckAbility()` cho tất cả resolver
    - HR, CRM, Finance, Inventory, Sports & Clubs, Department, Expense
    - Mỗi query/mutation gắn `@CheckAbility({ action, subject })` phù hợp
    - _Yêu cầu: 8.9_

  - [x] 13.6 Tạo `AbilitiesResolver` với query `myAbilities` (`apps/api/src/shared/permissions/abilities.resolver.ts`)
    - Trả về `ability.rules` dạng JSON cho FE
    - Đăng ký trong một shared module hoặc AppModule
    - _Yêu cầu: 9.3_

  - [ ]* 13.7 Viết property test cho myAbilities round-trip
    - **Property 8: myAbilities query round-trip**
    - **Validates: Yêu cầu 9.3**

- [x] 14. Tích hợp CASL trên Frontend
  - [x] 14.1 Cập nhật `libs/permissions/index.ts` export đầy đủ cho cả FE và BE
    - Export `defineAbilityFor`, `AppAction`, `AppSubject`, `AppAbility`
    - Đảm bảo không import server-only code trong FE bundle
    - _Yêu cầu: 9.1, 9.4_

  - [x] 14.2 Cập nhật FE sử dụng `@casl/react` với `Can` component
    - Cài đặt `@casl/react` package
    - Tạo AbilityContext provider, fetch `myAbilities` từ API
    - Sử dụng `<Can I="create" a="Employee">` để ẩn/hiện UI elements
    - _Yêu cầu: 9.2, 9.5_

- [x] 15. Final checkpoint — Đảm bảo toàn bộ hệ thống hoạt động end-to-end
  - Đảm bảo tất cả tests pass, hỏi user nếu có thắc mắc.

## Ghi chú

- Các task đánh dấu `*` là optional, có thể bỏ qua để ra MVP nhanh hơn
- Mỗi task tham chiếu yêu cầu cụ thể để đảm bảo traceability
- Checkpoint giúp kiểm tra tiến độ tại các mốc quan trọng
- Property tests kiểm tra tính đúng đắn phổ quát, unit tests kiểm tra ví dụ cụ thể và edge case
- Shared enums, types, constants được tạo TRƯỚC để các module tái sử dụng
