import { useState, useEffect } from "react";

import PresentPerfect from "./PresentPerfect";

import { getPresentPerfects } from "../../../api/presentPerfect.api";

const Index = () => {
  const [presentPerfect, setPresentPerfect] = useState<PresentPerfect>(
    {} as PresentPerfect
  );

  useEffect(() => {
    getPresentPerfects().then((data: PresentPerfect) => {
      setPresentPerfect(data);
    });
  }, []);

  return <PresentPerfect data={presentPerfect} />;
};

export default Index;
