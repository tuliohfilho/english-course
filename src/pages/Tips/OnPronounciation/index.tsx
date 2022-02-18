import { useEffect, useState } from "react";

import OnPronounciation from "./OnPronounciation";

import { getOnPronounciations } from "../../../api/onPronounciation.api";
import { Container } from "../../../components/layout";

const Index = () => {
  const [toPlay, setToPlay] = useState(false);
  const [player, setPlayer] = useState<HTMLAudioElement>(new Audio());
  const [simplePastTense, setSimplePastTense] = useState<
    Array<OnPronounciationItem>
  >([]);
  const [simplePresenteTense, setSimplePresenteTense] = useState<
    Array<OnPronounciationItem>
  >([]);

  const start = (url: any) => {
    if (!toPlay) setPlayer(new Audio(url));

    setToPlay(!toPlay);
  };

  useEffect(() => {
    if (toPlay) player.play();
    else player.pause();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toPlay]);

  useEffect(() => {
    getOnPronounciations().then((data: OnPronounciation) => {
      setSimplePastTense(data.simplePastTense);
      setSimplePresenteTense(data.simplePresenteTense);
    });
  }, []);

  return (
    <>
      <h3>On Pronounciation</h3>
      <Container customClass="start">
        <OnPronounciation
          title="Simple Present Tense"
          data={simplePresenteTense}
          start={start}
        />
        <OnPronounciation
          title="Simple Past Tense"
          data={simplePastTense}
          start={start}
        />
      </Container>
    </>
  );
};

export default Index;
