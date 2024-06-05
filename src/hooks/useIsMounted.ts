import { useState, useEffect } from "react";

type UseIsMounted = (timeout?: number) => boolean;

export const useIsMounted: UseIsMounted = (timeout = 0) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const tID = setTimeout(() => setIsMounted(true), timeout);
    return () => clearTimeout(tID);
  }, [timeout]);

  return isMounted;
};
