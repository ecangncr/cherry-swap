"use client";
import { useAccount } from "wagmi";

interface Props {
  connectedComponent: React.ReactNode;
  disconnectedComponent: React.ReactNode;
}

const ConnectChecker: React.FC<Props> = ({
  connectedComponent,
  disconnectedComponent,
}) => {
  const { isConnected } = useAccount();
  return <>{isConnected ? connectedComponent : disconnectedComponent}</>;
};

export default ConnectChecker;
