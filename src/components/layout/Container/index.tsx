import styles from './Container.module.css';

type Props = {
    customClass: string;
    children?: React.ReactNode;
}

function Index({ children, customClass }: Props) {
    return (
        <div className={`${styles.container} ${styles[customClass]}`} >
            {children}
        </div>
    )
}

Index.defaultProps = {
    customClass: ''
}

export default Index
