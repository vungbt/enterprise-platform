'use client';

import { Button, Table, Tag } from '@enterprise/ui/components';
import { Pagination } from '@enterprise/ui/components/pagination';
import { usePageFooter } from '@enterprise/ui/layout/footer-context';
import type { ColumnDef } from '@tanstack/react-table';
import { useMemo, useState } from 'react';
import type { EmployeeDto } from '../api/employee.api';

type EmployeeTableProps = {
  employees: EmployeeDto[];
};

const LIMIT = 10;

const statusConfig: Record<string, { label: string; color: string }> = {
  active: { label: 'Hoạt động', color: '#52c41a' },
  inactive: { label: 'Không hoạt động', color: '#ff4d4f' },
};

const columns: ColumnDef<EmployeeDto>[] = [
  { header: '#', accessorKey: 'id', size: 80 },
  { header: 'Họ tên', accessorKey: 'name', enableSorting: true },
  { header: 'Chức vụ', accessorKey: 'position', enableSorting: true },
  { header: 'Phòng ban', accessorKey: 'department', enableSorting: true },
  {
    header: 'Trạng thái',
    accessorKey: 'status',
    cell: ({ getValue }) => {
      const val = (getValue() as string) ?? 'active';
      const cfg = statusConfig[val] ?? statusConfig?.active;
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

export function EmployeeTable({ employees }: EmployeeTableProps) {
  const [page, setPage] = useState(1);
  const [selectedKeys, setSelectedKeys] = useState<React.Key[]>([]);

  const total = employees.length;
  const pageCount = Math.ceil(total / LIMIT);
  const pageData = useMemo(
    () => employees.slice((page - 1) * LIMIT, page * LIMIT),
    [employees, page],
  );

  usePageFooter(
    pageCount > 1 ? (
      <Pagination
        pageCount={pageCount}
        page={page}
        total={total}
        limit={LIMIT}
        onChangePage={setPage}
      />
    ) : null,
  );

  return (
    <>
      {selectedKeys.length > 0 && (
        <div className="mb-3 flex items-center gap-2">
          <span className="text-14 text-neutral-text-secondary">
            Đã chọn <strong>{selectedKeys.length}</strong> hàng
          </span>
          <Button
            size="small"
            color="error"
            variant="outline"
            icon="trash"
            onClick={() => setSelectedKeys([])}
          >
            Xoá đã chọn
          </Button>
        </div>
      )}
      <Table
        columns={columns}
        data={pageData}
        rowKey="id"
        rowSelection={{
          type: 'checkbox',
          selectedRowKeys: selectedKeys,
          onChange: (keys) => setSelectedKeys(keys),
        }}
      />
    </>
  );
}
