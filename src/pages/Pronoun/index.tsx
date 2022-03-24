import { usePronouns } from "../../hooks/context";

import Pronouns from "./Pronouns";

const Index = () => {
  const { pronounsCategories, setPronounCategory } = usePronouns();

  return (
    <Pronouns
      data={pronounsCategories}
      setPronounCategory={setPronounCategory}
    />
  );
};

export default Index;
