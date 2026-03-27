'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { ModuleNavItem } from '@enterprise/shared-types/modules';
import { Sidebar } from './sidebar';
import { Header } from './header';

type DashboardLayoutProps = {
  children: ReactNode;
  modules: ModuleNavItem[];
};

export function DashboardLayout({ children, modules }: DashboardLayoutProps) {
  const pathname = usePathname();
  const activeModule = modules.find((item) => pathname.startsWith(item.route));

  return (
    <div className="flex min-h-screen bg-neutral-bg text-neutral-black" data-module={activeModule?.themeKey}>
      <Sidebar modules={modules} />
      <div className="flex min-h-screen flex-1 flex-col">
        <Header activeModule={activeModule} />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
