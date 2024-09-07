'use client';

import { useEffect, useRef } from 'react';

const getScrollPercentage = (
  el: HTMLElement | null = document.scrollingElement as HTMLElement | null,
) => {
  if (!el) {
    return 0;
  }

  return el.scrollTop / (el.scrollHeight - el.clientHeight);
};

export const ScrollProgressBar = () => {
  const scrollElRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollEl = scrollElRef.current;

    const setScrollTransform = () => {
      if (scrollEl) {
        requestAnimationFrame(() => {
          scrollEl.style.transform = `scaleX(${getScrollPercentage()})`;
        });
      }
    };

    setScrollTransform();
    window.addEventListener('scroll', setScrollTransform);
    return () => {
      window.removeEventListener('scroll', setScrollTransform);
    };
  }, []);

  return (
    <div>
      <div
        ref={scrollElRef}
        className="fixed top-0 left-0 h-1 w-full bg-violet-700 origin-left scale-x-0"
      ></div>
    </div>
  );
};
