import { useTips } from "../../../hooks/context";

import PresentPerfect from "./PresentPerfect";

const Index = () => {
  const { presentPerfect } = useTips();

  return <PresentPerfect data={presentPerfect} />;
};

export default Index;
