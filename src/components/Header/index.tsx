"use client";
import styles from "./styles.module.scss";
import LogoIcon from "../Icons/Logo";
import Link from "next/link";
import Button from "../Button";
import MoreMenuIcon from "../Icons/MoreMenu";
import CloseIcon from "../Icons/Close";
import { useState } from "react";
const Header: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <header className={`${styles.header} container fluid`}>
      <div className={styles.headerWrapper}>
        <LogoIcon className={styles.logo} />
        <nav
          className={`${styles.navigationMenu} ${
            isMenuOpen ? styles.mobileMenuActive : ""
          }`}>
          <Link href="#" className={`${styles.link} ${styles.activeLink}`}>
            Swap
          </Link>
          <Link href="#" className={styles.link}>
            Liquidity
          </Link>
          <Link href="#" className={styles.link}>
            Staking
          </Link>
          <Link href="#" className={styles.link}>
            Whitepaper
          </Link>
          <Link href="#" className={styles.link}>
            Roadmap
          </Link>
        </nav>
        <div className={styles.buttonWrapper}>
          <Button>Connect</Button>
          {isMenuOpen ? (
            <button onClick={toggleMenu}>
              <CloseIcon />
            </button>
          ) : (
            <button onClick={toggleMenu}>
              <MoreMenuIcon />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
