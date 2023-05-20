export const pick = <T extends Record<string, unknown>, K extends keyof T>(
  obj: T,
  keys: K[],
): Pick<T, K> => {
  const res = {} as T;
  for (const key of keys) {
    res[key] = obj[key];
  }
  return res;
};
