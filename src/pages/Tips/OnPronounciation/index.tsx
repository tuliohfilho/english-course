import { useTips } from "../../../hooks/context";

import OnPronounciation from "./OnPronounciation";

const Index = () => {
  const { onPronounciation } = useTips();

  return <OnPronounciation data={onPronounciation} />;
};

export default Index;
