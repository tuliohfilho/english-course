import { createContext, ReactNode, useContext } from "react";

interface initialContext {}

const Context = createContext<initialContext>({} as initialContext);

const useApp = () => {
  const context = useContext(Context);

  return context;
};

const AppProvider = ({ children }: { children: ReactNode }) => {
  const value = {};

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { useApp, AppProvider };
