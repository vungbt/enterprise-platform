let loginPath = '/auth/login';

export function setApiClientConfig(config: { loginPath?: string }) {
  if (config.loginPath) loginPath = config.loginPath;
}

export function getLoginPath() {
  return loginPath;
}
