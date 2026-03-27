'use client';

import { Table, Button, Tag } from '@enterprise/ui/components';
import { ColumnDef } from '@tanstack/react-table';
import { useState } from 'react';

type Employee = {
  id: number;
  name: string;
  email: string;
  department: string;
  status: 'active' | 'inactive' | 'pending';
};

const data: Employee[] = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: `Nguyễn Văn ${String.fromCharCode(65 + i)}`,
  email: `user${i + 1}@company.com`,
  department: ['HR', 'CRM', 'Finance', 'Inventory'][i % 4],
  status: (['active', 'inactive', 'pending'] as const)[i % 3],
}));

const statusConfig = {
  active:   { label: 'Hoạt động', color: '#52c41a' },
  inactive: { label: 'Không hoạt động', color: '#ff4d4f' },
  pending:  { label: 'Chờ duyệt', color: '#faad14' },
};

const columns: ColumnDef<Employee>[] = [
  { header: '#', accessorKey: 'id', size: 60 },
  { header: 'Họ tên', accessorKey: 'name', enableSorting: true },
  { header: 'Email', accessorKey: 'email' },
  { header: 'Phòng ban', accessorKey: 'department', enableSorting: true },
  {
    header: 'Trạng thái',
    accessorKey: 'status',
    cell: ({ getValue }) => {
      const val = getValue() as Employee['status'];
      const cfg = statusConfig[val];
      return <Tag content={cfg.label} color={cfg.color} />;
    },
  },
  {
    header: 'Hành động',
    id: 'actions',
    cell: () => (
      <div className="flex gap-1">
        <Button size="small" variant="ghost" icon="pencil-square" />
        <Button size="small" variant="ghost" color="error" icon="trash" />
      </div>
    ),
  },
];

export function DemoTable() {
  const [page, setPage] = useState(1);
  const [selectedKeys, setSelectedKeys] = useState<React.Key[]>([]);
  const limit = 5;
  const total = data.length;
  const pageData = data.slice((page - 1) * limit, page * limit);

  return (
    <div className="space-y-3">
      {selectedKeys.length > 0 && (
        <div className="flex items-center gap-2">
          <span className="text-14 text-neutral-text-secondary">
            Đã chọn <strong>{selectedKeys.length}</strong> hàng
          </span>
          <Button size="small" color="error" variant="outline" icon="trash" onClick={() => setSelectedKeys([])}>
            Xoá đã chọn
          </Button>
        </div>
      )}
      <Table
        columns={columns}
        data={pageData}
        rowKey="id"
        pagination={{
          total,
          page,
          limit,
          pageCount: Math.ceil(total / limit),
          onChangePage: setPage,
        }}
        rowSelection={{
          type: 'checkbox',
          selectedRowKeys: selectedKeys,
          onChange: keys => setSelectedKeys(keys),
        }}
      />
    </div>
  );
}
