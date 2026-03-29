export enum AppRoute {
  // Public
  Login = '/auth/login',
  UiDemo = '/ui-demo',

  // Protected
  Home = '/',

  // Modules (dynamic)
  Module = '/[module]',
}

export const PUBLIC_ROUTES: string[] = [AppRoute.Login, AppRoute.UiDemo];
