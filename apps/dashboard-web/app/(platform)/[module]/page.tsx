import { modules } from '@dashboard/module-registry/modules';
import { ModuleWrapper } from '@dashboard/module-shell/module-wrapper';
import { notFound } from 'next/navigation';

type ModulePageProps = {
  params: Promise<{ module: string }>;
};

export default async function ModulePage({ params }: ModulePageProps) {
  const { module } = await params;
  const targetRoute = `/${module}`;
  const resolvedModule = modules.find((item) => item.route === targetRoute);

  if (!resolvedModule) {
    notFound();
  }

  return <ModuleWrapper module={resolvedModule} />;
}
