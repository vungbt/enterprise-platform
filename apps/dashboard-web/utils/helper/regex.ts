export const REGEX_EMAIL =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/** At least 8 chars, one uppercase, one lowercase, one digit */
export const REGEX_PASSWORD = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$/;

function isEmail(input: string) {
  return REGEX_EMAIL.test(input);
}

function isStrongPassword(input: string) {
  return REGEX_PASSWORD.test(input);
}

export const RegexHelper = {
  REGEX_EMAIL,
  REGEX_PASSWORD,
  isEmail,
  isStrongPassword,
};
