import { redirect } from 'next/navigation';
import { modules } from '@dashboard/module-registry/modules';

export default function HomePage() {
  redirect(modules[0]?.route ?? '/hr');
}
