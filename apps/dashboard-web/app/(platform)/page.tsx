import { modules } from '@dashboard/module-registry/modules';
import { redirect } from 'next/navigation';

export default function HomePage() {
  redirect(modules[0]?.route ?? '/hr');
}
