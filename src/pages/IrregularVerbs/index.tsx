import { useState, useEffect, BaseSyntheticEvent } from "react";

import { getIrregularVerbs } from "../../api/irregularVerbs.api";

import IrregularVerbs from "./IrregularVerbs";

function Index() {
  const [irrVerbs, setIrrVerbs] = useState<Array<IrregularVerb>>([]);
  const [irrVerbsFiltered, setIrrVerbsFiltered] = useState<
    Array<IrregularVerb>
  >([]);

  const filterVerbs = (e: BaseSyntheticEvent) => {
    const str = e.target.value.toLowerCase();
    const arr = irrVerbs.filter((verb) => {
      const hasInPast = verb.past.toLowerCase().includes(str);
      const hasInInfinitive = verb.infinitve.toLowerCase().includes(str);
      const hasInPastParticiple = verb.pastParticiple
        .toLowerCase()
        .includes(str);

      return hasInPast || hasInInfinitive || hasInPastParticiple;
    });

    setIrrVerbsFiltered(arr);
  };

  useEffect(() => {
    getIrregularVerbs().then((data) => {
      setIrrVerbs(data);
      setIrrVerbsFiltered(data);
    });
  }, []);

  return <IrregularVerbs filterVerbs={filterVerbs} data={irrVerbsFiltered} />;
}

export default Index;
