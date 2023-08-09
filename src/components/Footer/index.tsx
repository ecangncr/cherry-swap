import ChatIcon from "../Icons/Chat";
import styles from "./styles.module.scss";
const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.tokenWrapper}>
        <p className={styles.tokenName}>CHR</p>
        <p className={styles.tokenPrice}>$24.19</p>
      </div>
      <button className={styles.chatButton}>
        <ChatIcon />
      </button>
    </footer>
  );
};

export default Footer;
