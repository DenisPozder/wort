import styles from "./button.module.css";
import Link from "next/link";

const Button = ({ href, title }) => {
  return (
      <Link href={href} className={styles.button}>
        <span>{title}</span>
      </Link>
  );
};

export default Button;
