import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  getPronounsCategories,
  getPronounsTypesByCategoryId,
} from "../../api/pronoun.api";

interface initialContext {
  pronounsTypes: Array<PronounType>;
  pronounCategory: PronounCategory;
  pronounsCategories: Array<PronounCategory>;

  setPronounCategory(category: PronounCategory): void;
}

const Context = createContext<initialContext>({} as initialContext);

const usePronouns = () => {
  const context = useContext(Context);

  return context;
};

const PronounsProvider = ({ children }: { children: ReactNode }) => {
  const [pronounCategory, setPronounCategory] = useState<PronounCategory>(
    {} as PronounCategory
  );
  const [pronounsCategories, setPronounsCategories] = useState<
    Array<PronounCategory>
  >([]);

  const [pronounsTypes, setPronounsTypes] = useState<Array<PronounType>>([]);

  useEffect(() => {
    getPronounsCategories().then((data: Array<PronounCategory>) => {
      setPronounsCategories(data);
    });
  }, []);

  useEffect(() => {
    const { id } = pronounCategory;
    console.log(id);
    getPronounsTypesByCategoryId(id).then((data: Array<PronounType>) => {
      console.log(data);
      setPronounsTypes(data);
    });
  }, [pronounCategory]);

  const values = {
    pronounsTypes,
    pronounCategory,
    pronounsCategories,
    setPronounCategory,
  };

  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export { usePronouns, PronounsProvider };
