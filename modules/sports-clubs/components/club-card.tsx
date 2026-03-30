'use client';

import {
  Button,
  IconButton,
  Menu,
  ModalConfirm,
  Tag,
  toastError,
  toastSuccess,
} from '@enterprise/ui/components';
import { RenderIcon } from '@enterprise/ui/components/icons';
import { formatCurrency, formatDate, getInitials } from '@enterprise/ui/lib/format';
import { cn } from '@enterprise/ui/lib/utils';
import { useTheme } from '@enterprise/ui/theme/theme-provider';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import type { Club } from '../api/sports-clubs.api';
import { deleteClubApi } from '../api/sports-clubs.api';
import { EditClubModal } from './club-modal';

type ClubCardProps = {
  club: Club;
};

export function ClubCard({ club }: ClubCardProps) {
  const { resolvedTokens } = useTheme();

  const isZeroBalance = club.fundBalance === 0;
  const isLowBalance = club.fundBalance > 0 && club.fundBalance < 500;
  const hasFundWarning = isZeroBalance || isLowBalance;
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();

  function handleEdit() {
    setIsEditOpen(true);
  }

  function handleDelete() {
    setIsDeleteOpen(true);
  }

  const getSportTagColor = (sport: string) => {
    switch (sport) {
      case 'Football':
        return resolvedTokens.color.pending;
      case 'Badminton':
        return resolvedTokens.color.success;
      case 'Pickleball':
        return resolvedTokens.color.info;
      default:
        return resolvedTokens.color.primary;
    }
  };

  return (
    <div
      className={cn(
        'relative flex flex-col rounded-xl border bg-white p-5 shadow-sm transition-shadow hover:shadow-md',
        hasFundWarning
          ? 'border-l-4 border-l-error border-t-neutral-border border-r-neutral-border border-b-neutral-border'
          : 'border-neutral-border',
      )}
    >
      {/* Top row */}
      <div className="mb-3 flex items-center justify-between">
        <Tag content={club.sport} type="outline" color={getSportTagColor(club.sport)} />
        <div className="flex items-center gap-1">
          {hasFundWarning && (
            <RenderIcon name="exclamation-triangle" className="h-5 w-5 text-error" />
          )}
          <Menu
            align="start"
            trigger={
              <IconButton
                icon="ellipsis-vertical"
                color="neutral"
                variant="default"
                className="rounded-md"
              />
            }
            items={[
              { key: 'edit', label: 'Edit', onClick: handleEdit },
              { key: 'delete', label: 'Delete', onClick: handleDelete, danger: true },
            ]}
          />
        </div>
      </div>

      {/* Name */}
      <h3 className="mb-4 text-xl font-semibold text-neutral-black">{club.name}</h3>

      {/* Stats */}
      <div className="mb-4 grid grid-cols-2 gap-3">
        <div className="rounded-lg border border-neutral-border p-3">
          <p className="mb-1 text-xs font-medium uppercase tracking-wide text-neutral-text-secondary">
            Members
          </p>
          <p className="text-2xl font-bold text-neutral-black">{club.membersCount}</p>
        </div>
        <div
          className={cn(
            'rounded-lg border p-3',
            isZeroBalance ? 'border-error bg-error-bg' : 'border-neutral-border',
          )}
        >
          <p
            className={cn(
              'mb-1 text-xs font-medium uppercase tracking-wide',
              isZeroBalance ? 'text-error' : 'text-neutral-text-secondary',
            )}
          >
            Fund Balance
          </p>
          <p
            className={cn(
              'text-2xl font-bold',
              isZeroBalance ? 'text-error' : 'text-neutral-black',
            )}
          >
            {formatCurrency(club.fundBalance)}
          </p>
        </div>
      </div>

      {/* Captain info + status */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div
            className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold"
            style={{
              background: resolvedTokens.color.primaryBg,
              color: resolvedTokens.color.primary,
            }}
          >
            {getInitials(club.captainName ?? '—')}
          </div>
          <div>
            <p className="text-sm font-medium text-neutral-black">{club.captainName ?? '—'}</p>
            <p className="text-xs text-neutral-text-secondary">
              Created {formatDate(club.createdAt)}
            </p>
          </div>
        </div>
        <Tag
          content={club.status === 'active' ? 'Active' : 'Inactive'}
          color={
            club.status === 'active' ? resolvedTokens.color.success : resolvedTokens.color.error
          }
          type="outline"
        />
      </div>

      {/* Critical alert */}
      {isZeroBalance && (
        <div className="mb-4 flex items-center gap-2 rounded-lg bg-error-bg px-3 py-2">
          <RenderIcon name="exclamation-circle" className="h-4 w-4 shrink-0 text-error" />
          <p className="text-xs font-medium text-error">CRITICAL: Immediate funding required</p>
        </div>
      )}

      {/* Actions */}
      <div className="mt-auto flex gap-2">
        <Button size="small" variant="outline" color="neutral" className="flex-1">
          Manage Members
        </Button>
        <Button size="small" color="primary" className="flex-1">
          View Details
        </Button>
      </div>

      <ModalConfirm
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        onCancel={() => setIsDeleteOpen(false)}
        message={`Are you sure you want to delete "${club.name}"?`}
        submitLabel="Delete"
        submitColor="error"
        cancelLabel="Cancel"
        onSubmit={() => {
          setIsDeleting(true);
          void deleteClubApi(club.id, session?.backendToken)
            .then(() => {
              toastSuccess('Delete club success!');
              setIsDeleteOpen(false);
              router.refresh();
            })
            .catch((err) => {
              toastError(err instanceof Error ? err.message : 'Delete club failed');
            })
            .finally(() => {
              setIsDeleting(false);
            });
        }}
        isLoading={isDeleting}
      />

      <EditClubModal club={club} isOpen={isEditOpen} onClose={() => setIsEditOpen(false)} />
    </div>
  );
}
