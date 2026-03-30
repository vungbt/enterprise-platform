'use client';

import { Button, IconButton, Tag } from '@enterprise/ui/components';
import { RenderIcon } from '@enterprise/ui/components/icons';
import { cn } from '@enterprise/ui/lib/utils';
import type { ClubDto } from '../api/sports-clubs.api';

const SPORT_COLORS: Record<string, string> = {
  Football: '#3b82f6',
  Badminton: '#10b981',
  Pickleball: '#f59e0b',
};

const DEFAULT_SPORT_COLOR = '#6366f1';

function formatCurrency(amount: number) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

function getInitials(name: string) {
  return name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

type ClubCardProps = {
  club: ClubDto;
};

export function ClubCard({ club }: ClubCardProps) {
  const isZeroBalance = club.fundBalance === 0;
  const isLowBalance = club.fundBalance > 0 && club.fundBalance < 500;
  const hasFundWarning = isZeroBalance || isLowBalance;
  const sportColor = SPORT_COLORS[club.sport] ?? DEFAULT_SPORT_COLOR;

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
        <Tag content={club.sport} color={sportColor} type="outline" />
        <div className="flex items-center gap-1">
          {hasFundWarning && (
            <RenderIcon name="exclamation-triangle" className="h-5 w-5 text-error" />
          )}
          <IconButton
            type="button"
            icon="adjustments-vertical"
            color="neutral"
            variant="ghost"
            aria-label="Club options"
            iconClassName="!h-4 !w-4"
            className="h-8 w-8 rounded-md"
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
          <p className="text-2xl font-bold text-neutral-black">{club.members}</p>
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

      {/* Creator info + status */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-background text-xs font-semibold text-primary">
            {getInitials(club.captain)}
          </div>
          <div>
            <p className="text-sm font-medium text-neutral-black">{club.captain}</p>
            <p className="text-xs text-neutral-text-secondary">
              Created {formatDate(club.createdAt)}
            </p>
          </div>
        </div>
        <Tag
          content={club.status === 'active' ? 'Active' : 'Inactive'}
          color={club.status === 'active' ? '#52c41a' : '#ff4d4f'}
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
        <Button size="small" variant="outline" color="neutral" className="flex-1">
          View Details
        </Button>
      </div>
    </div>
  );
}
