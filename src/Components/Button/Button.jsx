import styles from "./button.module.css";
import Link from "next/link";

const Button = ({ href, title, target }) => {
  return (
      <Link href={href} target={target} className={styles.button}>
        <span>{title}</span>
      </Link>
  );
};

export default Button;
