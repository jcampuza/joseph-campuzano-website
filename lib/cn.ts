export const cn = (...args: (string | Record<string, boolean> | undefined | null)[]) => {
  const res: string[] = [];

  for (const arg of args) {
    if (typeof arg === 'string') {
      res.push(arg);
    }

    if (typeof arg === 'object' && arg !== null) {
      for (const [key, value] of Object.entries(arg)) {
        if (value) {
          res.push(key);
        }
      }
    }
  }

  return res.join(' ');
};
