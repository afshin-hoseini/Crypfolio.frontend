/**
 * Retrieves the 1st level values of then given object.
 */
export function getValues<T>(object: T) {
  if (!object || typeof object !== 'object' || Array.isArray(object)) return;
  return Object.keys(object).map((key) => object?.[key as keyof T]);
}
