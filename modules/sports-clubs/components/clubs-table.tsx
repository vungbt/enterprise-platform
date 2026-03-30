'use client';

import { Button, Table, Tag } from '@enterprise/ui/components';
import { Pagination } from '@enterprise/ui/components/pagination';
import { usePageFooter } from '@enterprise/ui/layout/footer-context';
import type { ColumnDef } from '@tanstack/react-table';
import { useMemo, useState } from 'react';
import type { ClubDto } from '../api/sports-clubs.api';

type ClubsTableProps = {
  clubs: ClubDto[];
};

const LIMIT = 10;

const statusConfig: Record<ClubDto['status'], { label: string; color: string }> = {
  active: { label: 'Active', color: '#52c41a' },
  inactive: { label: 'Inactive', color: '#ff4d4f' },
};

const columns: ColumnDef<ClubDto>[] = [
  { header: '#', accessorKey: 'id', size: 80 },
  { header: 'Club Name', accessorKey: 'name', enableSorting: true },
  { header: 'Sport', accessorKey: 'sport', enableSorting: true },
  { header: 'Captain', accessorKey: 'captain' },
  { header: 'Members', accessorKey: 'members', size: 100 },
  {
    header: 'Fund Balance',
    accessorKey: 'fundBalance',
    cell: ({ getValue }) => {
      const val = getValue() as number;
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(val);
      return <span className={val === 0 ? 'font-semibold text-error' : ''}>{formatted}</span>;
    },
  },
  {
    header: 'Status',
    accessorKey: 'status',
    cell: ({ getValue }) => {
      const val = getValue() as ClubDto['status'];
      const cfg = statusConfig[val];
      return <Tag content={cfg.label} color={cfg.color} />;
    },
  },
  {
    header: 'Actions',
    id: 'actions',
    cell: () => (
      <div className="flex gap-1">
        <Button size="small" variant="ghost" icon="pencil-square" />
        <Button size="small" variant="ghost" color="error" icon="trash" />
      </div>
    ),
  },
];

export function ClubsTable({ clubs }: ClubsTableProps) {
  const [page, setPage] = useState(1);
  const [selectedKeys, setSelectedKeys] = useState<React.Key[]>([]);

  const total = clubs.length;
  const pageCount = Math.ceil(total / LIMIT);
  const pageData = useMemo(() => clubs.slice((page - 1) * LIMIT, page * LIMIT), [clubs, page]);

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
            <strong>{selectedKeys.length}</strong> row{selectedKeys.length !== 1 ? 's' : ''}{' '}
            selected
          </span>
          <Button
            size="small"
            color="error"
            variant="outline"
            icon="trash"
            onClick={() => setSelectedKeys([])}
          >
            Delete selected
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
