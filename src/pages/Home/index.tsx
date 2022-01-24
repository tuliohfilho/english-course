import styles from './Home.module.css';

import { Container } from '../../components/layout';

import teacher from '../../assets/svg/home_logo.svg';

const Home = () => {
    return (
        <Container>
            <div className={styles.home_container}>
                <h1>
                    Welcome to the <span>English Course</span>
                </h1>
                <p>Start learning this amazing language now!</p>
                <img src={teacher} alt="Teacher" />
            </div>
        </Container>
    )
}

export default Home;
