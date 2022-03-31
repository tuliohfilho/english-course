import { useTips } from "../../../hooks/context";

import PresentPerfect from "./PresentPerfect";

const Index = () => {
  const { presentPerfectTypes } = useTips();

  return <PresentPerfect data={presentPerfectTypes} />;
};

export default Index;
