# Tài liệu Yêu cầu — Thiết kế BE Schema

## Giới thiệu

Thiết kế và triển khai backend schema hoàn chỉnh cho hệ thống Enterprise ERP Dashboard, đảm bảo đồng bộ với 5 module frontend đã đăng ký (HR, CRM, Finance, Inventory, Sports & Clubs). Hiện tại backend đang thiếu nhiều thành phần: GraphQL entity chỉ expose một phần nhỏ field từ Prisma model, thiếu module Sports & Clubs, không có mutation/CRUD, không có pagination, không áp dụng auth guard, thiếu relationship resolution giữa các entity, và Finance module chưa có quản lý chi tiêu (Expense). Dự án cần được nâng cấp toàn diện để backend schema phản ánh đúng data model và sẵn sàng cho production.

## Thuật ngữ

- **Backend_Schema**: Tổng thể kiến trúc dữ liệu phía backend bao gồm Prisma model, GraphQL entity, resolver, service, và repository
- **GraphQL_Entity**: Class TypeScript được decorate bằng `@ObjectType()` để định nghĩa schema GraphQL trả về cho client
- **Prisma_Model**: Model được định nghĩa trong `schema.prisma`, ánh xạ trực tiếp tới bảng PostgreSQL
- **Resolver**: Class NestJS xử lý GraphQL query và mutation, đóng vai trò controller trong kiến trúc GraphQL
- **Service**: Class NestJS chứa business logic, được gọi bởi Resolver
- **Repository**: Class NestJS chịu trách nhiệm truy vấn database thông qua PrismaService
- **Module_FE**: Module frontend đã đăng ký trong `module-registry/modules.ts` (HR, CRM, Finance, Inventory, Sports & Clubs)
- **CRUD**: Tập hợp các thao tác Create, Read, Update, Delete trên một entity
- **Pagination**: Cơ chế phân trang dữ liệu trả về, sử dụng `PaginationUtil` có sẵn
- **Auth_Guard**: Middleware bảo vệ endpoint, bao gồm `JwtAuthGuard` (xác thực) và `RolesGuard` (phân quyền)
- **Relationship_Resolution**: Cơ chế resolve quan hệ giữa các GraphQL entity (ví dụ: Employee → Department, Invoice → Customer)
- **Input_DTO**: Class TypeScript được decorate bằng `@InputType()` để định nghĩa dữ liệu đầu vào cho mutation
- **Expense**: Khoản chi tiêu của công ty hoặc CLB, bao gồm chi phí hành chính, sự kiện, hoạt động CLB, v.v.
- **ExpenseCategory**: Danh mục phân loại chi tiêu (ví dụ: đám cưới, ma chay, mua sắm văn phòng, hoạt động CLB)

## Yêu cầu

### Yêu cầu 1: Mở rộng GraphQL Entity đầy đủ field từ Prisma Model

**User Story:** Là một developer, tôi muốn GraphQL entity phản ánh đầy đủ các field từ Prisma model, để frontend có thể truy vấn mọi thông tin cần thiết mà không bị giới hạn.

#### Tiêu chí chấp nhận

1. THE Backend_Schema SHALL expose tất cả các field của Prisma_Model `Employee` trong GraphQL_Entity `EmployeeEntity`, bao gồm: id, code, name, email, phone, position, hireDate, status, departmentId, managerId, userId, createdAt, updatedAt
2. THE Backend_Schema SHALL expose tất cả các field của Prisma_Model `Customer` trong GraphQL_Entity `CustomerEntity`, bao gồm: id, name, email, phone, company, status, ownerId, createdAt, updatedAt
3. THE Backend_Schema SHALL expose tất cả các field của Prisma_Model `Invoice` trong GraphQL_Entity `InvoiceEntity`, bao gồm: id, code, amount, tax, total, status, dueDate, issuedAt, customerId, createdAt, updatedAt
4. THE Backend_Schema SHALL expose tất cả các field của Prisma_Model `InventoryItem` trong GraphQL_Entity `InventoryItemEntity`, bao gồm: id, sku, name, category, stock, minStock, unit, price, status, createdAt, updatedAt
5. THE Backend_Schema SHALL sử dụng `registerEnumType` để đăng ký các enum `EmployeeStatus`, `CustomerStatus`, `InvoiceStatus`, `InventoryItemStatus`, `ClubStatus`, `ClubMemberRole` trong GraphQL schema thay vì dùng kiểu `String`
6. THE Backend_Schema SHALL đánh dấu các field nullable trong GraphQL_Entity tương ứng với field optional trong Prisma_Model (ví dụ: phone, managerId, category)

### Yêu cầu 2: Tạo module Sports & Clubs hoàn chỉnh trên backend

**User Story:** Là một developer, tôi muốn backend có module Sports & Clubs tương ứng với module frontend đã đăng ký, để hệ thống đồng bộ và module này hoạt động được end-to-end.

#### Tiêu chí chấp nhận

1. THE Backend_Schema SHALL cung cấp module `SportsClubsModule` với đầy đủ cấu trúc: resolver, service, repository, và entity
2. THE Backend_Schema SHALL cung cấp GraphQL_Entity `ClubEntity` với tất cả field từ Prisma_Model `Club`: id, name, sport, description, status, foundedAt, createdAt, updatedAt
3. THE Backend_Schema SHALL cung cấp GraphQL_Entity `ClubMemberEntity` với tất cả field từ Prisma_Model `ClubMember`: clubId, userId, role, joinedAt
4. THE Backend_Schema SHALL đăng ký `SportsClubsModule` trong `AppModule` để GraphQL schema bao gồm các query và mutation của Sports & Clubs
5. WHEN một request query `clubs` được gửi, THE Resolver SHALL trả về danh sách Club từ database
6. WHEN một request query `club` với tham số `id` được gửi, THE Resolver SHALL trả về thông tin chi tiết của Club đó kèm danh sách thành viên

### Yêu cầu 3: Tạo module Department trên backend

**User Story:** Là một developer, tôi muốn backend có module Department riêng biệt, để quản lý phòng ban độc lập và hỗ trợ relationship resolution từ Employee sang Department.

#### Tiêu chí chấp nhận

1. THE Backend_Schema SHALL cung cấp GraphQL_Entity `DepartmentEntity` với tất cả field từ Prisma_Model `Department`: id, name, parentId
2. THE Backend_Schema SHALL cung cấp query `departments` trả về danh sách tất cả phòng ban
3. THE Backend_Schema SHALL cung cấp query `department` với tham số `id` trả về thông tin chi tiết một phòng ban
4. THE Backend_Schema SHALL cung cấp mutation tạo, cập nhật, và xóa Department

### Yêu cầu 4: Triển khai CRUD mutation cho tất cả module

**User Story:** Là một developer, tôi muốn backend hỗ trợ đầy đủ các thao tác CRUD qua GraphQL mutation, để frontend có thể tạo, sửa, xóa dữ liệu thay vì chỉ đọc.

#### Tiêu chí chấp nhận

1. THE Backend_Schema SHALL cung cấp mutation `createEmployee`, `updateEmployee`, `deleteEmployee` trong HR module
2. THE Backend_Schema SHALL cung cấp mutation `createCustomer`, `updateCustomer`, `deleteCustomer` trong CRM module
3. THE Backend_Schema SHALL cung cấp mutation `createInvoice`, `updateInvoice`, `deleteInvoice` trong Finance module
4. THE Backend_Schema SHALL cung cấp mutation `createInventoryItem`, `updateInventoryItem`, `deleteInventoryItem` trong Inventory module
5. THE Backend_Schema SHALL cung cấp mutation `createClub`, `updateClub`, `deleteClub`, `addClubMember`, `removeClubMember` trong Sports & Clubs module
6. THE Backend_Schema SHALL định nghĩa Input_DTO riêng cho mỗi mutation (ví dụ: `CreateEmployeeInput`, `UpdateEmployeeInput`) với validation phù hợp
7. IF một mutation delete được gọi với id không tồn tại, THEN THE Service SHALL trả về lỗi `NotFoundException` với thông báo rõ ràng
8. IF một mutation create hoặc update vi phạm ràng buộc unique (ví dụ: email trùng, code trùng), THEN THE Service SHALL trả về lỗi mô tả cụ thể field bị trùng

### Yêu cầu 5: Triển khai query findById cho tất cả entity

**User Story:** Là một developer, tôi muốn backend hỗ trợ query lấy chi tiết một record theo id, để frontend có thể hiển thị trang detail/edit.

#### Tiêu chí chấp nhận

1. THE Backend_Schema SHALL cung cấp query `employee(id: String)` trả về chi tiết một Employee kèm relationship
2. THE Backend_Schema SHALL cung cấp query `customer(id: String)` trả về chi tiết một Customer kèm relationship
3. THE Backend_Schema SHALL cung cấp query `invoice(id: String)` trả về chi tiết một Invoice kèm relationship
4. THE Backend_Schema SHALL cung cấp query `inventoryItem(id: String)` trả về chi tiết một InventoryItem
5. IF query findById được gọi với id không tồn tại, THEN THE Service SHALL trả về lỗi `NotFoundException`

### Yêu cầu 6: Triển khai Pagination cho tất cả query danh sách

**User Story:** Là một developer, tôi muốn tất cả query danh sách hỗ trợ phân trang, để frontend có thể hiển thị dữ liệu theo trang và tránh tải toàn bộ dữ liệu cùng lúc.

#### Tiêu chí chấp nhận

1. THE Backend_Schema SHALL định nghĩa `PaginationInput` (page, limit) và `PaginatedResponse` generic type (items, total, page, limit, totalPages) dùng chung cho tất cả module
2. WHEN query danh sách được gọi với tham số pagination, THE Resolver SHALL trả về kết quả phân trang sử dụng `PaginationUtil` có sẵn
3. WHEN query danh sách được gọi không có tham số pagination, THE Resolver SHALL sử dụng giá trị mặc định page=1, limit=20
4. THE Backend_Schema SHALL giới hạn giá trị limit tối đa là 100 để tránh query quá lớn
5. THE Backend_Schema SHALL trả về metadata phân trang bao gồm: tổng số record, trang hiện tại, số record mỗi trang, tổng số trang

### Yêu cầu 7: Triển khai Relationship Resolution trong GraphQL

**User Story:** Là một developer, tôi muốn GraphQL tự động resolve các quan hệ giữa entity, để frontend có thể query nested data trong một request duy nhất.

#### Tiêu chí chấp nhận

1. THE Backend_Schema SHALL resolve quan hệ Employee → Department (trả về object Department thay vì chỉ departmentId)
2. THE Backend_Schema SHALL resolve quan hệ Employee → Manager (trả về object Employee của manager, nullable)
3. THE Backend_Schema SHALL resolve quan hệ Employee → Reports (trả về danh sách Employee báo cáo trực tiếp)
4. THE Backend_Schema SHALL resolve quan hệ Customer → Owner (trả về object User)
5. THE Backend_Schema SHALL resolve quan hệ Customer → Invoices (trả về danh sách Invoice của customer)
6. THE Backend_Schema SHALL resolve quan hệ Invoice → Customer (trả về object Customer, nullable)
7. THE Backend_Schema SHALL resolve quan hệ Club → Members (trả về danh sách ClubMember kèm thông tin User)
8. THE Backend_Schema SHALL resolve quan hệ Department → Parent và Department → Children (cây phòng ban)
9. THE Backend_Schema SHALL sử dụng `@ResolveField()` decorator trong Resolver để implement relationship resolution, tránh N+1 query bằng cách sử dụng DataLoader hoặc Prisma include

### Yêu cầu 8: Áp dụng Authentication và Authorization với CASL

**User Story:** Là một developer, tôi muốn tất cả GraphQL resolver được bảo vệ bởi auth guard và CASL ability, để chỉ user đã đăng nhập và có quyền phù hợp mới truy cập được dữ liệu — đồng thời dùng chung logic phân quyền giữa FE và BE.

#### Tiêu chí chấp nhận

1. THE Backend_Schema SHALL cài đặt và sử dụng thư viện `@casl/ability` để định nghĩa ability (quyền) cho user dựa trên role
2. THE Backend_Schema SHALL tạo shared CASL ability factory trong `libs/permissions/` (hoặc shared lib) để cả FE và BE dùng chung logic define ability
3. THE Backend_Schema SHALL định nghĩa các action: `read`, `create`, `update`, `delete`, `manage` và các subject tương ứng với entity: `Employee`, `Customer`, `Invoice`, `InventoryItem`, `Club`, `Expense`, `ExpenseCategory`, `Department`
4. WHILE user có role `admin`, THE CASL ability SHALL grant `manage` trên `all` (toàn quyền)
5. WHILE user có role `manager`, THE CASL ability SHALL grant `read`, `create`, `update` trên tất cả subject, nhưng không grant `delete`
6. WHILE user có role `staff`, THE CASL ability SHALL chỉ grant `read` trên tất cả subject
7. THE Backend_Schema SHALL tạo `CaslAbilityGuard` (NestJS guard) sử dụng CASL ability để kiểm tra quyền trước khi thực thi resolver, thay thế `RolesGuard` hiện tại
8. THE Backend_Schema SHALL tạo decorator `@CheckAbility()` (ví dụ: `@CheckAbility({ action: 'create', subject: 'Employee' })`) để gắn lên từng resolver method
9. THE Backend_Schema SHALL áp dụng `JwtAuthGuard` cho tất cả resolver thông qua `@UseGuards()` decorator
10. THE Backend_Schema SHALL cập nhật `JwtAuthGuard`, `CurrentUser` decorator để hỗ trợ GraphQL context (hiện tại chỉ hỗ trợ HTTP context)

### Yêu cầu 9: Đồng bộ CASL Permission giữa Frontend và Backend

**User Story:** Là một developer, tôi muốn FE và BE dùng chung CASL ability definition, để quyền truy cập được kiểm soát nhất quán ở cả hai phía mà không cần duplicate logic.

#### Tiêu chí chấp nhận

1. THE Backend_Schema SHALL tạo shared lib `libs/permissions/` export function `defineAbilityFor(user)` trả về CASL `Ability` instance — dùng được ở cả FE (React) và BE (NestJS)
2. THE Backend_Schema SHALL cập nhật FE sử dụng `@casl/react` với `Can` component để kiểm tra quyền trên UI (ẩn/hiện button, menu, v.v.)
3. THE Backend_Schema SHALL cung cấp query `myAbilities` trả về danh sách ability rules (JSON) của user hiện tại, để FE có thể khởi tạo CASL ability từ server response
4. THE Backend_Schema SHALL bổ sung subject cho tất cả module bao gồm: Employee, Department, Customer, Invoice, InventoryItem, Club, ClubMember, Expense, ExpenseCategory
5. THE Backend_Schema SHALL hỗ trợ field-level permission trong CASL (ví dụ: staff chỉ được read Employee nhưng không thấy field salary nếu có trong tương lai)

### Yêu cầu 10: Bổ sung Prisma Model và GraphQL cho quản lý chi tiêu (Expense Management)

**User Story:** Là một developer, tôi muốn hệ thống có khả năng quản lý chi tiêu linh hoạt ở cả cấp công ty và cấp CLB, để theo dõi các khoản chi như đám cưới, ma chay, mua sắm văn phòng, hoạt động CLB, v.v.

#### Tiêu chí chấp nhận

1. THE Backend_Schema SHALL bổ sung Prisma_Model `ExpenseCategory` với các field: id, name (unique), description (nullable), createdAt, updatedAt — dùng để phân loại chi tiêu (ví dụ: "Đám cưới", "Ma chay", "Văn phòng phẩm", "Hoạt động CLB")
2. THE Backend_Schema SHALL bổ sung Prisma_Model `Expense` với các field: id, title, amount (Float), description (nullable), date (DateTime), categoryId (FK → ExpenseCategory), createdById (FK → User), clubId (nullable, FK → Club), departmentId (nullable, FK → Department), createdAt, updatedAt
3. THE Backend_Schema SHALL bổ sung enum `ExpenseStatus` với các giá trị: pending, approved, rejected, reimbursed — và thêm field status vào model Expense
4. WHEN field `clubId` của Expense có giá trị, THEN khoản chi đó thuộc về CLB tương ứng; WHEN `clubId` là null, THEN khoản chi thuộc cấp công ty
5. WHEN field `departmentId` của Expense có giá trị, THEN khoản chi được gán cho phòng ban tương ứng
6. THE Backend_Schema SHALL cung cấp GraphQL_Entity `ExpenseEntity` và `ExpenseCategoryEntity` với đầy đủ field
7. THE Backend_Schema SHALL cung cấp query `expenses` (có pagination và filter theo clubId, categoryId, status) và query `expense(id)` cho chi tiết
8. THE Backend_Schema SHALL cung cấp query `expenseCategories` trả về danh sách danh mục chi tiêu
9. THE Backend_Schema SHALL cung cấp mutation `createExpense`, `updateExpense`, `deleteExpense`, `createExpenseCategory`, `updateExpenseCategory`, `deleteExpenseCategory`
10. THE Backend_Schema SHALL resolve quan hệ Expense → Category, Expense → CreatedBy (User), Expense → Club (nullable), Expense → Department (nullable)
11. THE Backend_Schema SHALL resolve quan hệ Club → Expenses (danh sách chi tiêu của CLB)
