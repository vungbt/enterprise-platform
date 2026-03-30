import type { DashboardModule } from '@enterprise/shared-types/modules';
import { ThemeProvider } from '@enterprise/ui/theme/theme-provider';
import { auth } from '../auth';

type ModuleWrapperProps = {
  module: DashboardModule;
};

export async function ModuleWrapper({ module }: ModuleWrapperProps) {
  const session = await auth();
  const Component = module.component;

  return (
    <ThemeProvider moduleKey={module.themeKey}>
      <Component token={session?.backendToken} />
    </ThemeProvider>
  );
}
