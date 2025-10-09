"use client";
import { useEffect, useRef } from "react";

export default function Background({ children }: Readonly<{ children: React.ReactElement }>) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const getScrollPosition = () => {
      if (containerRef.current) {
        const windowSize = window.innerHeight;
        const pageOffset = window.pageYOffset;
        const pageSize = containerRef.current.clientHeight;
        const percentage = (pageOffset * 100) / (pageSize - windowSize);

        containerRef.current.style.backgroundPosition = `50% ${percentage}%`;
      }
    };

    const debounce = <T extends (...args: never[]) => void>(
      func: T,
      delay: number
    ): ((...args: Parameters<T>) => void) => {
      let timeout: NodeJS.Timeout | null = null;

      return (...args: Parameters<T>) => {
        if (timeout) {
          clearTimeout(timeout);
        }
        timeout = setTimeout(() => func(...args), delay);
      };
    };

    const debounceGetScrollPosition = debounce(getScrollPosition, 5);

    window.addEventListener("scroll", debounceGetScrollPosition);
    return () => window.removeEventListener("sroll", debounceGetScrollPosition);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`p-6 bg-[url('/images/contour-map-light.svg')] dark:bg-[url('/images/contour-map.svg')] bg-top bg-size-[200%_auto]`}
    >
      {children}
    </div>
  );
}
