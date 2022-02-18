import styles from "./PresentPerfect.module.css";

import { Card } from "../../../components/layout";

type Props = {
  title: string;
  data: Array<PresentPerfectItem>;
};

const PresentPerfect = ({ data, title }: Props) => {
  return (
    <div className={styles.card_content}>
      <Card>
        <div className={styles.title_container}>
          <h2>{title}</h2>
        </div>
        <div className={styles.content}>
          {data &&
            data.map((item) => {
              const { verb, subject, auxiliaryVerb } = item;

              return (
                <p>
                  <span>{subject}</span>
                  <b>{auxiliaryVerb}</b>
                  <span>{verb}</span>
                </p>
              );
            })}
        </div>
      </Card>
    </div>
  );
};

export default PresentPerfect;
