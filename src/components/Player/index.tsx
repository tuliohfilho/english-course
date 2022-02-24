import { useEffect, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
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
  const [playing, setToPlay] = useState(false);
  const [player, setPlayer] = useState<HTMLAudioElement>(new Audio());

  const start = (url: any) => {
    if (!playing) setPlayer(new Audio(url));

    setToPlay(!playing);
  };

  useEffect(() => {
    if (playing) {
      player.play();
    } else {
      player.pause();
      setToPlay(false);
    }

    player.onended = () => {
      setToPlay(false);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing]);

  const play = () => {
    let audio = require(`../../assets/audios/${context}/${audioName}`);

    start(audio);
  };

  return <Wrapper onClick={play}>{playing ? <FaPause /> : <FaPlay />}</Wrapper>;
};

export default Player;
