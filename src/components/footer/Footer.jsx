import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="/">BlogWise</Link>
      </div>
      <div className={styles.text}>Made By Ahmed Fayez</div>
    </div>
  );
};

export default Footer;
