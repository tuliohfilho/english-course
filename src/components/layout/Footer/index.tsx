import { 
    FaFacebook,
    FaLinkedin,
    FaInstagram
} from 'react-icons/fa';

import styles from './Footer.module.css';

function Index() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li><FaFacebook /></li>
                <li><FaInstagram /></li>
                <li><FaLinkedin /></li>
            </ul>
        </footer>
    )
}

export default Index;