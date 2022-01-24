import {
    useState,
    useEffect
} from 'react';

import styles from './IrregularVerbs.module.css';

import {
    Title,
    Container
} from '../../components/layout';

import {
    getIrregularVerbs
} from '../../api/irregularVerbs.api';

import IrregularVerbs from './IrregularVerbs';

function Index() {
    const [toPlay, setToPlay] = useState(false);
    const [irrVerbs, setIrrVerbs] = useState<Array<IrregularVerb>>([]);
    const [irrVerbsFiltered, setIrrVerbsFiltered] = useState<Array<IrregularVerb>>([]);
    const [player, setPlayer] = useState<HTMLAudioElement>(new Audio());

    const start = (url: any) => {
        console.log('aqui')
        if (!toPlay)
            setPlayer(new Audio(url));

        setToPlay(!toPlay);
    }

    const filterVerbs = (str: string) => {
        const arr = irrVerbs.filter(verb => verb.infinitve.includes(str))

        setIrrVerbsFiltered(arr);
    }

    useEffect(() => {
        getIrregularVerbs()
            .then((data) => {
                setIrrVerbs(data);
                setIrrVerbsFiltered(data);
            });
    }, []);

    useEffect(() => {
        if (player)
            if (toPlay)
                player.play();
            else
                player.pause();
    }, [toPlay])

    return (
        <Container customClass="column">
            <Title
                title='Irregular Verbs'
                subTitle='Click the play button to listen to the audio'
            />

            <div className={styles.filter_container}>
                <input placeholder='Filter...' type="text" onChange={(e) => filterVerbs(e.target.value)} />
            </div>

            <div className={styles.irregularVerbs_container}>
                {irrVerbsFiltered && irrVerbsFiltered.map((irrVerb) => {
                    return <IrregularVerbs
                        key={irrVerb.id}
                        data={irrVerb}
                        start={start}
                    />
                })}
            </div>
        </ Container>
    )
}

export default Index;