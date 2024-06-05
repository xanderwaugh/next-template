"use client";
import { useEffect } from "react";

import { useScroll, useMotionValue, useTransform } from "framer-motion";

const clamp = (number: number, min: number, max: number) =>
  Math.min(Math.max(number, min), max);

function useBoundedScroll(bounds: number) {
  const { scrollY } = useScroll();
  const scrollYBounded = useMotionValue(0);
  const progress = useTransform(scrollYBounded, [0, bounds], [0, 1]);

  useEffect(() => {
    const onChange = (current: number) => {
      const previous = scrollY.getPrevious();

      if (previous === undefined) return;

      const diff = current - previous;
      const newScrollYBounded = scrollYBounded.get() + diff;

      scrollYBounded.set(clamp(newScrollYBounded, 0, bounds));
    };

    const unsub = scrollY.on("change", onChange);

    return () => {
      unsub();
    };
  }, [bounds, scrollY, scrollYBounded]);

  return { scrollYBounded, progress };
}

export default useBoundedScroll;
