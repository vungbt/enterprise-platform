import type { DashboardModule } from '@enterprise/shared-types/modules';
import { ThemeProvider } from '@enterprise/ui/theme/theme-provider';

type ModuleWrapperProps = {
  module: DashboardModule;
};

export function ModuleWrapper({ module }: ModuleWrapperProps) {
  const Component = module.component;

  return (
    <ThemeProvider moduleKey={module.themeKey}>
      <Component />
    </ThemeProvider>
  );
}
