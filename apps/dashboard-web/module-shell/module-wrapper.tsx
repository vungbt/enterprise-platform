import { ThemeProvider } from '@enterprise/ui/theme/theme-provider';
import { DashboardModule } from '@enterprise/shared-types/modules';

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
