import { useEffect, useState } from 'react';
import { throttle } from '../lib/debounce-throttle';
import { useIsMounted } from '../lib/useIsMounted';

const getScrollPercentage = (
  el: HTMLElement | null = document.scrollingElement as HTMLElement | null
) => {
  if (!el) {
    return 0;
  }

  const scrollHeight = el.scrollHeight;
  const scrollElClientHeight = el.clientHeight;
  const scrollTop = el.scrollTop;

  return scrollTop / (scrollHeight - scrollElClientHeight);
};

export const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const isMounted = useIsMounted();

  useEffect(() => {
    const setProgressFn = () => {
      if (isMounted()) {
        setScrollProgress(getScrollPercentage());
      }
    };

    const setProgressThrottled = throttle(setProgressFn, 80);

    window.addEventListener('scroll', setProgressThrottled);

    return () => {
      window.removeEventListener('scroll', setProgressThrottled);
    };
  }, [isMounted]);

  return (
    <div
      className="fixed top-0 left-0 h-1 w-full bg-blue-700 origin-left transition-transform duration-200"
      style={{
        transform: `scaleX(${scrollProgress})`,
      }}
    ></div>
  );
};
