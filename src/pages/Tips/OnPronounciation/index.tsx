import { useTips } from "../../../hooks/context";

import OnPronounciation from "./OnPronounciation";

const Index = () => {
  const { onPronounciationTypes } = useTips();

  return <OnPronounciation data={onPronounciationTypes} />;
};

export default Index;
