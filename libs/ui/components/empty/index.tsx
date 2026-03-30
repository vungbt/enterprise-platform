import type { ReactNode } from 'react';
import { cn } from '../../lib/utils';
import type { IconName } from '../icons';
import { RenderIcon } from '../icons';

type EmptyProps = {
  title?: string;
  description?: string;
  icon?: IconName;
  action?: ReactNode;
  className?: string;
};

export function Empty({
  title = 'No data',
  description,
  icon = 'inbox',
  action,
  className,
}: EmptyProps) {
  return (
    <div
      className={cn('flex flex-col items-center justify-center gap-3 py-12 text-center', className)}
    >
      <RenderIcon name={icon} className="h-12 w-12 text-neutral-border" />
      <div className="space-y-1">
        <p className="text-sm font-medium text-neutral-text-secondary">{title}</p>
        {description && (
          <p className="text-xs text-neutral-text-secondary opacity-70">{description}</p>
        )}
      </div>
      {action}
    </div>
  );
}
