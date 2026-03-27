'use client';

import { ModuleNavItem } from '@enterprise/shared-types/modules';

type HeaderProps = {
  activeModule?: ModuleNavItem;
};

export function Header({ activeModule }: HeaderProps) {

  return (
    <header className="flex h-16 items-center justify-between border-b border-neutral-border bg-neutral-white px-6">
      <div>
        <h1 className="text-lg font-semibold text-neutral-black">{activeModule?.name ?? 'Dashboard'}</h1>
        <p className="text-sm text-neutral-text-secondary">Enterprise Platform</p>
      </div>
      <div className="rounded-md bg-primary-background px-3 py-1 text-sm font-medium text-primary">
        {activeModule?.id?.toUpperCase() ?? 'HOME'}
      </div>
    </header>
  );
}
