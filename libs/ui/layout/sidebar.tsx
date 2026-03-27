'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ModuleNavItem } from '@enterprise/shared-types/modules';
import { Handshake, Landmark, Package, Users } from 'lucide-react';
import { cn } from '../lib/utils';

type SidebarProps = {
  modules: ModuleNavItem[];
};

const iconMap = {
  users: Users,
  handshake: Handshake,
  landmark: Landmark,
  package: Package
};

export function Sidebar({ modules }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r border-neutral-border bg-neutral-white p-4">
      <div className="mb-6 px-2">
        <h2 className="text-xl font-bold text-neutral-black">ERP Suite</h2>
      </div>

      <nav className="space-y-1">
        {modules.map((item) => {
          const Icon = iconMap[item.icon as keyof typeof iconMap] ?? Package;
          const isActive = pathname.startsWith(item.route);

          return (
            <Link
              key={item.id}
              href={item.route}
              className={cn(
                'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-primary text-white'
                  : 'text-neutral-text-primary hover:bg-primary-background hover:text-primary'
              )}
            >
              <Icon className="h-4 w-4" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
