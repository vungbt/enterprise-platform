import type { ComponentType } from 'react';

export type ModuleNavItem = {
  id: string;
  name: string;
  route: string;
  icon: string;
  themeKey: string;
};

export type DashboardModule = ModuleNavItem & {
  component: ComponentType;
};
