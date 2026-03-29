'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';
import { ModuleNavItem } from '@enterprise/shared-types/modules';
import { RenderIcon, IconName } from '../components/icons';
import { Divider } from '../components/divider';
import { cn } from '../lib/utils';

type SidebarProps = {
  modules: ModuleNavItem[];
};

const navItemClass = (isActive: boolean) =>
  cn(
    'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
    isActive
      ? 'bg-primary text-white'
      : 'text-neutral-text-primary hover:bg-primary-background hover:text-primary'
  );

export function Sidebar({ modules }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="flex w-64 flex-col border-r border-neutral-border bg-neutral-white">
      <div className="p-4">
        <div className="mb-6 px-2">
          <Image src="/logo_full.webp" alt="Logo" width={140} height={40} priority />
        </div>

        <nav className="space-y-1">
          {modules.map((item) => (
            <Link
              key={item.id}
              href={item.route}
              className={navItemClass(pathname.startsWith(item.route))}
            >
              <RenderIcon name={item.icon as IconName} className="h-4 w-4" />
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-4 space-y-1">
        <Divider className="mb-3" />

        <Link
          href="/settings"
          className={navItemClass(pathname.startsWith('/settings'))}
        >
          <RenderIcon name="settings" className="h-4 w-4" />
          <span>Settings</span>
        </Link>

        <button
          onClick={() => signOut({ callbackUrl: '/auth/login' })}
          className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-neutral-text-primary transition-colors hover:bg-error-bg hover:text-error"
        >
          <RenderIcon name="log-out" className="h-4 w-4" />
          <span>Log out</span>
        </button>
      </div>
    </aside>
  );
}
