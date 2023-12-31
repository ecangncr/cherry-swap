"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Button from "../Button";
export const CustomConnectButton = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        mounted,
      }) => {
        return (
          <div
            {...(!mounted && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}>
            {(() => {
              if (!mounted || !account || !chain) {
                return <Button onClick={openConnectModal}>Connect</Button>;
              }
              if (chain.unsupported) {
                return <Button onClick={openChainModal}>Wrong network</Button>;
              }
              return (
                <Button onClick={openAccountModal}>
                  {account.displayName}
                </Button>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
