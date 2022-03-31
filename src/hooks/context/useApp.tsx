import { createContext, ReactNode, useContext, useState } from "react";

interface initialContext {
  playerName: string;
  player: HTMLAudioElement;
  setPlayerName(playerName: string): void;
}

const Context = createContext<initialContext>({} as initialContext);

const useApp = () => {
  const context = useContext(Context);

  return context;
};

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [player] = useState<HTMLAudioElement>(new Audio());
  const [playerName, setPlayerName] = useState<string>("INITIAL");

  const value = {
    player,
    playerName,
    setPlayerName,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { useApp, AppProvider };
