import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { getPronouns } from "../../api/pronoun.api";

interface initialContext {
  pronouns: Pronoun;
}

const Context = createContext<initialContext>({} as initialContext);

const usePronouns = () => {
  const context = useContext(Context);

  return context;
};

const PronounsProvider = ({ children }: { children: ReactNode }) => {
  const [pronouns, setPronouns] = useState<Pronoun>({} as Pronoun);

  useEffect(() => {
    getPronouns().then((data: Pronoun) => {
      setPronouns(data);
    });
  }, []);

  return (
    <Context.Provider
      value={{
        pronouns,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { usePronouns, PronounsProvider };
