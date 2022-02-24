import { useEffect, useState } from "react";

import { getOnPronounciations } from "../../../api/onPronounciation.api";

import OnPronounciation from "./OnPronounciation";

const Index = () => {
  const [onPronounciation, setOnPronounciation] = useState<OnPronounciation>(
    {} as OnPronounciation
  );

  useEffect(() => {
    getOnPronounciations().then((data: OnPronounciation) => {
      setOnPronounciation(data);
    });
  }, []);

  return <OnPronounciation data={onPronounciation} />;
};

export default Index;
