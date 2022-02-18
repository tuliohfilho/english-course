import styles from "./OnPronounciation.module.css";

import { Card } from "../../../components/layout";
import { FaPlay } from "react-icons/fa";

type Props = {
  title: string;
  data: Array<OnPronounciationItem>;
  start(url: any): void;
};

const OnPronounciation = ({ data, title, start }: Props) => {
  const player = (item: OnPronounciationItem) => {
    const { audioName } = item;
    let audio = require(`../../../assets/audios/onPronounciation/${audioName}`);

    start(audio);
  };

  return (
    <div className={styles.card_content}>
      <Card>
        <div className={styles.title_container}>
          <h2>{title}</h2>
        </div>

        <div className={styles.content}>
          {data &&
            data.map((item) => {
              const { pronounciation, subject, auxiliaryVerb } = item;

              return (
                <p>
                  <b className={styles.item}>{auxiliaryVerb}</b>
                  <span>+</span>
                  <span className={styles.item}>{subject}</span>
                  <span>=</span>
                  <span className={styles.item}>{pronounciation}</span>
                  <span>
                    <FaPlay
                      className={styles.svg}
                      onClick={() => player(item)}
                    />
                  </span>
                </p>
              );
            })}
        </div>
      </Card>
    </div>
  );
};

export default OnPronounciation;
