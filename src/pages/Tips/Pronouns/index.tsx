import { useEffect, useState } from "react";

import { getPronouns } from "../../../api/pronoun.api";

import Pronoun from "./Pronoun";

const Index = () => {
  const [pronouns, setPronoun] = useState<Pronoun>({} as Pronoun);

  useEffect(() => {
    getPronouns().then((data: Pronoun) => {
      console.log(data);
      setPronoun(data);
    });
  }, []);

  return <Pronoun data={pronouns} />;
};

export default Index;
