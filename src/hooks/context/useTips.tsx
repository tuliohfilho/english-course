import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { getPresentPerfectTypes } from "../../api/presentPerfect.api";
import { getAllOnPronounciationTypes } from "../../api/onPronounciation.api";

interface initialContext {
  presentPerfectTypes: Array<PresentPerfectType>;
  onPronounciationTypes: Array<OnPronounciationType>;
}

const Context = createContext<initialContext>({} as initialContext);

const useTips = () => {
  const context = useContext(Context);

  return context;
};

const TipsProvider = ({ children }: { children: ReactNode }) => {
  const [presentPerfectTypes, setPresentPerfectTypes] = useState<
    Array<PresentPerfectType>
  >([]);
  const [onPronounciationTypes, setOnPronounciationTypes] = useState<
    Array<OnPronounciationType>
  >([]);

  useEffect(() => {
    getPresentPerfectTypes().then((data: Array<PresentPerfectType>) => {
      setPresentPerfectTypes(data);
    });
  }, []);

  useEffect(() => {
    getAllOnPronounciationTypes().then((data: Array<OnPronounciationType>) => {
      setOnPronounciationTypes(data);
    });
  }, []);

  const value = { presentPerfectTypes, onPronounciationTypes };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { useTips, TipsProvider };
