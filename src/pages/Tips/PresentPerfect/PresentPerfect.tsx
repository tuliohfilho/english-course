import styles from '../Tips.module.css';

import {
    Card
} from "../../../components/layout";

type Props = {
    title: string,
    data: Array<PresentPerfectItem>
};

const PresentPerfect = ({
    data,
    title,
}: Props) => {
    return (
        <Card>
            <div className={styles.card_content}>
                <h2>{title}</h2>

                {data && data.map((item) => {
                    const { verb, subject, auxiliaryVerb } = item;

                    return (
                        <p>
                            <span>{subject}</span>
                            <b><span>{auxiliaryVerb}</span></b>
                            <span>{verb}</span>
                        </p >
                    )
                })}
            </div>
        </Card>
    )
}

export default PresentPerfect;
