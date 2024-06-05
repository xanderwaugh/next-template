import { useState, useEffect, useRef } from "react";

interface Size {
  width: number;
  height: number;
}

// <T extends HTMLElement = HTMLElement>
// Generic for HTML Elements
type UseSize = <T extends HTMLElement = HTMLElement>() => {
  size: Size | null;
  ref: React.RefObject<T>;
};

const useSize: UseSize = <T extends HTMLElement = HTMLElement>() => {
  const [size, setSize] = useState<Size | null>(null);
  const ref = useRef<T>(null);

  useEffect(() => {
    const getElementSize = () => {
      if (ref.current) {
        const { offsetWidth, offsetHeight } = ref.current;
        setSize({ width: offsetWidth, height: offsetHeight });
      }
    };

    // * Initial size on mount
    getElementSize();

    // * Recalculate size on window resize
    const handleResize = () => {
      getElementSize();
    };

    window.addEventListener("resize", handleResize);

    // * Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { size, ref };
};

export default useSize;
