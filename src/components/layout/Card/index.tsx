import styles from "./Card.module.css";

type Props = {
  color?: string;
  customClass?: string;
  children?: React.ReactNode;
};

function Card({ color, children, customClass }: Props) {
  color = color || "blue";
  customClass = customClass || "";

  return (
    <div className={`${styles.card} ${styles[color]} ${styles[customClass]}`}>
      {children}
    </div>
  );
}

export default Card;
