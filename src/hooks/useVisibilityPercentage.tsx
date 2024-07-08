import { useState, useEffect, RefObject } from "react";

const useVisibilityPercentage = (ref: RefObject<HTMLElement>) => {
  const [visibilityPercentage, setVisibilityPercentage] = useState<number>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisibilityPercentage(entry.intersectionRatio * 100),
      { threshold: Array.from({ length: 101 }, (_, i) => i / 100) }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return { visibilityPercentage };
};

export default useVisibilityPercentage;
