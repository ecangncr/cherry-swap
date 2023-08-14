"use client";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import Button from "../Button";
import ConnectChecker from "../ConnectChecker";
import ArrowDownIcon from "../Icons/ArrowDown";
import CHR_TOKEN_ICON from "../Icons/CHR_TOKEN";
import DropdownIcon from "../Icons/Dropdown";
import SettingsIcon from "../Icons/Settings";
import Input from "../Input";
import styles from "./styles.module.scss";

type Props = React.HTMLAttributes<HTMLDivElement>;

const SwapCard: React.FC<Props> = ({ ...props }) => {
  const { openConnectModal } = useConnectModal();
  return (
    <div className={styles.swapCard} {...props}>
      <div className={styles.head}>
        <h2 className={styles.title}>Swap</h2>
        <SettingsIcon />
      </div>
      <p className={styles.information}>Easy way to trade your tokens</p>

      <div className={styles.body}>
        <div className={styles.swapContainer}>
          <p className={styles.address}>From</p>
          <div className={styles.selectContainer}>
            <Input type="number" placeholder="0.0" required />
            <div className={styles.tokenContainer}>
              <CHR_TOKEN_ICON />
              <p className={styles.tokenName}>CHR</p>
              <DropdownIcon />
            </div>
          </div>
        </div>
        <ArrowDownIcon />
        <div className={styles.swapContainer}>
          <p className={styles.address}>To</p>
          <div className={styles.selectContainer}>
            <Input type="number" placeholder="0.0" required />
            <div className={styles.tokenContainer}>
              <Button className={styles.selectButton}>
                Select a token
                <DropdownIcon />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <ConnectChecker
        disconnectedComponent={
          <Button className={styles.swapButton} onClick={openConnectModal}>
            Connect a wallet
          </Button>
        }
        connectedComponent={<Button className={styles.swapButton}>Swap</Button>}
      />
    </div>
  );
};

export default SwapCard;
