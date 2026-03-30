'use client';

import type { ModuleNavItem } from '@enterprise/shared-types/modules';
import { signOut, useSession } from 'next-auth/react';
import { Avatar } from '../components/avatar';
import { Divider } from '../components/divider';
import { IconButton } from '../components/icon-button';
import { Menu } from '../components/menu';

type HeaderProps = {
  activeModule?: ModuleNavItem;
};

export function Header({ activeModule }: HeaderProps) {
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <header className="flex h-16 items-center justify-between border-b border-neutral-border bg-neutral-white px-6">
      <div>
        <h1 className="text-lg font-semibold text-neutral-black">
          {activeModule?.name ?? 'Dashboard'}
        </h1>
        <p className="text-sm text-neutral-text-secondary">Enterprise Platform</p>
      </div>

      <div className="flex items-center gap-2">
        <IconButton icon="bell" variant="default" />
        <IconButton icon="settings" variant="default" />

        <Divider orientation="vertical" className="mx-2 h-9" />

        <Menu
          align="end"
          trigger={
            <button
              type="button"
              className="flex items-center gap-2 rounded-lg px-2 py-1 hover:bg-neutral-bg transition-colors focus:outline-none"
            >
              <div className="text-right">
                <p className="text-sm font-medium text-neutral-black leading-tight">
                  {user?.name ?? 'Profile'}
                </p>
                <p className="text-xs text-neutral-text-secondary capitalize leading-tight">
                  {user?.roles?.[0] ?? 'member'}
                </p>
              </div>
              <Avatar name={user?.name} src={user?.image} size="md" />
            </button>
          }
          customClasses={{
            menu: '!w-44 !bg-white !border !border-neutral-border !rounded-lg !shadow-2xl overflow-hidden',
          }}
          items={[
            {
              key: 'email',
              disabled: true,
              label: <span className="text-neutral-text-secondary">{user?.email ?? ''}</span>,
            },
            {
              key: 'logout',
              label: 'Log out',
              onClick: () => signOut({ callbackUrl: '/auth/login' }),
            },
          ]}
        />
      </div>
    </header>
  );
}
