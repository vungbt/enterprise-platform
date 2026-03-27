import { redirect } from 'next/navigation';
import { modules } from '../module-registry/modules';

export default function HomePage() {
  redirect(modules[0]?.route ?? '/hr');
}
