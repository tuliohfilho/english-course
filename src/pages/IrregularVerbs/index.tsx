import { useState, BaseSyntheticEvent, useEffect } from "react";

import { useIrregularVerbs } from "../../hooks/context";

import IrregularVerbs from "./IrregularVerbs";

function Index() {
  const { irregularVerbs } = useIrregularVerbs();

  const [irrVerbsFiltered, setIrrVerbsFiltered] = useState<
    Array<IrregularVerb>
  >([]);

  const filterVerbs = (e: BaseSyntheticEvent) => {
    const str = e.target.value.toLowerCase();
    const arr = irregularVerbs.filter((verb) => {
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
    setIrrVerbsFiltered(irregularVerbs);
  }, [irregularVerbs]);

  return <IrregularVerbs filterVerbs={filterVerbs} data={irrVerbsFiltered} />;
}

export default Index;
