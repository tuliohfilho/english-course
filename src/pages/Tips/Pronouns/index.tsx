import { usePronouns } from "../../../hooks/context";

import Pronoun from "./Pronoun";

const Index = () => {
  const { pronouns } = usePronouns();

  return <Pronoun data={pronouns} />;
};

export default Index;
