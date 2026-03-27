import './globals.css';
import { ReactNode } from 'react';
import { DashboardLayout } from '@enterprise/ui/layout/dashboard-layout';
import { modules } from '../module-registry/modules';
import { Providers } from './providers';

export const metadata = {
  title: 'Enterprise Platform',
  description: 'Modular ERP dashboard'
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  const moduleNav = modules.map(({ id, name, route, icon, themeKey }) => ({
    id,
    name,
    route,
    icon,
    themeKey
  }));

  return (
    <html lang="en">
      <body>
        <Providers>
          <DashboardLayout modules={moduleNav}>{children}</DashboardLayout>
        </Providers>
      </body>
    </html>
  );
}
