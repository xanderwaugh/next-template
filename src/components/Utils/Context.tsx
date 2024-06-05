"use client";
import { useEffect, useState, createContext, useContext } from "react";
import { getLocalStorage, setLocalStorage } from "~/utils/storage";

// * Example Context
interface ContextProps {
  // * Is the player loading?
  loading: boolean;
  // * Set loading state
  setLoading: (loading: boolean) => void;
  // * is AutoNext enabled?
  autonext: boolean;
  // * Set AutoNext
  setAutonext: (value: boolean) => void;
}

// * Initial Context without functions
type InitialContext = Omit<ContextProps, "setLoading" | "setAutonext">;

// * Get the initial context
const getInitialContext: () => InitialContext = () => {
  if (typeof window === "undefined") return defaults;

  const autonext = getLocalStorage<boolean>("bebop-autonext", true);

  return {
    autonext,
    loading: true,
  };
};

const defaults: InitialContext = {
  autonext: true,
  loading: true, // false,
};

export const Context = createContext<ContextProps>({
  setLoading: () => undefined,
  setAutonext: () => undefined,
  ...defaults,
});

interface ProviderProps {
  children?: React.ReactNode;
}

export const CTXProvider: React.FC<ProviderProps> = ({ children }) => {
  const [state, setState] = useState<InitialContext>(defaults);

  const setLoading = (loading: boolean) => {
    setState((p) => ({ ...p, loading }));
  };

  const setAutonext = (autonext: boolean) => {
    setState((p) => {
      setLocalStorage("bebop-autonext", autonext);
      return { ...p, autonext };
    });
  };

  useEffect(() => {
    const initial = getInitialContext();
    setState(initial);
  }, []);

  return (
    <Context.Provider
      value={{
        setLoading,
        setAutonext,
        ...state,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useCTX = () => useContext(Context);

export const useAutonext = () => useCTX().autonext;
export const useLoading = () => useCTX().loading;
