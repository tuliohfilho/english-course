import { useState, useEffect } from "react";

import styles from "./PresentPerfect.module.css";

import PresentPerfect from "./PresentPerfect";

import { getPresentPerfects } from "../../../api/presentPerfect.api";
import { Container } from "../../../components/layout";

const Index = () => {
  const [longForm, setLongForm] = useState<Array<PresentPerfectItem>>([]);
  const [shortForm, setShortForm] = useState<Array<PresentPerfectItem>>([]);

  useEffect(() => {
    getPresentPerfects().then((data: PresentPerfect) => {
      setLongForm(data.longForm);
      setShortForm(data.shortForm);
    });
  }, []);

  return (
    <Container customClass="column">
      <h3>Present Perfect Forms</h3>
      <div className={styles.cards_container}>
        <PresentPerfect title="Long Form" data={longForm} />
        <PresentPerfect title="Short Form" data={shortForm} />
      </div>
    </Container>
  );
};

export default Index;
