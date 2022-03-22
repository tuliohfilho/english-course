import { useEffect, useState } from "react";

import { getPronounsTypes } from "../../api/pronoun.api";

import Pronouns from "./Pronouns";

const Index = () => {
  const [pronounsTypes, setPronounsTypes] = useState<Array<PronounType>>([]);
  const [pronounType, setPronounType] = useState<PronounType>(
    {} as PronounType
  );

  useEffect(() => {
    getPronounsTypes().then((data: Array<PronounType>) => {
      setPronounsTypes(data);
    });
  }, []);

  useEffect(() => {
    console.log(pronounType);
  }, [pronounType]);

  return <Pronouns data={pronounsTypes} setPronounType={setPronounType} />;
};

export default Index;
