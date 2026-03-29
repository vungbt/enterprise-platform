'use client';

import {
  Button,
  Tag,
  toastSuccess,
  toastError,
  toastWarning,
  toastInfo,
  ModalConfirm,
  Tabs,
} from '@enterprise/ui/components';
import { toast } from 'sonner';
import { useState } from 'react';

const tabItems = [
  { value: 0, label: 'Tổng quan', content: <p className="text-14 text-neutral-text-primary pt-4">Nội dung tổng quan...</p> },
  { value: 1, label: 'Chi tiết',  content: <p className="text-14 text-neutral-text-primary pt-4">Nội dung chi tiết...</p> },
  { value: 2, label: 'Lịch sử',  content: <p className="text-14 text-neutral-text-primary pt-4">Lịch sử hoạt động...</p> },
  { value: 3, label: 'Tắt',      disabled: true, content: null },
];

export function DemoFeedback() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      {/* Tags */}
      <div>
        <p className="text-12 text-neutral-text-secondary mb-2 uppercase tracking-wide">Tags</p>
        <div className="flex flex-wrap gap-2">
          <Tag content="Default" />
          <Tag content="Primary"  color="#0079f6" />
          <Tag content="Success"  color="#52c41a" />
          <Tag content="Error"    color="#ff4d4f" />
          <Tag content="Pending"  color="#faad14" />
          <Tag content="Closeable" onClose={() => {}} />
          <Tag content="Outline"  type="outline" color="#0079f6" />
        </div>
      </div>

      {/* Toast */}
      <div>
        <p className="text-12 text-neutral-text-secondary mb-2 uppercase tracking-wide">Toast notifications</p>
        <div className="flex flex-wrap gap-2">
          <Button size="small" color="success" variant="outline" onClick={() => toastSuccess('Lưu thành công!')}>
            Success
          </Button>
          <Button size="small" color="error" variant="outline" onClick={() => toastError('Có lỗi xảy ra!')}>
            Error
          </Button>
          <Button size="small" color="pending" variant="outline" onClick={() => toastWarning('Cảnh báo nhé!')}>
            Warning
          </Button>
          <Button size="small" variant="outline" onClick={() => toastInfo('Thông tin cập nhật')}>
            Info
          </Button>
          <Button size="small" color="neutral" variant="outline" onClick={() => toast.loading('Đang xử lý...')}>
            Loading
          </Button>
        </div>
      </div>

      {/* Modal */}
      <div>
        <p className="text-12 text-neutral-text-secondary mb-2 uppercase tracking-wide">Modal</p>
        <Button variant="outline" onClick={() => setModalOpen(true)}>
          Mở Modal xác nhận
        </Button>
        <ModalConfirm
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          message="Bạn có chắc muốn xoá bản ghi này? Hành động này không thể hoàn tác."
          submitLabel="Xoá"
          submitColor="error"
          cancelLabel="Huỷ"
          onSubmit={() => {
            toastSuccess('Đã xoá!');
            setModalOpen(false);
          }}
          onCancel={() => setModalOpen(false)}
        />
      </div>

      {/* Tabs line */}
      <div>
        <p className="text-12 text-neutral-text-secondary mb-2 uppercase tracking-wide">Tabs (line)</p>
        <Tabs tabs={tabItems} />
      </div>

      {/* Tabs card */}
      <div>
        <p className="text-12 text-neutral-text-secondary mb-2 uppercase tracking-wide">Tabs (card)</p>
        <Tabs tabs={tabItems.slice(0, 3)} variant="card" />
      </div>
    </div>
  );
}
