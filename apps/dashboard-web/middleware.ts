export { auth as middleware } from './auth';

export const config = {
  matcher: [
    /*
     * Chạy middleware trên tất cả routes trừ:
     * - /_next/static, /_next/image  (Next.js internals)
     * - /favicon.ico và static files (có extension)
     * Logic public/protected được xử lý trong authorized() callback ở auth.ts
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)',
  ],
};
