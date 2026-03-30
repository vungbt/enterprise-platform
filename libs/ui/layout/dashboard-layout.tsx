'use client';

import type { ModuleNavItem } from '@enterprise/shared-types/modules';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { FooterProvider, useFooterContent } from './footer-context';
import { Header } from './header';
import { Sidebar } from './sidebar';

type DashboardLayoutProps = {
  children: ReactNode;
  modules: ModuleNavItem[];
};

function DashboardLayoutInner({ children, modules }: DashboardLayoutProps) {
  const pathname = usePathname();
  const activeModule = modules.find((item) => pathname.startsWith(item.route));
  const footer = useFooterContent();

  return (
    <div
      className="flex h-screen bg-neutral-bg text-neutral-black"
      data-module={activeModule?.themeKey}
    >
      <Sidebar modules={modules} />
      <div className="flex h-screen flex-1 flex-col overflow-hidden">
        <Header activeModule={activeModule} />
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
        {footer && (
          <footer className="shrink-0 border-t border-neutral-border bg-neutral-white px-6 py-3">
            {footer}
          </footer>
        )}
      </div>
    </div>
  );
}

export function DashboardLayout({ children, modules }: DashboardLayoutProps) {
  return (
    <FooterProvider>
      <DashboardLayoutInner modules={modules}>{children}</DashboardLayoutInner>
    </FooterProvider>
  );
}
