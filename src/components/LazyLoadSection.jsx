import React, { useEffect, useRef, useState, Suspense } from "react";
import { Spinner } from "./Spinner";
import { useLazyLoad } from "./LazyLoadContext";

export function LazyLoadSection({
  Component,
  index,
  delay = 0,
  fallback = null,
}) {
  const ref = useRef();
  const { currentIndex, jumpTo } = useLazyLoad();
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && currentIndex < index) {
          jumpTo(index);
        }
      },
      { threshold: 0.01 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [currentIndex, index, jumpTo]);

  useEffect(() => {
    if (currentIndex >= index) {
      setShouldRender(true);
    }
  }, [currentIndex, index]);

  return (
    <div ref={ref}>
      {shouldRender && (
        <Suspense fallback={fallback || <Spinner />}>
          <Component />
        </Suspense>
      )}
    </div>
  );
}
