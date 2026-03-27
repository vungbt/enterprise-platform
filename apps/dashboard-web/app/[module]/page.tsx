import { notFound } from 'next/navigation';
import { modules } from '../../module-registry/modules';
import { ModuleWrapper } from '../../module-shell/module-wrapper';

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
