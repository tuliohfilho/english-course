import {
    FaPlay
} from 'react-icons/fa';

import styles from './IrregularVerbs.module.css';

import { Card } from '../../components/layout';

type Props = {
    data: IrregularVerb,
    start(url: any): void
};

function IrregularVerbs({ data, start }: Props) {

    const player = () => {
        const { audioName } = data;
        let audio = require(`../../assets/audios/${audioName}`);

        start(audio);
    }

    const {
        past,
        infinitve,
        translation,
        pastParticiple
    } = data;

    return (
        <Card>
            <div className={styles.card_container}>
                <h2>{infinitve}</h2>
                <p className={styles.label}><b>Simple Past</b></p>
                <p><span>{past}</span></p>
                <p><b>Past Participle</b></p>
                <p><span>{pastParticiple}</span></p>
                <div className={styles.player_container}>
                    <span className={styles.translation}>({translation})</span>
                    <FaPlay
                        className={styles.svg}
                        onClick={player} />
                </div>
            </div>
        </Card>
    )
}

export default IrregularVerbs;