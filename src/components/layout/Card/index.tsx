import styles from './Card.module.css';

type Props = {
    color?: string,
    children?: React.ReactNode;
}

function Card({ color, children }: Props) {
    color = color || 'blue'
    
    return (
        <div className={`${styles.card} ${styles[color]}`}>
            {children}
        </div>
    )
}

export default Card;
