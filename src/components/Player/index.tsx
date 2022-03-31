import { useEffect, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { useApp } from "../../hooks/context";
import { Wrapper } from "./styles";

export enum contexts {
  irregularVerbs = "irregularVerbs",
  onPronounciation = "onPronounciation",
}

export type ContextsType = keyof typeof contexts;

type Props = {
  audioName: string;
  context: ContextsType;
};

const Player = ({ audioName, context }: Props) => {
  const { player, playerName, setPlayerName } = useApp();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audioName !== playerName) {
      setIsPlaying(false);
    }
  }, [audioName, playerName]);

  const start = () => {
    setPlayerName(audioName);

    if (!isPlaying) {
      player.src = require(`../../assets/audios/${context}/${audioName}`);
      player.play();
      setIsPlaying(true);
    } else {
      player.pause();
      setIsPlaying(false);
    }

    player.onended = () => {
      setIsPlaying(false);
    };
  };

  return (
    <Wrapper onClick={start}>{isPlaying ? <FaPause /> : <FaPlay />}</Wrapper>
  );
};

export default Player;
