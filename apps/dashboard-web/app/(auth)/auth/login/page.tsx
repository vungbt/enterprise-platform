import { AppRoute } from '@dashboard/app/routes';
import { auth } from '@dashboard/auth';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { LoginForm } from './components/login-form';

export const metadata = { title: 'Sign in — Enterprise Platform' };

export default async function LoginPage() {
  const session = await auth();
  if (session) redirect(AppRoute.Home);

  return (
    <main className="min-h-screen flex">
      {/* Left panel */}
      <div className="hidden lg:flex lg:w-1/2 relative flex-col items-center justify-center p-12 overflow-hidden">
        <Image src="/login_bg.webp" alt="" fill className="object-cover" priority />
        <div className="relative z-10 flex flex-col items-center text-center text-white">
          <Image
            src="/logo_icon.webp"
            alt="Logo"
            width={160}
            height={172}
            className="mb-5 brightness-0 invert"
            priority
          />
          <h1 className="font-bold mb-3 text-heading-1">Enterprise Platform</h1>
          <p className="text-title-1 opacity-80">Connected. Scalable. Unified.</p>
        </div>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex items-center justify-center bg-white p-8">
        <div className="w-full max-w-md">
          <h2 className="text-heading-5 mb-8">Sign in to your account</h2>
          <LoginForm />
        </div>
      </div>
    </main>
  );
}
