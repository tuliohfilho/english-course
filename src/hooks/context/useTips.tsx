import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { getPresentPerfects } from "../../api/presentPerfect.api";
import { getOnPronounciations } from "../../api/onPronounciation.api";

interface initialContext {
  presentPerfect: PresentPerfect;
  onPronounciation: OnPronounciation;
}

const Context = createContext<initialContext>({} as initialContext);

const useTips = () => {
  const context = useContext(Context);

  return context;
};

const TipsProvider = ({ children }: { children: ReactNode }) => {
  const [presentPerfect, setPresentPerfect] = useState<PresentPerfect>(
    {} as PresentPerfect
  );
  const [onPronounciation, setOnPronounciation] = useState<OnPronounciation>(
    {} as OnPronounciation
  );

  useEffect(() => {
    getPresentPerfects().then((data: PresentPerfect) => {
      setPresentPerfect(data);
    });
  }, []);

  useEffect(() => {
    getOnPronounciations().then((data: OnPronounciation) => {
      setOnPronounciation(data);
    });
  }, []);

  const value = { presentPerfect, onPronounciation };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { useTips, TipsProvider };
