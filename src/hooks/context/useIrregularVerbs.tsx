import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { getIrregularVerbs } from "../../api/irregularVerbs.api";

interface initialContext {
  irregularVerbs: Array<IrregularVerb>;
}

const Context = createContext<initialContext>({} as initialContext);

const useIrregularVerbs = () => {
  const context = useContext(Context);

  return context;
};

const IrregularVerbsProvider = ({ children }: { children: ReactNode }) => {
  const [irregularVerbs, setIrregularVerbs] = useState<Array<IrregularVerb>>(
    []
  );

  useEffect(() => {
    getIrregularVerbs().then((data) => {
      setIrregularVerbs(data);
    });
  }, []);

  const value = {
    irregularVerbs,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { useIrregularVerbs, IrregularVerbsProvider };
