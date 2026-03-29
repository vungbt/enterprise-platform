import { ReactNode } from 'react';
import { DashboardLayout } from '@enterprise/ui/layout/dashboard-layout';
import { modules } from '@dashboard/module-registry/modules';

type PlatformLayoutProps = {
  children: ReactNode;
};

export default function PlatformLayout({ children }: PlatformLayoutProps) {
  const moduleNav = modules.map(({ id, name, route, icon, themeKey }) => ({
    id,
    name,
    route,
    icon,
    themeKey
  }));

  return <DashboardLayout modules={moduleNav}>{children}</DashboardLayout>;
}
