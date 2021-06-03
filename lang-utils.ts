export class AssertionError extends Error {}

export class NotNullAssertionError extends AssertionError {}

export function isObject(value) {
  return value && typeof value === 'object';
}

export function isArray(value) {
  return value && Array.isArray(value);
}

export function isString(value) {
  return value && typeof value === 'string';
}

export function isUndefined(value) {
  return value === undefined;
}

export function isNull(value) {
  return value === null;
}

export function isNullOrUndefined(value) {
  return isNull(value) || isUndefined(value);
}

export function nullOrEmpty(value) {
  if (isNullOrUndefined(value)) return true;
  if (isObject(value)) return Object.keys(value).length === 0;
  if (isArray(value)) return value.length === 0;
  if (isString(value)) return value.trim().length === 0;
  return false;
}

export function notNullOrEmpty(value) {
  return !nullOrEmpty(value);
}

export function assertNotNullOrEmpty(value) {
  if (nullOrEmpty(value)) throw new NotNullAssertionError();
}
