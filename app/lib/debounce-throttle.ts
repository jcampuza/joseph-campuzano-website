export const debounce = <Args extends any[]>(callback: (...args: Args) => void, time: number) => {
  let timeout: NodeJS.Timeout | null = null;

  return (...args: Args) => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      callback(...args);
      timeout = null;
    }, time);
  };
};

export const throttle = <Args extends any[]>(callback: (...args: Args) => void, time: number) => {
  let timeout: NodeJS.Timeout | null = null;
  let latestArgs = [] as any[];

  return (...args: Args) => {
    // If there is a pending timeout, set the latest args and return, the next tick will call the callback with the latest args
    if (timeout) {
      latestArgs = args;
      return;
    }

    timeout = setTimeout(() => {
      callback(...(latestArgs as Args));
      timeout = null;
    }, time);
  };
};
