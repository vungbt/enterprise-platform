'use client';

import type { ModuleNavItem } from '@enterprise/shared-types/modules';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { Header } from './header';
import { Sidebar } from './sidebar';

type DashboardLayoutProps = {
  children: ReactNode;
  modules: ModuleNavItem[];
};

export function DashboardLayout({ children, modules }: DashboardLayoutProps) {
  const pathname = usePathname();
  const activeModule = modules.find((item) => pathname.startsWith(item.route));

  return (
    <div
      className="flex min-h-screen bg-neutral-bg text-neutral-black"
      data-module={activeModule?.themeKey}
    >
      <Sidebar modules={modules} />
      <div className="flex min-h-screen flex-1 flex-col">
        <Header activeModule={activeModule} />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
