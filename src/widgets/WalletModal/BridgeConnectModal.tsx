import React from "react";
import { Modal } from "../Modal";
import WalletCard from "./WalletCard";
import config from "./Bridgeconfig";
import { Login } from "./types";

interface Props {
  login: Login;
  onDismiss?: () => void;
}

const BridgeConnectModal: React.FC<Props> = ({ login, onDismiss = () => null }) => {
  return(
    <Modal title="Connect Wallet" onDismiss={onDismiss}>
      {config.map((entry, index) => (
        <WalletCard
          titleCard="Connect Wallet"
          key={entry.title}
          login={login}
          walletConfig={entry}
          onDismiss={onDismiss}
          mb={index < config.length - 1 ? "16px" : "0"}
        />
      ))}
    </Modal>
  )
};

export default BridgeConnectModal;
