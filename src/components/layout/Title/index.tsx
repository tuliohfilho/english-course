import { Container } from '..';

import styles from './Title.module.css';

type Props = {
    title?: string,
    subTitle?: string
};

const Index = ({
    title,
    subTitle
}: Props) => {
    return (
        <Container>
            <div className={styles.title_container}>
                {title && <h1>{title}</h1>}
                {subTitle && <p>{subTitle}</p>}
            </div>
        </Container>
    )
}

export default Index;
