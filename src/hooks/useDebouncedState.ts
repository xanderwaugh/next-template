import { useEffect, useState } from "react";

export const useDebouncedState = <T>(
  initialState: T,
  delay: number,
): [T, (value: T) => void] => {
  const [state, setState] = useState<T>(initialState);
  const [debouncedState, setDebouncedState] = useState<T>(initialState);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedState(state);
    }, delay);

    return () => clearTimeout(timer);
  }, [state, delay]);

  const setDebouncedStateWithDelay = (value: T) => {
    setState(value);
    setDebouncedState(value);
  };

  return [debouncedState, setDebouncedStateWithDelay];
};
