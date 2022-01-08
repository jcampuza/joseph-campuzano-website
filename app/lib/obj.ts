export const omit = <T extends Record<string, any>, K extends keyof T>(
  obj: T,
  ...keys: K[]
): Omit<T, K> => {
  const copy = { ...obj };
  for (const key of keys) {
    delete copy[key];
  }

  return copy;
};

export const pick = <T extends Record<string, any>, K extends keyof T>(
  obj: T,
  ...keys: K[]
): Pick<T, K> => {
  const res: Partial<T> = {};

  for (const key of keys) {
    res[key] = obj[key];
  }

  return res as Pick<T, K>;
};
