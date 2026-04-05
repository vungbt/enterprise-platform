import './globals.css';
import { setApiClientConfig } from '@enterprise/api-client/config';
import type { ReactNode } from 'react';
import { Providers } from './providers';

setApiClientConfig({ loginPath: '/auth/login' });

export const metadata = {
  title: 'Enterprise Platform',
  description: 'Modular ERP dashboard',
  icons: {
    icon: '/favicon_io/favicon.ico',
    shortcut: '/favicon_io/favicon-16x16.png',
    apple: '/favicon_io/apple-touch-icon.png',
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
